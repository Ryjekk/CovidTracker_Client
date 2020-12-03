import React from 'react';
import '../style.css'

const Stats = () => {
  return (
      <div className="stats_business">
        <div className="stats_box">
          <h4 className="heading_small">97</h4>
          <p className="paragraph_small">Companies</p>
        </div>
        <div className="stats_box">
          <h4 className="heading_small">2000+</h4>
          <p className="paragraph_small">Users</p>
        </div>
        <div className="stats_box">
          <h4 className="heading_small">A++</h4>
          <p className="paragraph_small">Safety Guarantee</p>
        </div>
      </div>
  );
};

export default Stats;
