import React from "react";

export default function AddCustomer({ onBack }) {
  return (
    <div className="container-fluid add-customer-container">
      <div className="card card-block border-0 add-customer-form">
        <div className="card-body p-0">
        <div className="bg-light  add-cutomer-section px-3 py-4">
        <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <span><i className="fa fa-arrow-left" onClick={onBack}></i></span>
                    <span><i className="fas fa-user fa-sm"></i></span>
                    <span>
                      <h5 className="mb-0"><strong>Add Customer</strong></h5>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <form>
            <div className="form-grid-main p-3">
            <div className="form-grid">
                <div className="form-grid-column-one">
                <div className="mb-4">
                <label htmlFor="customerName" className="form-label label-value">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="customerName"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="country" className="form-label label-value">Country</label>
                <select
                  className="form-control"
                  id="country"
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label label-value">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                ></textarea>
              </div>
                </div>
                <div className="form-grid-column-two">
                <div className="mb-4">
                <label htmlFor="phoneNumber" className="form-label label-value">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="phoneNumber"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label label-value">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                />
              </div>
                </div>
            </div>
              <button type="button" className="btn btn-primary">Submit</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}
