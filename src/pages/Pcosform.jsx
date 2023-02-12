// // import logo from "./logo.svg";
// import React, { Component }  from 'react';
// import "../css/Pcosform.css";
// import axios from 'axios'
// import { useState } from 'react';



// const Pcosform = () => {


//   const [weight,setweight]=useState('')
//   const [height,setheight]=useState('')
//   const [bloodgrp,setbloodgrp]=useState('')
//   const [pulserate,setpulserate]=useState('')
//   const [breaths,setbreaths]=useState('')
//   const [hb,sethb]=useState('')
//   const [cycle,setcycle]=useState('')
//   const [beta1,setbeta1]=useState('')
//   const [beta2,setbeta2]=useState('')
//   const [lh,setlh]=useState('')
//   const [hip,sethip]=useState('')
//   const [waist,setwaist]=useState('')
//   const [amh,setamh]=useState('')
//   const [prl,setprl]=useState('')
//   const [vit,setvit]=useState('')
//   const [rbs,setrbs]=useState('')
//   const [fl,setfl]=useState('')
//   const [fr,setfr]=useState('')
//   const [avgl,setavgl]=useState('')
//   const [avgr,setavgr]=useState('')
//   const [edm,setedm]=useState('')
//   const [ans,setAns]=useState('')



  
  

//   const handleSubmit=async(e)=>{
//     e.preventDefault()
//     console.log("data->",height)
//     const {data}= await axios.post('http://localhost:5000/pcos',{weight,height,bloodgrp,pulserate,breaths,hb,cycle,beta1,beta2,lh,hip,waist,amh,prl,vit,rbs,fl,fr,avgl,avgr,edm});
//     console.log("data->", data);
//     setAns(data[0])
//   }
//   return (
//     <>
//     <div id="main-pcos">
//         <form id="survey-form" onSubmit={handleSubmit}>
//         <div id="input-fields">
//             <label id="name-label"><b>Name:</b></label>
//             <input id="name" type="name" name="name" className="form" required placeholder="Full Name"/><br/>
//             <br/>
//             <label id="email-label"><b>Email:</b></label>
//             <input id="email" type="email" name="email" className="form" required placeholder="example@mail.com"/><br/>
//             <br/>
//             <label id="number-label"><b>Age:</b></label>
//             <input id="number" type="number" name="number" className="form" min="5" max="99" placeholder="12+"/>
//          </div>

        

//          <div id="parameters">
//             <h1 className='param'>Please Enter the values </h1>

//             <label id="Weight(Kg)-label"><b>Weight (Kg)</b></label>
//             <input id="Weight(Kg)" className="form" name="number" required placeholder="" value={weight} onChange={(e)=>setweight(e.target.value)}/><br/>
//             <br/>

//             <label id="Height(Cm)-label"><b>Height(Cm)</b></label>
//             <input id="Height(Cm)" className="form" name="number" placeholder="" value={height} onChange={(e)=>setheight(e.target.value)}/><br/>
//             <br/>

//             <label id="BloodGroup"><b>Blood Group</b></label>
//             <input id="BloodGroup" className="form" name="number" placeholder="example: 12 ,11 etc" value={bloodgrp} onChange={(e)=>setbloodgrp(e.target.value)}/><br/>
//             <br/>

//             <label id="Pulserate(bpm) "><b>Pulse rate(bpm) </b></label>
//             <input id="Pulserate(bpm) " className="form" name="number" placeholder="" value={pulserate} onChange={(e)=>setpulserate(e.target.value)}/><br/>
//             <br/>

//             <label id="RR(breaths/min)"><b>RR     (breaths/min)</b></label>
//             <input id="RR (breaths/min)" className="form" name="number"  required placeholder="" value={breaths} onChange={(e)=>setbreaths(e.target.value)}/><br/>
//             <br/>

//             <label id="Hb(g/dl)"><b>Hb (g/dl)</b></label>
//             <input id="Hb(g/dl)" className="form" name="number" required placeholder="" value={hb} onChange={(e)=>sethb(e.target.value)}/><br/>
//             <br/>

//             <label id="Cycle(R/I)"><b>Cycle (R/I)</b></label>
//             <input id="Cycle(R/I)" className="form" name="number" required placeholder="" value={cycle} onChange={(e)=>setcycle(e.target.value)}/><br/>
//             <br/>

