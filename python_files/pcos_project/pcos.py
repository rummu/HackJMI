from flask import Flask ,render_template, request
import pandas as pd
import numpy as np
import matplotlib.pyplot
import seaborn as sns
import pickle
import json
from sklearn.preprocessing import StandardScaler
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

@app.route('/pcos',methods = ['POST'])
def test():
     request_data = request.get_json()
     print("Data->",request_data)
     df = pd.DataFrame()
     df["Weight (Kg)"] = [float(request_data['weight'])]
     df['Height(Cm) '] = [float(request_data['height'])]
     df["Blood Group"] = [int(request_data['bloodgrp'])]
     df["Pulse rate(bpm)"] = [int(request_data['pulserate'])]
     df["RR     (breaths/min)"] = [int(request_data['breaths'])]
     df["Hb (g/dl)"] = [float(request_data['hb'])]
     df["Cycle (R/I)"] = [int(request_data['cycle'])]
     df["I       beta-HCG(mIU/mL)"] = [float(request_data['beta1'])]
     df["II      beta-HCG(mIU/mL)"] = [float(request_data['beta2'])]  
     df["LH(mIU/mL)"] = [float(request_data['lh'])]
     df["Hip(inch)"] = [int(request_data['hip'])]
     df["Waist (inch)"] = [int(request_data['waist'])]
     df["AMH(ng/mL)"] = [float(request_data['amh'])]
     df["PRL(ng/mL)"] = [float(request_data['prl'])]
     df["Vit D3 (ng/mL)"] = [float(request_data['vit'])]
     df["RBS(mg/dl)"] = [float(request_data['rbs'])]
     df["Follicle No. (L)"] = [int(request_data['fl'])]
     df["Follicle No. (R)"] = [int(request_data['fr'])]
     df["Avg. F size (L) (mm)"] = [float(request_data['avgl'])]
     df["Avg. F size (R) (mm)"] = [float(request_data['avgr'])]
     df["Endometrium (mm)"] = [float(request_data['edm'])]
     print(df)



     #Load the model
     # load
     with open('pcos_rf_model.pkl', 'rb') as f:
          forest = pickle.load(f)

     print("result->",forest.predict(df))
     return str(forest.predict(df))


if __name__ == "__main__":
    app.run(host='0.0.0.0')