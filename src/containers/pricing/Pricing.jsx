import React from "react";

import "./pricing.css";

const Pricing = () => {
  return (
    <div className="llm__pricing section__padding" id="pricing">
      <div className="llm__pricing-heading">
        {/* <h1>Pricing</h1> */}
      </div>
      <div className="llm__pricing-content">
        <div className="llm__pricing-content-heading">
          <h2>Choose a Plan That Fits Your Needs</h2>
          <h2>Flexible Pricing Options for Businesses of All Sizes</h2>
        </div>
        <div className="llm__pricing-content-plans">
          <div className="llm__pricing-content-plans-starter">
            <h2>Starter</h2>
            <button type="button">Create Free</button>
          </div>

          <div className="llm__pricing-content-plans-pro">
            <h2>Pro</h2>
            <button type="button">Create Free</button>
          </div>
          {/* <div className="llm__pricing-content-plans-teamPlans">
            <h2>Team Plans</h2>
            <button type="button">  Let's Talk   </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
