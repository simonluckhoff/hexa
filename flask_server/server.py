from flask import Flask, request, jsonify, abort
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from authentication import db, User
from config import ApplicationConfig
import os
import re
import json


app = Flask(__name__)
app.config.from_object(ApplicationConfig)
CORS(app) 
# app.config['SECRET_KEY'] = 'your-secret-key'


bcrypt = Bcrypt(app)
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route("/register", methods=["POST"])
def register_user():
    email = request.json["email"]
    password= request.json["password"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        abort(409)
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.commit()

    return jsonify({
        "id": new_user.id,
        "email": new_user.email,
    })




def to_slug(name):
    slug = name.strip().lower()
    slug = re.sub(r'\s+', '-', slug)
    slug = re.sub(r'[^a-z0-9\-]', '', slug)
    return slug

@app.route('/api/colour', methods=['POST'])
def add_colour():
    data = request.json
    name = data.get('name')
    hex = data.get('hex')
    keywords = data.get('keywords')
    # We need the .get, it looks for the "name" safely.
    # So if {hex:#FFFF} is passed, name will just be null, without .get, it'll throw KeyError. 


    # defensive way to make sure list happens. 
    if isinstance(keywords, str):  # built in method
        keywords_list = [k.strip() for k in keywords.split()]
        # this is lekker error handeling, if a long string is submitted, it cuts it into list. 
    else:
        keywords_list = keywords

    new_colour = {
        "name": name,
        "slug": to_slug(name),
        "hex": hex,
        "keywords": keywords_list
    }
    
    # dynamically grabs path for the file here, mega helpful. 
    current_dir = os.path.dirname(os.path.abspath(__file__))
    json_file = os.path.join(current_dir, '..', '..', 'first_react', 'client', 'src', 'components', 'colours.json')
    json_file = os.path.normpath(json_file)

    # adding a new colour to exisitng colours.json. 
    try:
        # reads existing data
        with open(json_file, "r") as file:
            data = json.load(file)
        
        # adding new colour
        data["colours"].append(new_colour)
        
        # saving to file
        with open(json_file, "w") as file:
            json.dump(data, file, indent=2)
        
        return jsonify({'message': 'Colour added and saved!'}), 200
    except Exception as e:
        return jsonify({'message': f'Error: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)
