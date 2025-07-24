from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()

# universally unique identifiers
def get_uuid():
    return uuid4().hex
    # hex takes away spaces and the "-"

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    # that default returns a new unique id.
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.Text, nullable=False)