from flask import Flask ,render_template, request
import pandas as pd
import numpy as np
import matplotlib.pyplot
import seaborn as sns
import pickle
import json
from sklearn.preprocessing import StandardScaler
import mysql.connector as conn

from types import SimpleNamespace
import time
from threading import Timer
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
     return "<h1 style='color:blue'>Hello pycharm!</h1>"

@app.route('/test',methods = ['POST'])
def test1():
     return str(2)

@app.route('/diabetes',methods = ['POST'])
def test():
     request_data = request.get_json()
     # print("Data->",request_data['glucose'])
     df = pd.DataFrame()
     df["glucose"] = [int(request_data['glucose'])]
     df["BP"] = [int(request_data['BP'])]
     df["st"] = [int(request_data['st'])]
     df["insl"] = [int(request_data['insl'])]
     df["bmi"] = [int(request_data['bmi'])]
     df["dpf"] = [int(request_data['dpf'])]
     df["age"] = [int(request_data['age'])]
     # df.to_csv('diabetes.csv',index=False)

     # print(df)

     #Store the data
     # mydb = conn.connect(host='localhost',user='root',password='RummanAhmadSql01@')
     # cursor = mydb.cursor()
     # cursor.execute('show databases')
     # cursor.fetchall()
     # cursor.execute('use rumman')

     # df1 = pd.read_csv('diabetes.csv',sep=";")
     # file = df1.values
     # print(file[0][0])
     # cursor.execute(f"insert into rumman.diabetes_new values({str(file[0][0])})")
     # mydb.commit()

     #Load the model
     # load
     with open('diabetes_rf_model.pkl', 'rb') as f:
          forest = pickle.load(f)

     print("result->",forest.predict(df))
     return str(forest.predict(df))


if __name__ == "__main__":
    app.run(host='0.0.0.0')