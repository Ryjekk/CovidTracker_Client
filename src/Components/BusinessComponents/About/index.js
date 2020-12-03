import React from 'react';
import img1 from "../../../Assets/background/businessImg1.jpg";
import img2 from "../../../Assets/background/businessImg2.jpg";
import '../style.css'
import Stats from "../Stats";

const About = () => {
  return (
      <div className="content_business">
        <Stats/>
        <hr className="separator"/>
        <div className="about_business">
          <img className="img_business" src={img1} alt="img COVID"/>
          <div className="textBox_business_right">
            <h3 className="heading_medium">Help your employees to stay safe</h3>
            <p className="paragraph">
              Find the right candidate quickly. We will match you only with the candidates that perfectly fulfil your needs, which will cut down the hiring time. We know our students and graduates very well, and our advanced algorithm will connect you with the best candidate for your business.
            </p>
            <div className="primary_btn_black">Start caring now</div>
          </div>
        </div>

        <div className="about_business">
          <div className="textBox_business_left">
            <h3 className="heading_medium">Help your employees to stay safe</h3>
            <p className="paragraph">
              Find the right candidate quickly. We will match you only with the candidates that perfectly fulfil your needs, which will cut down the hiring time. We know our students and graduates very well, and our advanced algorithm will connect you with the best candidate for your business.
            </p>
            <div className="primary_btn_black">Start caring now</div>
          </div>
          <img className="img_business" src={img2} alt="imageCOVID"/>
        </div>
      </div>
  );
};

export default About;
