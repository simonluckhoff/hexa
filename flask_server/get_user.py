import os 
import json

def get_user_by_email(email):
    # adjust path to your real user file
    current_dir = os.path.dirname(os.path.abspath(__file__))
    json_file = os.path.join(current_dir, 'users.json')

    try: 
        with open(json_file, 'r') as f:
            data = json.load(f)
            for user in data['users']:
                if user['email'] == email:
                    return user 
    except Exception as e:
        print(f"Error reading user file: {e}")

    return None