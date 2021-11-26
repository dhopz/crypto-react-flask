from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import psycopg2
import os
import requests

load_dotenv()

app = Flask(__name__)

CORS(app)

@app.route('/')
def hello_world():    
    print("Hello World")
    return 'Home Page Route'

@app.route('/coin')
def token_history():
    print("Getting price history....")
    base_url = 'https://www.alphavantage.co/query?'
    params = {'function': 'DIGITAL_CURRENCY_DAILY',
            'symbol': 'BTC',
            'market': 'GBP',
            'apikey': os.getenv('ALPHA_API')}         

    response = requests.get(base_url, params=params)
    history = response.json()
    time_series = history["Time Series (Digital Currency Daily)"]    

    for i in time_series.items():
            print(i[0], i[1]['4a. close (GBP)'])

    return response.json()