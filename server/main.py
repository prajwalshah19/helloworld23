import openai
import os
from flask import Flask, request, send_from_directory
#from Keys import API_KEY
app = Flask(__name__, static_folder="../client/pvet/build")

'''
openai.api_key = API_KEY
prompt = "list the top four locations to bike in New York"

response = openai.Completion.create(
    model="text-davinci-001",
    prompt=prompt,
    max_tokens=1, 
    temperature=0.4
)

output = ""
for result in response.choices:
    output += result.text  # prints genearated AI response

print(output)
# print(type(output))
'''

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

    return {"generation": [question, "generation2", "generation3"]}

@app.route("/get_inputs", methods = ['POST'])
def get_inputs():
    activity = request.form.get('activity')
    print("looking for activity", activity)
    location = request.form.get('location')
    print("looking for location", location)
    return [activity, location]

if __name__ == "__main__":
    app.run(debug=True)
