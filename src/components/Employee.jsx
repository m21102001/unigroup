import React from 'react'

function Employee(props) {
  const { Employee } = props;
  return (
    <div>
    <div className="card">
        <img src={Employee.image_url} className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{Employee.name}</h5>
        <p className="card-text">{Employee.age}</p>
        <p>job: {Employee.job}$</p>
        </div>
    </div>
</div>
  )
}

export default Employee
