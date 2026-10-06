import React from 'react';
import './RideOn.css';

const Home = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-lg-2 p-0 bg-dark border-end border-secondary">
          <ul className="nav flex-column nav-pills bg-dark">
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="pill" href="#distance">Distance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="pill" href="#hourly">Hourly</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="pill" href="#flat-rate">Flat Rate</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-10 bg-dark text-white p-5">
          <div className="tab-content">
            <div className="tab-pane active" id="distance">
              <h2>Distance Booking</h2>
              <form>
                {/* Form Fields */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
