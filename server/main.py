import openai
import os
from dotenv import load_dotenv
from flask import Flask, request, send_from_directory
import re
app = Flask(__name__, static_folder="../client/pvet/build")

load_dotenv()
openai.api_key = os.getenv('API_KEY')

def parse_locations(input_string):
    # Define the regular expression pattern to match numbered locations
    pattern = r'\d+\.\s+(.*?)(?=\n\d+\.|\Z)'
    
    # Use re.findall to extract all matched locations
    locations = re.findall(pattern, input_string)
    
    return locations


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route("/generation")
def generation():
    inputs = get_inputs()
    question = f"Where are some places I can go {inputs[0]} in {inputs[1]}?"
    print(question)
    response = openai.Completion.create(
    model="text-davinci-003",
    prompt=question,
    max_tokens=12, 
    temperature=0.4 
    )
    print(response)
    return {"generation": response}

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
    print(response)
    return parse_locations(response["choices"][0]["text"])

if __name__ == "__main__":
    app.run(debug=True, port=5005)
