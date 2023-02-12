// import logo from "./logo.svg";
import React, { Component } from "react";
import "../css/Home.css";

const Home = () => {
  return (
    <>
      <div className="container banner">
      <div className=" px-0 container">
            <div
              id="carouselExampleInterval"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active b1" data-bs-interval="5000">
                  <img src={require('../images/banner.jpeg')} className="d-block w-100" alt="sdcdcs" />
                </div>
                <div className="carousel-item b1" data-bs-interval="5000">
                  <img src={require('../images/banner2.jpg')} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item b1">
                  <img src={require('../images/banner3.jpg')} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* <img src="./banner.jpeg" alt="rumman" /> */}
            {/* <h1 className="display-4 fst-italic">
              Title of a longer featured blog post
            </h1>
            <p className="lead my-3">
              Multiple lines of text that form the lede, informing new readers
              quickly and efficiently about what’s most interesting in this
              post’s contents.
            </p> */}
            <p className="lead mb-0"></p>
          </div>
       
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h1>
                  <strong className="d-inline-block mb-2 text-primary">
                    PCOS
                  </strong>
                </h1>
                <p className="card-text mb-auto">
                  It is a condition in which the ovaries produce an abnormal
                  amount of androgens, male sex hormones that are usually
                  present in women in small amounts.
                </p>
              </div>
              {/* <div className="col-auto d-none d-lg-block"> */}
              <div className="col-auto d-none d-lg-block img-fluid "><img className="responsive" src="https://source.unsplash.com/200x300/?hospital" alt=""/></div>
                
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h1>
                  <strong className="d-inline-block mb-2 text-success">
                    Diabetes
                  </strong>
                </h1>

                <br />
                <p className="mb-auto">
                  Diabetes is a chronic (long-lasting) health condition that
                  affects how your body turns food into energy
                </p>
              </div>
              <div className="col-auto d-none d-lg-block img-fluid "><img className="responsive" src="https://source.unsplash.com/200x300/?diabetes" alt=""/></div>
            </div>
          </div>
        </div>


        <div className="row text g-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
              About The Disease
            </h3>

            <article className="blog-post">
              <h1 className="blog-post-title mb-1">
              <b>Polycystic ovary syndrome</b>
              </h1>
              <p className="blog-post-meta"></p>

              <p >
                 Polycystic ovary syndrome, or PCOS, is the most common endocrine
                disorder in women of reproductive age. The syndrome is named
                after the characteristic cysts which may form on the ovaries,
                though it is important to note that this is a symptom and not
                the underlying cause of the disorder.
              </p>
              <hr />
              <p>
                Women with PCOS may experience irregular menstrual periods,
                heavy periods, excess hair, acne, pelvic pain, difficulty
                getting pregnant, and patches of thick, darker, velvety skin.The
                primary characteristics of this syndrome include:
                hyperandrogenism, anovulation, insulin resistance, and
                neuroendocrine disruption.
              </p>
              <p>
                A review of the international evidence found that the prevalence
                of PCOS could be as high as 26% among some populations, though
                ranges between 4% and 18% are reported for general
                populations.Despite its high prevalence, the exact cause of PCOS
                remains uncertain and there is no known cure
              </p>

              <h3>Signs and symptoms</h3>
              <p></p>
              {/* <blockquote className="blockquote">
                <p>Quoted text goes here.</p>
              </blockquote> */}
              <p>
                Signs and symptoms of PCOS include irregular or no menstrual
                periods, heavy periods, excess body and facial hair, acne,
                pelvic pain, difficulty getting pregnant, and patches of thick,
                darker, velvety skin.
              </p>
              <p>
                This metabolic, endocrine and reproductive disorder is not
                universally defined, but the most common symptoms are irregular
                or absent periods, ovarian cysts, enlarged ovaries, excess
                androgen, weight gain and hirsutism.
              </p>

              <h4>Common signs and symptoms of PCOS include the following:</h4>
              <p>Here are some Common signs and symptoms of PCOS</p>
              <ul>
                <li>
                  <b> Menstrual disorders</b>: PCOS mostly produces
                  oligomenorrhea (fewer than nine menstrual periods in a year)
                  or amenorrhea (no menstrual periods for three or more
                  consecutive months), but other types of menstrual disorders
                  may also occur.
                </li>
                <li>
                  <b>Infertility</b>: This generally results directly from
                  chronic anovulation (lack of ovulation).
                </li>
                <li>
                  <b>High levels of masculinizing hormones</b>: Known as
                  hyperandrogenism, the most common signs are acne and hirsutism
                  (male pattern of hair growth, such as on the chin or chest),
                  but it may produce hypermenorrhea (heavy and prolonged
                  menstrual periods), androgenic alopecia (increased hair
                  thinning or diffuse hair loss), or other
                  symptoms.Approximately three-quarters of women with PCOS (by
                  the diagnostic criteria of NIH/NICHD 1990) have evidence of
                  hyperandrogenemia.
                </li>
                <li>
                  <b>Metabolic syndrome</b>: This appears as a tendency towards
                  central obesity and other symptoms associated with insulin
                  resistance, including low energy levels and food
                  cravings.Serum insulin, insulin resistance, and homocysteine
                  levels are higher in women with PCOS.
                </li>
                <li>
                  <b>Polycystic ovaries</b>: Ovaries might get enlarged and
                  comprise follicles surrounding the eggs. As result, ovaries
                  might fail to function regularly.
                </li>
              </ul>

              <p></p>

              <dl>
                <dt>Cause</dt>
                <dd>
                  PCOS is caused by a combination of genetic and environmental
                  factors.Risk factors include obesity, a lack of physical
                  exercise, and a family history of someone with the
                  condition.Transgender men may also experience a higher than
                  expected rate of PCOS.Diagnosis is based on two of the
                  following three findings: anovulation, high androgen levels,
                  and ovarian cysts.Cysts may be detectable by ultrasound.Other
                  conditions that produce similar symptoms include adrenal
                  hyperplasia, hypothyroidism, and high blood levels of
                  prolactin.
                </dd>
                <dt>Treatment</dt>
                <dd>
                  PCOS has no cure, as of 2020.Treatment may involve lifestyle
                  changes such as weight loss and exercise.Birth control pills
                  may help with improving the regularity of periods, excess hair
                  growth, and acne.Metformin and anti-androgens may also
                  help.Other typical acne treatments and hair removal techniques
                  may be used.Efforts to improve fertility include weight loss,
                  clomiphene, or metformin.In vitro fertilization is used by
                  some in whom other measures are not effective.
                </dd>
              </dl>
            </article>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <article className="blog-post">
              <h1 className="blog-post-title mb-1">
                Diabetes </h1>
              <p className="blog-post-meta">
                {/* January 1, 2021 by <a href="#">Mark</a> */}
              </p>

              <p>
                Diabetes, also known as diabetes mellitus, is a group of
                metabolic disorders characterized by a high blood sugar level
                (hyperglycemia) over a prolonged period of time.Symptoms often
                include frequent urination, increased thirst and increased
                appetite.If left untreated, diabetes leads to many health
                complications.Acute complications can include diabetic
                ketoacidosis, hyperosmolar hyperglycemic state, or death.Serious
                long-term complications include cardiovascular disease, stroke,
                chronic kidney disease, foot ulcers, damage to the nerves,
                damage to the eyes, and cognitive impairment.
              </p>
              <hr />
              <p>
                Diabetes is due to either the pancreas not producing enough
                insulin, or the cells of the body not responding properly to the
                insulin produced.Insulin is a hormone which is responsible for
                helping glucose from food get into cells to be used for energy.
              </p>
              <ul>
                <li>
                  <b> Type 1 Diabetes</b>: Presults from failure of the pancreas
                  to produce enough insulin due to loss of beta cells.This form
                  was previously referred to as "insulin-dependent diabetes
                  mellitus" or "juvenile diabetes".The loss of beta cells is
                  caused by an autoimmune response.The cause of this autoimmune
                  response is unknown.Although Type 1 diabetes usually appears
                  during childhood or adolescence, it can also develop in
                  adults.
                </li>
                <li>
                  <b>Type 2 Diabetes</b> begins with insulin resistance, a
                  condition in which cells fail to respond to insulin
                  properly.[2] As the disease progresses, a lack of insulin may
                  also develop.[17] This form was previously referred to as "non
                  insulin-dependent diabetes mellitus" or "adult-onset
                  diabetes".[2] Type 2 diabetes is more common in older adults,
                  but a significant increase in the prevalence of obesity among
                  children has led to more cases of type 2 diabetes in younger
                  people.[18] The most common cause is a combination of
                  excessive body weight and insufficient exercise.
                </li>
                <li>
                  <b>Gestational diabetes </b>is the third main form, and occurs
                  when pregnant women without a previous history of diabetes
                  develop high blood sugar levels.In women with gestational
                  diabetes, blood sugar usually returns to normal soon after
                  delivery. However, women who had gestational diabetes during
                  pregnancy have a higher risk of developing type 2 diabetes
                  later in life.
                </li>
              </ul>

              <h3>Signs and symptoms</h3>
              <p></p>

              <p>
                The classic symptoms of untreated diabetes are unintended weight
                loss, polyuria (increased urination), polydipsia (increased
                thirst), and polyphagia (increased hunger).
              </p>
              <p>
                Symptoms may develop rapidly (weeks or months) in type 1
                diabetes, while they usually develop much more slowly and may be
                subtle or absent in type 2 diabetes.
              </p>

              <h4>
                Common signs and symptoms of diabetes include the following:
              </h4>
              <p>Here are some Common signs and symptoms of diabetes</p>
              <ul>
                <li>
                  Several other signs and symptoms can mark the onset of
                  diabetes although they are not specific to the disease. In
                  addition to the known symptoms listed above, they include
                  blurred vision, headache, fatigue, slow healing of cuts, and
                  itchy skin.
                </li>
                <li>
                  Prolonged high blood glucose can cause glucose absorption in
                  the lens of the eye, which leads to changes in its shape,
                  resulting in vision changes.
                </li>
                <li>
                  Long-term vision loss can also be caused by diabetic
                  retinopathy. A number of skin rashes that can occur in
                  diabetes are collectively known as diabetic dermadromes.
                </li>
              </ul>

              <p></p>

              <dl>
                <dt>Cause</dt>
                <dd>
                  Diabetes mellitus is classified into six categories: type 1
                  diabetes, type 2 diabetes, hybrid forms of diabetes,
                  hyperglycemia first detected during pregnancy, "unclassified
                  diabetes", and "other specific types"."Hybrid forms of
                  diabetes" include slowly evolving, immune-mediated diabetes of
                  adults and ketosis-prone type 2 diabetes. "Hyperglycemia first
                  detected during pregnancy" includes gestational diabetes
                  mellitus and diabetes mellitus in pregnancy (type 1 or type 2
                  diabetes first diagnosed during pregnancy). The "other
                  specific types" are a collection of a few dozen individual
                  causes. Diabetes is a more variable disease than once thought
                  and people may have combinations of forms.
                </dd>
                <dt>Treatment</dt>
                <dd>
                  Metformin (Fortamet, Glumetza, others) is generally the first
                  medication prescribed for type 2 diabetes. It works primarily
                  by lowering glucose production in the liver and improving your
                  body's sensitivity to insulin so that your body uses insulin
                  more effectively
                </dd>
              </dl>
            </article>

            {/* <nav className="blog-pagination" aria-label="Pagination">
              <a className="btn btn-outline-primary rounded-pill" href="#">
                Older
              </a>
              <a className="btn btn-outline-secondary rounded-pill disabled">
                Newer
              </a>
            </nav> */}
          </div>

          <div className="p-4 mb-3 bg-light rounded col-md-4">
            <h4 className="fst-italic">
              <b>Visualization</b> </h4>
            <br />
            <br />
            <p className="mb-0">
            A common hormonal disorder that affects ovaries in women during childbearing years. This results in irregular menstrual cycle.
            </p>
            <div className="container"
            >
              <img className="img-fluid" src={require('../images/p1.png')} alt="" />
            </div>
            <br />
            <br /><br /><br />
            
            <p className="mb-0">
              <b>Distribution of the disease in different continents.</b> 
            </p>
            <div className="container"
            >
              <img className="img-fluid" src={require('../images/p2.jpg')} alt="" />
            </div>
            <br />
            <br /><br /><br />
            
            <p className="mb-0">
              <b>Women's Health Issue</b> 
            </p>
            <div className="container"
            >
              <img className="img-fluid" src={require('../images/p3.cms')} alt="" />
            </div>
            <br />
            <br />
            <br />
            <br />

            <p className="mb-0">
              <b>Parameters of PCOS</b> 
            </p>
            <div className="container"
            >
              <img className="img-fluid" src={require('../images/p4.webp')} alt="" />
            </div>
            <br />
            <br />
            <br />
            <br />

            <p className="mb-0">
              <b>PCOS Affecting Pregnencies</b> 
            </p>
            <div className="container"
            >
              <img className="img-fluid" src={require('../images/p5.jpg')} alt="" />
            </div>
            <br />

           
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br />

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            

            <div className="p-4">
            <p className="mb-0">
              <b>Stats Regarding Diabetes </b> 
            </p>
            <div className="container"
            >
              <img className="img-fluid" src={require('../images/d1.png')} alt="" />
            </div>
            <br />
            <br /><br /><br />

            <p className="mb-0">
              <b>Parameters </b> 
            </p>
            <div className="container"
            >
              <img className="img-fluid" src={require('../images/d2.jpg')} alt="" />
            </div>
            <br />
            <br /><br /><br />

            <p className="mb-0">
              <b>Parameters </b> 
            </p>
            <div className="container"
            >
              <img className="img-fluid" src={require('../images/d3.jpg')} alt="" />
            </div>
            <br />
            <br />

            

            
              {/* <ol className="list-unstyled">
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ol> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