//             <label id="Ibeta-HCG(mIU/mL)"><b>I       beta-HCG(mIU/mL)</b></label>
//             <input id="Ibeta-HCG(mIU/mL)'" className="form" name="number" required placeholder="" value={beta1} onChange={(e)=>setbeta1(e.target.value)}/><br/>
//             <br/>

//             <label id="Ibeta-HCG(mIU/mL)"><b>II      beta-HCG(mIU/mL)</b></label>
//             <input id="Ibeta-HCG(mIU/mL)'" className="form" name="number" required placeholder="" value={beta2} onChange={(e)=>setbeta2(e.target.value)}/><br/>
//             <br/>

//             <label id="LH(mIU/mL)"><b>LH(mIU/mL)</b></label>
//             <input id="LH(mIU/mL)" className="form" name="number" required placeholder="" value={lh} onChange={(e)=>setlh(e.target.value)}/><br/>
//             <br/>


//             <label id="Hip(inch)"><b>Hip(inch)</b></label>
//             <input id="Hip(inch)" className="form" name="number" required placeholder="" value={hip} onChange={(e)=>sethip(e.target.value)}/><br/>
//             <br/>


//             <label id="Waist(inch)"><b>Waist (inch)</b></label>
//             <input id="Waist(inch)" className="form" name="number" required placeholder="" value={waist} onChange={(e)=>setwaist(e.target.value)}/><br/>
//             <br/>


//             <label id="AMH(ng/mL)"><b>AMH(ng/mL)</b></label>
//             <input id="AMH(ng/mL)" className="form" name="number" required placeholder="" value={amh} onChange={(e)=>setamh(e.target.value)}/><br/>
//             <br/>



//             <label id="PRL(ng/mL)"><b>PRL(ng/mL)</b></label>
//             <input id="PRL(ng/mL)" className="form" name="number" required placeholder="" value={prl} onChange={(e)=>setprl(e.target.value)}/><br/>
//             <br/>


//             <label id="VitD3(ng/mL)"><b>Vit D3 (ng/mL)</b></label>
//             <input id="VitD3(ng/mL)" className="form" name="number" required placeholder="" value={vit} onChange={(e)=>setvit(e.target.value)}/><br/>
//             <br/>


//             <label id="RBS(mg/dl)"><b>RBS(mg/dl)</b></label>
//             <input id="RBS(mg/dl)" className="form" name="number" required placeholder="" value={rbs} onChange={(e)=>setrbs(e.target.value)}/><br/>
//             <br/>

//             <label id="FollicleNo.(L)"><b>Follicle No. (L)</b></label>
//             <input id="FollicleNo.(L)" className="form" name="number" required placeholder="" value={fl} onChange={(e)=>setfl(e.target.value)}/><br/>
//             <br/>

//             <label id="Follicle No.(R)"><b>Follicle No. (R)</b></label>
//             <input id="Follicle No.(R)" className="form" name="number" required placeholder="" value={fr} onChange={(e)=>setfr(e.target.value)}/><br/>
//             <br/>

//             <label id="Avg.Fsize(L)(mm)"><b>Avg. F size (L) (mm)</b></label>
//             <input id="Avg.Fsize(L)(mm)" className="form" name="number" required placeholder="" value={avgl} onChange={(e)=>setavgl(e.target.value)}/><br/>
//             <br/>

//             <label id="Avg.Fsize(R)(mm)"><b>Avg. F size (R) (mm)</b></label>
//             <input id="Avg.Fsize(R)(mm)" className="form" name="number" required placeholder="" value={avgr} onChange={(e)=>setavgr(e.target.value)}/><br/>
//             <br/>

//             <label id="Endometrium(mm)"><b>Endometrium (mm)</b></label>
//             <input id="Endometrium(mm)" className="form" name="number" required placeholder="" value={edm} onChange={(e)=>setedm(e.target.value)}/><br/>
//             <br/>


//          </div>
//           <div id="ending" data-bs-toggle="modal" data-bs-target="#exampleModal"><br/><br/>
//             <input id="submit" type="submit"  className="form"/>
//           </div>
//         </form>
//     </div>
//     <div
//         className="modal fade"
//         id="exampleModal"
//         tabindex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h1 className="modal-title fs-5" id="exampleModalLabel">
//                 REPORT
//               </h1>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">YOU ARE {ans==0?'Not Affected by PCOS':'Affected by PCOS'}</div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Pcosform;

// import logo from "./logo.svg";
import React, { Component }  from 'react';
import "../css/Pcosform.css";
import axios from 'axios'
import { useState } from 'react';



