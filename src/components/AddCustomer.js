import React, { useState } from "react";

export default function AddCustomer({ onBack }) {
  const [commentsList, setCommentsList] = useState([]);
  const [comment, setComment] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingComment, setEditingComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      const newComment = {
        text: comment,
        timestamp: new Date().toLocaleString(),
      };
      setCommentsList([...commentsList, newComment]);
      setComment("");
    }
  };

  const handleCommentEdit = (index) => {
    setEditingIndex(index);
    setEditingComment(commentsList[index].text);
  };

  const handleEditCommentChange = (event) => {
    setEditingComment(event.target.value);
  };

  const handleEditSubmit = (index) => {
    if (editingComment.trim() !== "") {
      const updatedComments = [...commentsList];
      updatedComments[index].text = editingComment;
      setCommentsList(updatedComments);
      setEditingIndex(null);
      setEditingComment("");
    }
  };

  const handleCommentDelete = (index) => {
    const updatedComments = [...commentsList];
    updatedComments.splice(index, 1);
    setCommentsList(updatedComments);
  };

  return (
    <div className="container-fluid add-customer-container">
      <div className="card card-block border-0 add-customer-form">
        <div className="card-body p-0">
          <div className="bg-light add-cutomer-section px-3 py-4">
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
            <div className="customer-details-grid">
              <div className="card m-4 me-0">
                <div className="card-body">
                  <div className="form-grid-main">
                    <div className="form-grid">
                      <div className="form-grid-column-one">
                        <div className="mb-4">
                          <label htmlFor="customerName" className="form-label label-value">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="customerName"
                            placeholder="Enter customer's name"
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
                      </div>
                      <div className="form-grid-column-two">
                        <div className="mb-4">
                          <label htmlFor="phoneNumber" className="form-label label-value">Phone Number</label>
                          <input
                            type="number"
                            className="form-control"
                            id="phoneNumber"
                            placeholder="Enter phone number"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="email" className="form-label label-value">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email address"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                          <label htmlFor="message" className="form-label label-value">Message</label>
                          <textarea
                            className="form-control"
                            id="message"
                            rows="4"
                            placeholder="Write your message here..."
                          ></textarea>
                        </div>
                    <button
                      type="submit"
                      className="btn btn-success"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="card m-4 ms-0 ">
                <div className="card-body">
                  <div className="textarea-box">
                    <textarea
                      rows="3"
                      className="form-control mb-3"
                      value={comment}
                      onChange={handleCommentChange}
                      placeholder="Write your comment here..."
                    ></textarea>
                    <button
                      type="button"
                      className="btn btn-primary mb-3"
                      onClick={handleCommentSubmit}
                    >
                      Post Comment
                    </button>
                  </div>
                  <div className="comment-box">
                    {commentsList.length > 0 && (
                      <>
                        {commentsList.map((comment, index) => (
                          <div key={index} className="card mb-3">
                            <div className="card-body d-flex justify-content-between align-items-center">
                              {editingIndex === index ? (
                                <div className="w-100">
                                  <textarea
                                    rows="2"
                                    className="form-control mb-3"
                                    value={editingComment}
                                    onChange={handleEditCommentChange}
                                  ></textarea>
                                  <button
                                    className="btn btn-success me-2"
                                    onClick={() => handleEditSubmit(index)}
                                  >
                                    Save
                                  </button>
                                  <button
                                    className="btn btn-secondary"
                                    onClick={() => setEditingIndex(null)}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              ) : (
                                <>
                                  <div>
                                    <div className="comment-text mb-2">{comment.text}</div>
                                    <div className="comment-timestamp">{comment.timestamp}</div>
                                  </div>
                                  <div>
                                    <button
                                      className="btn btn-link text-primary me-2"
                                      onClick={() => handleCommentEdit(index)}
                                    >
                                      <i className="fa fa-edit"></i>
                                    </button>
                                    <button
                                      className="btn btn-link text-dark"
                                      onClick={() => handleCommentDelete(index)}
                                    >
                                      <i className="fa fa-trash"></i>
                                    </button>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
