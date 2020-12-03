import React from 'react';
import img1 from '../../../Assets/background/businessImg1.jpg';
import img2 from '../../../Assets/background/businessImg2.jpg';
import '../style.css';
import Stats from '../Stats';

const About = () => {
  return (
    <div className="content_business">
      <Stats />
      <hr className="separator" />
      <div className="about_business">
        <img className="img_business" src={img1} alt="img COVID" />
        <div className="textBox_business_right">
          <h3 className="heading_medium">Help your employees stay safe</h3>
          <p className="paragraph">
            Make your employees feel comfortable coming to work. With{' '}
            <span className="novid">Novid</span>, potential covid outbreaks can
            be stopped the moment they begin. When a person gets a positive
            test, all potential contacts are sent into quarantine, so that the
            rest can safely keep coming back. Its important for employees to
            have a safe work environment.
          </p>
          <div className="primary_btn_black">Start caring now</div>
        </div>
      </div>

      <div className="about_business">
        <div className="textBox_business_left">
          <h3 className="heading_medium">Boost your business</h3>
          <p className="paragraph">
            Studies have shown that productivity at many companies has dropped
            with as much as 20% after going remote. Let us take care of
            infection tracking, so that you can focus on making your business
            grow.
          </p>
          <div className="primary_btn_black">Start caring now</div>
        </div>
        <img className="img_business" src={img2} alt="imageCOVID" />
      </div>
    </div>
  );
};

export default About;