const Pcosform = () => {


  const [weight,setweight]=useState('')
  const [height,setheight]=useState('')
  const [bloodgrp,setbloodgrp]=useState('')
  const [pulserate,setpulserate]=useState('')
  const [breaths,setbreaths]=useState('')
  const [hb,sethb]=useState('')
  const [cycle,setcycle]=useState('')
  const [beta1,setbeta1]=useState('')
  const [beta2,setbeta2]=useState('')
  const [lh,setlh]=useState('')
  const [hip,sethip]=useState('')
  const [waist,setwaist]=useState('')
  const [amh,setamh]=useState('')
  const [prl,setprl]=useState('')
  const [vit,setvit]=useState('')
  const [rbs,setrbs]=useState('')
  const [fl,setfl]=useState('')
  const [fr,setfr]=useState('')
  const [avgl,setavgl]=useState('')
  const [avgr,setavgr]=useState('')
  const [edm,setedm]=useState('')
  const [ans,setAns]=useState('')



  
  

  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log("data->",height)
    const {data}= await axios.post('http://localhost:5000/pcos',{weight,height,bloodgrp,pulserate,breaths,hb,cycle,beta1,beta2,lh,hip,waist,amh,prl,vit,rbs,fl,fr,avgl,avgr,edm});
    console.log("data->", data);
    setAns(data[0])
  }
  return (
    <>
    <div id="main-pcos">
        <form id="survey-form" onSubmit={handleSubmit}>
        <div id="input-fields">
            <label id="name-label"><b>Name:</b></label>
            <input id="name" type="name" name="name" className="form custom-bg" required placeholder="Full Name"/><br/>
            <br/>
            <label id="email-label"><b>Email:</b></label>
            <input id="email" type="email" name="email" className="form custom-bg" required placeholder="example@mail.com"/><br/>
            <br/>
            <label id="number-label"><b>Age:</b></label>
            <input id="number" type="number" name="number" className="form custom-bg" min="5" max="99" placeholder="12+"/>
         </div>

        

         <div id="parameters">
            <h1 className='param'>Please Enter the values </h1>

            <label id="Weight(Kg)-label"><b>Weight (Kg)</b></label>
            <input id="Weight(Kg)" className="form custom-bg" name="number" required placeholder="example: 50, 65 etc" value={weight} onChange={(e)=>setweight(e.target.value)}/><br/>
            <br/>

            <label id="Height(Cm)-label"><b>Height(Cm)</b></label>
            <input id="Height(Cm)" className="form custom-bg" name="number" placeholder="example: 165, 185 etc" value={height} onChange={(e)=>setheight(e.target.value)}/><br/>
            <br/>

            <label id="BloodGroup"><b>Blood Group</b></label>
            <input id="BloodGroup" className="form custom-bg" name="number" placeholder="example: 12 ,11 etc" value={bloodgrp} onChange={(e)=>setbloodgrp(e.target.value)}/><br/>
            <br/>

            <label id="Pulserate(bpm) "><b>Pulse rate(bpm) </b></label>
            <input id="Pulserate(bpm) " className="form custom-bg" name="number" placeholder="example: 60, 85 etc" value={pulserate} onChange={(e)=>setpulserate(e.target.value)}/><br/>
            <br/>

            <label id="RR(breaths/min)"><b>RR     (breaths/min)</b></label>
            <input id="RR (breaths/min)" className="form custom-bg" name="number"  required placeholder="example: 12, 16 etc" value={breaths} onChange={(e)=>setbreaths(e.target.value)}/><br/>
            <br/>

            <label id="Hb(g/dl)"><b>Hb (g/dl)</b></label>
            <input id="Hb(g/dl)" className="form custom-bg" name="number" required placeholder="example: 13.2, 16.6 etc" value={hb} onChange={(e)=>sethb(e.target.value)}/><br/>
            <br/>

            <label id="Cycle(R/I)"><b>Cycle (R/I)</b></label>
            <input id="Cycle(R/I)" className="form custom-bg" name="number" required placeholder="example: 28, 3 etc" value={cycle} onChange={(e)=>setcycle(e.target.value)}/><br/>
            <br/>

            <label id="Ibeta-HCG(mIU/mL)"><b>I       beta-HCG(mIU/mL)</b></label>
            <input id="Ibeta-HCG(mIU/mL)'" className="form custom-bg" name="number" required placeholder="example: 2, 5 etc" value={beta1} onChange={(e)=>setbeta1(e.target.value)}/><br/>
            <br/>

            <label id="Ibeta-HCG(mIU/mL)"><b>II      beta-HCG(mIU/mL)</b></label>
            <input id="Ibeta-HCG(mIU/mL)'" className="form custom-bg" name="number" required placeholder="example: 2, 5 etc" value={beta2} onChange={(e)=>setbeta2(e.target.value)}/><br/>
            <br/>

            <label id="LH(mIU/mL)"><b>LH(mIU/mL)</b></label>
            <input id="LH(mIU/mL)" className="form custom-bg" name="number" required placeholder="example: 8.2, 10 etc" value={lh} onChange={(e)=>setlh(e.target.value)}/><br/>
            <br/>


            <label id="Hip(inch)"><b>Hip(inch)</b></label>
            <input id="Hip(inch)" className="form custom-bg" name="number" required placeholder="example: 31.5, 32.4 etc" value={hip} onChange={(e)=>sethip(e.target.value)}/><br/>
            <br/>


            <label id="Waist(inch)"><b>Waist (inch)</b></label>
            <input id="Waist(inch)" className="form custom-bg" name="number" required placeholder="example: 31.4, 30.4 etc" value={waist} onChange={(e)=>setwaist(e.target.value)}/><br/>
            <br/>


            <label id="AMH(ng/mL)"><b>AMH(ng/mL)</b></label>
            <input id="AMH(ng/mL)" className="form custom-bg" name="number" required placeholder="example: 2.4, 5.4 etc" value={amh} onChange={(e)=>setamh(e.target.value)}/><br/>
            <br/>



            <label id="PRL(ng/mL)"><b>PRL(ng/mL)</b></label>
            <input id="PRL(ng/mL)" className="form custom-bg" name="number" required placeholder="example: 25, 45 etc" value={prl} onChange={(e)=>setprl(e.target.value)}/><br/>
            <br/>


            <label id="VitD3(ng/mL)"><b>Vit D3 (ng/mL)</b></label>
            <input id="VitD3(ng/mL)" className="form custom-bg" name="number" required placeholder="example: 30, 45 etc" value={vit} onChange={(e)=>setvit(e.target.value)}/><br/>
            <br/>


            <label id="RBS(mg/dl)"><b>RBS(mg/dl)</b></label>
            <input id="RBS(mg/dl)" className="form custom-bg" name="number" required placeholder="example: 108, 120 etc" value={rbs} onChange={(e)=>setrbs(e.target.value)}/><br/>
            <br/>

            <label id="FollicleNo.(L)"><b>Follicle No. (L)</b></label>
            <input id="FollicleNo.(L)" className="form custom-bg" name="number" required placeholder="example: 6, 10 etc" value={fl} onChange={(e)=>setfl(e.target.value)}/><br/>
            <br/>

            <label id="Follicle No.(R)"><b>Follicle No. (R)</b></label>
            <input id="Follicle No.(R)" className="form custom-bg" name="number" required placeholder="example: 6, 10 etc" value={fr} onChange={(e)=>setfr(e.target.value)}/><br/>
            <br/>

            <label id="Avg.Fsize(L)(mm)"><b>Avg. F size (L) (mm)</b></label>
            <input id="Avg.Fsize(L)(mm)" className="form custom-bg" name="number" required placeholder="example: 18, 22 etc" value={avgl} onChange={(e)=>setavgl(e.target.value)}/><br/>
            <br/>

            <label id="Avg.Fsize(R)(mm)"><b>Avg. F size (R) (mm)</b></label>
            <input id="Avg.Fsize(R)(mm)" className="form custom-bg" name="number" required placeholder="example: 18, 22 etc" value={avgr} onChange={(e)=>setavgr(e.target.value)}/><br/>
            <br/>

            <label id="Endometrium(mm)"><b>Endometrium (mm)</b></label>
            <input id="Endometrium(mm)" className="form custom-bg" name="number" required placeholder="example: 12, 15 etc" value={edm} onChange={(e)=>setedm(e.target.value)}/><br/>
            <br/>


         </div>
          <div id="ending" data-bs-toggle="modal" data-bs-target="#exampleModal"><br/><br/>
            <input id="submit" type="submit"  className="form"/>
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
            <div className="modal-body">YOU ARE {ans==0?'Not Affected by PCOS':'Affected by PCOS'}</div>
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

export default Pcosform;