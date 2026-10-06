import React from 'react';
import './RideOn.css';

const Contact = () => {
  return (
    <div className="container p-5">
      <h2>Contact Us</h2>
      <div className="row">
        <div className="col-lg-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-danger">Submit</button>
          </form>
        </div>
        <div className="col-lg-6">
          <h4>Contact Details</h4>
          <ul className="list-group">
            <li className="list-group-item"><i className="icon-red fa fa-map-marker-alt"></i> Address</li>
            <li className="list-group-item"><i className="icon-red fa fa-phone"></i> 123-456-7890</li>
            <li className="list-group-item"><i className="icon-red fa fa-envelope"></i> contact@rideon.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
