import openai
import os
from dotenv import load_dotenv
from uuid import uuid4
from flask import Flask, request, send_from_directory, redirect
import re
import time
app = Flask(__name__, static_folder="../client/pvet/build")

load_dotenv()
openai.api_key = os.getenv('API_KEY')

locations_db = {}

def parse_locations(input_string):
    # Define the regular expression pattern to match numbered locations
    pattern = r'\d+\.\s+(.*?)(?=\n\d+\.|\Z)'
    
    # Use re.findall to extract all matched locations
    locations = re.findall(pattern, input_string)
    
    return locations

def split_descriptions(input_string):
    # Split the input string into descriptions based on the pattern of "<Location>:"
    descriptions = re.split(r'([A-Z][a-zA-Z\s]+:)', input_string)
    
    # Filter out empty strings and remove leading/trailing whitespace
    descriptions = [desc.strip() for desc in descriptions if desc.strip()]
    
    return descriptions

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# on get id
# request.args

@app.route("/db", methods = ['GET'])
def db():
    print(request.args.get("id"))
    id = request.args.get("id")
    if id in locations_db:
        return locations_db[id],200, {'Content-Type': 'application/json'}
    else:
        return {"error" : "404"}, 404, {'Content-Type': 'application/json'}
    

@app.route("/get_inputs", methods = ['POST'])
def get_inputs():
    activity = request.form.get('activity')
    print("looking for activity", activity)
    location = request.form.get('location')
    print("looking for location", location)
    question = f"List the top four places I can go {activity} in {location}(no newline tags in output)?"
    print(question)
    response = openai.Completion.create(
    model="text-davinci-003",
    prompt=question,
    max_tokens=100, 
    temperature=0.4 
    
    )
    names = parse_locations(response["choices"][0]["text"])
    question = f"Give me a description for each location in the list {names}"
    
    print(question)
    response2 = openai.Completion.create(
        model="text-davinci-003",
        prompt=question,
        max_tokens=200, 
        temperature=0.4 
    )
    print(response2)
    print(response2["choices"][0]["text"])
    descriptions = split_descriptions(response2["choices"][0]["text"])
    data = []
    print(names, descriptions)
    for i in range(len(names)):
        #time.sleep(30)
        #question = f'Give me a short description of {activity} at {name[i]}'

        '''
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=question,
            max_tokens=30, 
            temperature=0.4 
    
        )
        '''
        print(i)
        data.append( {"name": names[i], "description" : descriptions[(2 * i) + 1] } )
        





    print(data)
    id = uuid4()
    locations_db[str(id)] = data
    print(locations_db)
    return redirect(f'/content?id={id}')

if __name__ == "__main__":
    app.run(debug=True, port=5005)
