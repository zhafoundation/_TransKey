import React, { useState } from 'react';
import './Tabs.css';

const faq = [
  {
    question: "WHY DO WE NEED TO RETHINK OUR APPROACH TO EDUCATION, RESEARCH, AND INNOVATION?",
    answer: "Today's education systems are not keeping pace with the Fourth Industrial Revolution and its transformation of the world. Globally, there is a gap between skills and digital- and technology-driven market needs. Traditional education systems are not able to support at scale personalized upskilling and life-long development. Innovation became more fragmented than ever before, whilst the key global challenges urgently need effective solutions.",
    show: false
  },
  {
    question: "WHAT IS THE ASPIRATION OF THE EDUCATION, RESEARCH, AND INNOVATION SECTOR?",
    answer: "TRANSKEY’s ERI Sector aims to establish a world-class education, research, and innovation ecosystem that inspires and empowers the best minds: technology to better the world, innovation through the “lab of the future”, and life-long personalized development.",
    show: false
  },
  {
    question: "HOW IS THE EDUCATION, RESEARCH, AND INNOVATION SECTOR TACKLING THE MAJOR ISSUES THAT OTHER EDUCATION SYSTEMS STRUGGLE WITH?",
    answer: "The TRANSKEY Education, Research, and Innovation Sector is creating a fully integrated and functional education ecosystem. From early childhood to Grade 12 to university to vocational training to continuous and professional development throughout an evolving career. An ecosystem that embraces learning and innovation to better the world, lifelong learning and professional development opportunities will be provided at scale, because they are essential to personal fulfillment, prosperity and economic development",
    show: false
  },
  {
    question: "HOW IS EDUCATION IN TRANSKEY DIFFERENT FROM EDUCATION ELSEWHERE?",
    answer: "We believe that, going forward, no career or vocation will be possible without an understanding of how advances in science, technology, computing and AI are transforming every aspect of our lives and can advance the world’s wellbeing and prosperity. Our educational approach will emphasize personalized development through inquiry-based, experiential learning that transcends disciplines and build on design thinking and real-world problem solving to foster creativity, innovation, and entrepreneurship.",
    show: false
  },
  {
    question: "HOW WILL TRANSKEY U RUN CLASSES DURING TRANSKEY CONSTRUCTION?",
    answer: "TRANSKEY U will prioritize class offerings for professionals being recruited by the Sectors and industries of TRANSKEY, and for graduate students who are being recruited by TRANSKEY U faculty to pursue research as masters and doctoral students. Also, we plan to start engaging with students interested in pursuing their undergraduate studies at TRANSKEY U by offering them a variety of innovative programs that provide them with opportunities to start experiencing and benefiting from TRANSKEY U’s unique approaches to teaching and learning even before our facilities are ready.",
    show: false
  },
  {
    question: "WHAT COURSES WILL TALENT ACADEMY OFFER?",
    answer: "The Talent Academy will be ‘demand-led’ and its curriculum will respond to the economic needs of TRANSKEY. However, it is already clear that the core course areas will include topics such as digital capability, data-led management and the green-energy industry.",
    show: false
  },
  {
    question: "WHY IS THE EDUCATION, RESEARCH, AND INNOVATION SECTOR IMPORTANT TO TRANSKEY?",
    answer: "We will build the vibrant Education, Research, and Innovation ecosystem with a high density of talent and ideas, to drive continuous innovation and economic development, and provide next-generation technologies and the workforce TRANSKEY needs to thrive as 'the land of the future.",
    show: false
  },
  {
    question: "WILL LEARNERS BE ABLE TO STUDY ON A PART-TIME BASIS AT THE TALENT ACADEMY?",
    answer: "Yes. The Talent Academy will feature a uniquely flexible learning model, designed to fit around busy lives. Suitable for career starters and apprentices as well as experienced professionals requiring further support and development.",
    show: false
  }
]

const Accordion = ({ question, answer, status }) => {
  const [showStatus, setShowStatus] = useState(status);
  const active = showStatus ? "active" : "";

  const onClickHandler = () => {
    setShowStatus(!showStatus)
  };

  return (
    <dl>
      <dt className={"question" + " " + active} onClick={onClickHandler}>
        {question}
      </dt>
      {showStatus && <dd>{answer}</dd>}
    </dl>
  );
};

const FAQComponent = ({ questions }) => {
  return (
    <div className="container">
      {questions.map((question) => {
        return <Accordion question={question.question} answer={question.answer} status={question.show} />
      })}
    </div>
  );
};

// Wrap your existing code in a function and export it as the default
export default function App() {
  return <FAQComponent questions={faq} />
};
