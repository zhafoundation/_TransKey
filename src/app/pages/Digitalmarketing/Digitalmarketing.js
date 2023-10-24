import React from "react";
import './Digitalmarketing.css'
export default function Digitalmarketing(){
    return(
    <div className="dm">
      <div>
        <div className="title">
          <img src="/img/marketing.jpg" />
          <div className="ttitle">
            <h1>
              Digital Marketing
            </h1>
            <p>Digital marketing is the use of online platforms and channels to promote products or services and reach a targeted audience.</p>
          </div>
        </div>
        <h1 className="why"> WHY TRANSKEY CONSULTING?</h1>
        <section className="content ft">
          <img src="/img/reporting2.jpg" />
          <div className="text"> 
            <h1>1. PRECEPTIVE APPROACH</h1>
            <p>The only way to get all angles right is to look from beyond. With the full picture we are able apply our three-dimensional approach in ease to meet our customers agenda.</p>
          </div>
        </section>
        <section className="content fg">
          <div className="text">
            <h1>2. CYCLE</h1>
            <p>Perceiving a situation from beyond is a lost art as it requires you to not have any agenda. Only then you are able to look at the whole cycle of the business clearly. Upon this clarity we can pretty able to assist our customers to turn to any way they wish to in order to meet their agenda.</p>
          </div>
          <img src="/img/reporting.jpg" />
        </section>
        <section className="content ft fthree">
          <div>
            <img src="/img/customers.jpg" />
          </div>
          <div className="text">
            <h1>3. THE LAUNCH</h1>
            <p>This is part where we execute the proof plan approved by our clients. While the project is on-going full detailed attention along with complete transparency Is guaranteed from our team.</p>
          </div>
        </section>
      </div>  
           
           
    

       
    </div>
        );
}