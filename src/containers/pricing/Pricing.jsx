import React, { useState } from "react";

import "./pricing.css";


const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };
  const plans = {
    starter: {
      monthly: {
        price: "₹499",
        reports: "Up to 100 reports",
      },
      yearly: {
        price: "₹999",
        reports: "Up to 1000 reports",
      },
    },
    pro: {
      monthly: {
        price: "₹999",
        reports: "Up to 300 reports",
      },
      yearly: {
        price: "₹9,999",
        reports: "Up to 5000 reports",
      },
    },
    business: {
      monthly: {
        price: "₹1,999",
        reports: "Up to 1000 reports",
      },
      yearly: {
        price: "₹19,999",
        reports: "Unlimited reports",
      },
    },
  };

  return (
    <div className="llm__pricing section__padding" id="pricing">
     
      
      <div className="llm__pricing-heading">
        <h1>Pricing</h1>
      </div>
      <div className="llm__pricing-content">
        <div className="llm__pricing-content-heading">
          <h2>Choose a Plan That Fits Your Needs</h2>
          <h2>Plans starting from ₹499/month</h2>
        </div>
        <div className="llm__pricing-toggle-container">
          <p>Monthly</p>
          <label className="switch">
            <input type="checkbox" onChange={handleToggle} checked={isYearly} />
            <span className="slider round"></span>
          </label>
          <p>Yearly</p>
        </div>
        <div className="llm__pricing-inner">
          <div className="llm__pricing-container">
            <div className="llm__pricing-items">
              <div className="llm__pricing-top">
                <h3 className="llm__pricing-title">Starter</h3>
                <p className="llm__pricing-text">
                  Customizable and AI generated reports made esay
                </p>
              </div>
              <div className="llm__pricing-price starter">
                <span>
                  {isYearly
                    ? plans.starter.yearly.price
                    : plans.starter.monthly.price}
                </span>
                /month per user
              </div>
              <a
                href="http://main.episum.com/register/form"
                class="llm__pricing-button"
              >
                <button type="button">Try Now</button>
              </a>
              <div className="llm__pricing-points">
                <p>
                  {" "}
                  {isYearly
                    ? plans.starter.yearly.reports
                    : plans.starter.monthly.reports}{" "}
                </p>
                <p>Admin dashboard</p>
                <p>Customizable format </p>
                <p>Reports download </p>
                <p>Cloud storage</p>
              </div>
            </div>
            <div className="llm__pricing-items">
              <div className="recommended">Recommended</div>
              <div className="llm__pricing-top">
                <h3 className="llm__pricing-title">Pro</h3>
                <p className="llm__pricing-text">For industry professionals</p>
              </div>
              <div className="llm__pricing-price pro">
                <span>
                  {isYearly ? plans.pro.yearly.price : plans.pro.monthly.price}
                </span>
                /month per user
              </div>
              <a
                href="http://main.episum.com/register/form"
                class="llm__pricing-button"
              >
                <button type="button">Try Now</button>
              </a>
              <div className="llm__pricing-points">
                <p>
                  {" "}
                  {isYearly
                    ? plans.pro.yearly.reports
                    : plans.pro.monthly.reports}{" "}
                </p>
                <p>Admin dashboard</p>
                <p>Customizable format </p>
                <p>Reports download </p>
                <p>Cloud storage</p>
              </div>
            </div>
            <div className="llm__pricing-items">
              <div className="llm__pricing-top">
                <h3 className="llm__pricing-title">Business </h3>
                <p className="llm__pricing-text">For teams</p>
              </div>
              <div className="llm__pricing-price pro">
                <span>
                  {isYearly
                    ? plans.business.yearly.price
                    : plans.business.monthly.price}
                </span>
                /month per user
              </div>
              <a
                href="http://main.episum.com/register/form"
                class="llm__pricing-button"
              >
                <button type="button">Try Now</button>
              </a>
              <div className="llm__pricing-points">
                <p>
                 
                  {isYearly
                    ? plans.business.yearly.reports
                    : plans.business.monthly.reports}
                </p>
                <p>Admin dashboard</p>
                <p>Customizable format </p>
                <p>Reports download </p>
                <p>Cloud storage</p>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Pricing;
