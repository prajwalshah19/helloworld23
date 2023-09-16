from flask import Flask
import openai

app = Flask(__name__)

# API KEY ------ HIDE -------
# API_KEY = "HIDDEN"
openai.api_key = API_KEY
prompt = "list the top four locations to bike in New York"

response = openai.Completion.create(
    model="text-davinci-001",
    prompt=prompt,
    max_tokens=12,
    temperature=0.4
)

output = ""
for result in response.choices:
    output += result.text  # prints genearated AI response
print(output)
# print(type(output))


@app.route("/generation")
def generaton():
    return ("generation:" [output])


if __name__ == "__main__":
    app.run(debug=True)
