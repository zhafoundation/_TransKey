import React from "react";
import './Education.css';
import Tab from'./Tabs';


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }




  

export default function Education(){
    return(
    <div >
        <div className="edu">
  <h1>THE FUTURE OF EDUCATION,<br/> RESEARCH, AND INNOVATION</h1>
  </div>

<div className="commontext">
  <h1>THE FUTURE OF EDUCATION,<span>RESEARCH, AND INNOVATION</span> </h1>
  <p>Transkey is establishing a human-centric and interconnected education, research, and innovation ecosystem that inspires fluidity in thinking from cradle to evolving career, by providing life long learning opportunities through personalized development, research, and active industry integration.</p>
  </div>


  <div className="tablecont">
  <table>
  <tr>
    <th>Early Childhood to Grade 12</th>
    <th>Transkey</th>
    <th>Talent Academy</th>
    <th>Education, Research, and Innovation Foundation</th>
  </tr>
  <tr>
    <td>Early childhood institutions will have world-class programs designed around experiential learning and next-gen tech.</td>
    <td>Transkey,will be a vibrant foundation of next-gen education and technology, empowering students to be tomorrow's leaders.</td>
    <td>Transkey's Talent Academy will support ongoing professional development through upskilling and lifelong learning.</td>
    <td>The Education, Research, and Innovation Foundation will be the Transkey R&D ecosystem to tackle key global challenges.</td>
  </tr>
</table>
  </div>


  <div className="commontextg">
  <h1>HOW ARE WE GOING TO CHANGE <span>EDUCATION, RESEARCH, AND INNOVATION?</span></h1>
  </div>

<div className="commontab">
    <img src="/img/asd.jpg"></img>
  <div className="commontext">
    <h4>VIBRANT COMMUNITIES</h4>
  <h1>SOLVING THE WORLD'S CHALLENGES TOGETHER</h1>
  <p>Transkey is establishing a world-class education, research, and innovation ecosystem bringing together the world's greatest minds to co-create a vibrant, diverse community to drive progress, pilot new ways of living and focus on solving the world’s biggest challenges. Transkey U will be an engaging, learning environment that builds community, drives continuous pan-discipline innovation and impact, and fosters knowledge and skills for the future workforce.</p>
  </div>
  </div>

  
<div className="commontabtwo">
    <img src="/img/asdf.jpg"></img>
  <div className="commontext">
    <h4>FLUIDITY AND ADAPTABILITY</h4>
  <h1>EMPOWERING NEW WAYS OF THINKING</h1>
  <p>Transkey is designing, from a clean slate, an ecosystem that will blend personalized and lifelong learning with future-focused research and innovation. The university will empower new, agile ways of thinking and doing that global challenges demand. Transkey will connect the world's most curious and entrepreneurial minds who are open to opportunities and challenges, and are determined to succeed.</p>
  </div>
  </div>

  
<div className="commontab">
    <img src="/img/asdfg.jpg"></img>
  <div className="commontext">
    <h4>ECOSYSTEM FOR IMPACT</h4>
  <h1>BRIDGING SCIENCE TO MARKET</h1>
  <p>Transkey is building a living lab where education, research, and innovation meet real world needs and challenges, driving positive impact for people and planet. Our interconnected knowledge ecosystem, powered by dedicated funding and research infrastructure, will bridge gaps between education and jobs of tomorrow, research and industry, and ideas and real-world applications.</p>
  </div>
  </div>

  
<div className="commontabtwo">
    <img src="/img/asdfgh.webp"></img>
  <div className="commontext">
    <h4>PIONEER A SUSTAINABLE FUTURE</h4>
  <h1>SOLVING THE PLANET’S CHALLENGES</h1>
  <p>Transkey is the largest sustainable development in the world. It is powered by 100% renewable energy and 95% of the land is protected for nature. At Transkey, we are focused on solving the planet's toughest challenges including ocean sustainability, green energy, and the future of urban living.</p>
  </div>
  </div>




<section>
<div className="commontext">
<h1><span>FAQ</span> </h1>
</div>
    <Tab />
</section>



<div className="commontext">
<h1><span>Section</span> </h1>
</div>
<div className="sectionn">

<img src="/img/sectionmob.png" className="sectionlab"></img>
<img src="/img/sectionlab.png" className="sectionmob"></img>
</div>





    </div>
        );
}