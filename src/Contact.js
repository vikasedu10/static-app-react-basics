import React from 'react'

export const Contact = () => {
  return (
    <div className='container col-sm-8 my-4'>
      <h2>
        Contact Siksha
      </h2>
      <hr />
      <p>We are commmited to provide free software for taking online exams</p>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
      </div><div className="mb-3">
        <label htmlFor="title" className="form-label">Your Title</label>
        <input type="title" className="form-control" id="title" placeholder="What is the subject?" />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Describe your issue / reason to contact us</label>
        <textarea className="form-control" id="description" rows="3"></textarea>
      </div>
      <button className='btn btn-sm btn-primary'>Contact</button>
    </div>
  )
}
