// import logo from "./logo.svg";
import React, { Component } from "react";
import { useState } from "react";
import "../css/Form.css";
import axios from "axios";

const Form = () => {
  const [glucose, setGlucose] = useState("");
  const [age, setAge] = useState("");
  const [BP, setBP] = useState("");
  const [st, setst] = useState("");
  const [insl, setinsl] = useState("");
  const [bmi, setbmi] = useState("");
  const [dpf, setdpf] = useState("");
  const[ans,setAns]=useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data}=await axios.post("http://localhost:5000/diabetes", {
      glucose,
      age,
      BP,
      st,
      insl,
      bmi,
      dpf,
    });
    console.log("data->", data);
    setAns(data[0])


  };
  return (
    <>
      <div id="main-diabetes" >
        <form id="survey-form"    onSubmit={handleSubmit}>
          <div id="input-fields">
            <label id="name-label">
              <b>Name:</b>
            </label>
            <input
              id="name"
              type="name"
              name="name"
              className="form custom-bg"
              required
              placeholder="Full Name"
            />
            <br />
            <br />
            <label id="email-label">
              <b>Email:</b>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form custom-bg"
              required
              placeholder="example@mail.com"
            />
            <br />
            <br />
            <label id="number-label">
              <b>Age:</b>
            </label>
            <input
              id="number"
              type="number"
              name="number"
              className="form custom-bg"
              min="5"
              max="99"
              placeholder="12+"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div id="parameters">
            <h1 className="param">Please Enter the Values </h1>

            <label id="glucose-label">
              <b>Glucose</b>
            </label>
            <input
              id="gluocse"
              className="form custom-bg"
              name="number"
              type="number"
              min="0"
              max="200"
              required
              placeholder="example: 21 ,142"
              value={glucose}
              onChange={(e) => setGlucose(e.target.value)}
            />
            <br />
            <br />

            <label id="BloodPressure-label">
              <b>BloodPressure</b>
            </label>
            <input
              id="BloodPressure"
              className="form custom-bg"
              name="number"
              type="number"
              min="0"
              max="200"
              required
              placeholder="example: 70 ,50 etc"
              value={BP}
              onChange={(e) => setBP(e.target.value)}
            />
            <br />
            <br />

            <label id="SkinThickness">
              <b>SkinThickness</b>
            </label>
            <input
              id="SkinThickness"
              className="form custom-bg"
              name="number"
              type="number"
              min="0"
              max="200"
              required
              placeholder="example: 35 ,40 etc"
              value={st}
              onChange={(e) => setst(e.target.value)}
            />
            <br />
            <br />

            <label id="Insulin">
              <b>Insulin</b>
            </label>
            <input
              id="Insulin"
              className="form custom-bg"
              name="number"
              type="number"
              min="0"
              max="200"
              required
              placeholder="example: 0 ,120 etc"
              value={insl}
              onChange={(e) => setinsl(e.target.value)}
            />
            <br />
            <br />

            <label id="BMI">
              <b>BMI</b>
            </label>
            <input
              id="BMI"
              className="form custom-bg"
              name="number"
              required
              placeholder="example: 33.5 ,22.1 etc"
              value={bmi}
              onChange={(e) => setbmi(e.target.value)}
            />
            <br />
            <br />

            <label id="DiabetesPedigreeFunction">
              <b>DiabetesPedigreeFunction</b>
            </label>
            <input
              id="DiabetesPedigreeFunction"
              className="form custom-bg"
              name="number"
              required
              placeholder="example:0.2 ,2.20 etc"
              value={dpf}
              onChange={(e) => setdpf(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div
            id="ending"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <br />
            <br />
            <input type="submit" className="form submit-color" />
            
          </div>
        </form>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                REPORT
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">YOU ARE {ans==0?'Not Diabetic':'Diabetic'}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Form;
