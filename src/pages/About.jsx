// import logo from "./logo.svg";
import React, { Component } from "react";
import "../css/About.css";

const About = () => {
  return (
    <>
    <br />
      <div className="about-section"> 
        <h1>About The Researchers</h1>
       </div>
       
       <section>
            <div class = "image">
               <img src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758__340.png"/>
            </div>

            <div class = "content">
                <ul class = "links">
                    <li><a href = "#">PCOS Diagnostic Researcher</a></li>
                </ul>
                
                <h2>Rumman Ahmad</h2>
                <p>Student of Jamia Millia Islamia enrolled in Computer Engineering.</p>
                
                <br /><br /><br />
                <ul class = "links">
                    <li><a href = "#">Diabetes Diagnostic Researcher</a></li>
                </ul>
                <h2>SANIA AHMAD</h2>
                <p>Student of Jamia Millia Islamia enrolled in Computer Engineering.</p>
            </div>
        </section>
        <h3 className="pb-4 mb-4 fst-italic border-bottom">
 
      </h3>
            
      <section className="research">
      <article className="blog-post">
        <h1>Research Analysis of PCOS</h1>
        <h2 className="blog-post-title ">ABSTRACT</h2>

        <p>Polycystic Ovary Syndrome (PCOS) is a hormonal disorder that affects a large percentage of women of reproductive age. PCOS causes imbalanced or delayed menstrual cycles and produces high levels of the male hormone. 
The ovaries may create a significant number of little fluid-filled sacs (follicles) yet fail to discharge eggs regularly. 
The actual cause of PCOS is uncertain. However, early exposure and curing, as well as weight loss, may lower the 
threat of long-term complications. This study focuses on PCOS diagnosis based on a clinical dataset supplied by 
Kottarathil, accessible via its Kaggle repository. Non -invasive screening parameters are used to evaluate a range 
of machine learning approaches for screening PCOS patients without the use of invasive diagnostics. According to 
the findings of the experiments, the Random Forest (RF) method outperforms the other prominent machine 
learning algorithms with an accuracy of 93.25%. Further, the out-of-bag (OOB) error is utilized for assessing the 
prediction performance of RF. </p>
        <hr/>
        
        <h2>Introduction</h2>
        <p>Polycystic Ovary Syndrome (PCOS/PCOD) is a serious disease that 
affects the ovaries of females in their reproductive years (15–45). 5 to 
10% of females in the reproductive age range suffer from this disease 
(Escobar-Morreale, 2018). PCOS is caused by a sex hormone imbalance. 
An increase in the level of androgens (male hormone) in females causes 
cysts in the ovary. Gradually, these lumps expand, then obstruct the 
process of ovulation. This disruption of ovulation in women with PCOS</p>

        <blockquote className="blockquote">
          <p>Contribution</p>
        </blockquote>
        <li> Defined a correlation-based feature selection methodology for the 
        Polycystic Ovary Syndrome patient dataset.</li>
        <li> Developed optimal classifier and correlation thresholds by evaluating many different machine learning algorithms on the PCOS 
        dataset.</li>
        <li> Developed optimal classifier and correlation thresholds by evaluating many different machine learning algorithms on the PCOS 
        dataset.</li>


        <h2>Conclusion</h2>
        <p>Polycystic Ovarian Syndrome is a complicated health problem with 
too complex a space of symptoms to easily diagnose clinically. Proper 
diagnosis is the foundation of an effective treatment, and in this work, 
we designed experiments using machine learning for efficiently diagnosing PCOS based on patient clinical data. We identified statistically 
significant and discriminating features based on the correlation coefficient that best indicated PCOS and then fed the features into different 
machine learning models. According to our extensive experiments on a 
benchmark dataset, the Random Forest had the greatest power in PCOS 
diagnosis. We reached this conclusion by using out-of-bag error to 
evaluate the accuracy of different models and selecting optimal values 
for tuning parameters, such as the number of representative predictors 
picked at random for a split. In Random Forest classification, the out-ofbag error was measured to choose tuning parameters such as tree 
splitting strategy and number of trees. Despite the success in this study, 
and because performance is dependent on the nature of the dataset, 
sampling, and pre-processing procedures, Random Forests may not always be the best solution. This study’s future scope could include the use 
of multi-modality data sets for PCOS diagnosis, such as ultrasound scans, 
as well as the use of different or larger data sets for diagnosis.</p>
        <ul>
          <li>The Random Forest classifier achieved the highest performance, with 
          a 90% accuracy </li>
        </ul>
        <br /><br /><br /><br /><br />

        <h1>Research Analysis of Diabetes</h1>
        <h2 className="blog-post-title mb-1">ABSTRACT</h2>

        <p>The chronic metabolic disorder diabetes mellitus is a fast-growing global problem with huge social, health, and economic consequences. It is estimated that in 2010 there were globally 285 million people (approximately 6.4% of the adult population) suffering from this disease. This number is estimated to increase to 430 million in the absence of better control or cure.</p>
        <hr/>
        
        <h2>Introduction</h2>
        <p>Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy. Most of the food you eat is broken down into sugar (also called glucose) and released into your bloodstream.</p>

    
        <h2>Conclusion</h2>
        <p>Made a model using ML Algorithms which has been trained and tested using model_selection module . Converted the dataset into standard value using standardization method . Predicted the tested value which gives an accuracy of 75%</p>
        <ul>
          <li>The Random Forest classifier achieved the highest performance, with 
          a 80% accuracy </li>
         
        </ul>
      </article>
        </section>
      
    </>
  );
};

export default About;
