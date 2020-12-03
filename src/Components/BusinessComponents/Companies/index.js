import React from 'react';
import "../style.css"
import cop1 from '../../../Assets/business/cop1.png'
import cop2 from '../../../Assets/business/cop2.png'
import cop3 from '../../../Assets/business/cop3.png'
import cop4 from '../../../Assets/business/cop4.png'
import cop5 from '../../../Assets/business/cop5.png'
import cop6 from '../../../Assets/business/cop6.png'
import cop7 from '../../../Assets/business/cop7.png'
import cop8 from '../../../Assets/business/cop8.png'
import cop9 from '../../../Assets/business/cop9.png'

const Companies = () => {
  return (
      <>
      <div className="companies_business">
          <div className="gallery_business_top">
            <img src={cop1} alt='img1' className="img_gallery"/>
            <img src={cop2} alt='img2' className="img_gallery"/>
            <img src={cop3} alt='img3' className="img_gallery"/>
            <img src={cop4} alt='img4' className="img_gallery"/>
          </div>
          <div className="gallery_business_bottom">
            <img src={cop5} alt='img5' className="img_gallery"/>
            <img src={cop6} alt='img6' className="img_gallery"/>
            <img src={cop7} alt='img7' className="img_gallery"/>
            <img src={cop8} alt='img8' className="img_gallery"/>
            <img src={cop9} alt='img9' className="img_gallery"/>
          </div>
      </div>
      <hr className="separator"/>
      </>
  );
};

export default Companies;
