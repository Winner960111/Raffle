from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import random

app = Flask(__name__)
CORS(app, origins='*')

df = []
selectedName = ''
@app.route('/setname', methods = ['POST'])
def set_name():
    global selectedName
    name = request.json
    selectedName = name['name']
    print(selectedName)
    return "ok"

@app.route('/list', methods = ['POST'])
def get_list():
    global df
    if 'file' not in request.files:
        return 'No file part'

    file = request.files['file']

    if file.filename == '':
        return 'No selected file'
    
    df = pd.read_excel(file, header=None) 
    return df.iloc[:, 0].tolist()

@app.route('/winner', methods = ['GET'])
def select_winner():

    global df, selectedName

    if selectedName == '':
        random_number = random.randint(0, len(df) - 1)
        selected_name = df.iloc[random_number, 0]  # Accessing the name from the DataFrame
        data = {'number': random_number, 'name': selected_name}
    else:
        for item in range(len(df)):
            if selectedName == df.iloc[item, 0]:
                data = {'number':item, 'name':selectedName}
                selectedName = ''
                continue
    return data

if __name__ == '__main__':
    app.run(debug = True, host = '0.0.0.0', port=5000)