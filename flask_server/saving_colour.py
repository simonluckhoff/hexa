import os
import re

colour_name = input("What's the name of your colour?\n").strip()
hex_code = input("What's the hex of your colour?\n").strip()
colour_keywords = input("Please provide at least 3 keywords associated\n").strip()

def to_slug(colour_name):
    slug = colour_name.strip().lower()
    slug = re.sub(r'\s+', '-', slug)
    slug = re.sub(r'[^a-z0-9\-]', '', slug)
    return slug

# we'll need to convert from python dict to js object string. 
new_colour = {
    "name": colour_name,
    "slug": to_slug(colour_name),
    "hex": hex_code,
    "keywords": colour_keywords
}

# __file__ -> refers to current filename
# os.path.abspath -> turns into absolute path
# os.path.dirname -> gets folder that the current script is in. 
# Essentially it dynamically grabs the path of this file. 
current_dir = os.path.dirname(os.path.abspath(__file__))

# this builds the path to the colours.js file. 
js_file = os.path.join(current_dir, '..', '..', 'first_react', 'client', 'src', 'components', 'colours.js')

# this just cleans it up. 
js_file = os.path.normpath(js_file)

print(js_file)


def dict_to_js_object(d):
    # going from python dict to js object syntax
    return (
        "    {\n"
        + "\n".join([f"     {k}: '{v}'," for k, v in d.items()])
        .rstrip(",")  # removing last comma
        + "\n    },\n"
    )

# for both read & write, with makes sure it auto closes afterwards. 
with open(js_file, "r+") as file:
    content = file.read()
    # ^ reads it into a sort of temporary memory, called content
    insert_point = content.rfind("]")
    # ^ tells us where to insert new object, just before ]

    if insert_point == -1:
        raise Exception("Could not find end of colours array in JS file.")
    
    new_entry = dict_to_js_object(new_colour)
    updated_content = content[:insert_point] + new_entry + content[insert_point:]

    file.seek(0)
    file.write(updated_content)
    file.truncate()