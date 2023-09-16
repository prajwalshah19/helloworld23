import openai
from flask import Flask
from Keys import API_KEY
app = Flask(__name__)

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


@app.route("/generation")
def generation():
    return {"generation": ["generation1", "generation2", "generation3"]}


if __name__ == "__main__":
    app.run(debug=True)