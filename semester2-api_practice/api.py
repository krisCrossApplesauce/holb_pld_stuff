#!/usr/bin/python3
from flask import Flask
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route('/')
def random():
    return random.randint(1000,1000000)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5252)
