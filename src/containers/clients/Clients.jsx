import React from 'react';
import './clients.css';
import client from '../../assets/clientLogo2.jpeg';

const Client = () => {
  return (
    <div className="client-review-section">
      <h1>CLIENTS</h1>
      <div className="review-card">
        <img src={client} alt="ClientLogo" />
        <div className="review-card-content">
        <p>Episum has simplified our report generation process to great extent by reducing time and increasing efficiency. Now we can  generate volumes of reports for our clients effortlessly with a platform that is customized to our requirements.</p>

        <h4> Neelesh Chandola</h4>
        <h4>MD, Visus Investigation & Risk Services Pvt Ltd, Partner Vision Investigation Services</h4>
        </div>
      </div>
     
    </div>
  );
};

export default Client;
