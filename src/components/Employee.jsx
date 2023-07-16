import React from 'react'

function Employee(props) {
  const { Employee } = props;
  return (
    <div>
    <div className="card">
        <img src={Employee.image_url} className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{Employee.name}</h5>
        <p className="card-text">{Employee.position}</p>
        <p>{Employee.salary}$</p>
        <img src={Employee.facebookLink} className="card-img-top" alt="..." />
        <img src={Employee.githubLink} className="card-img-top" alt="..." />
        
        </div>
    </div>
</div>
  )
}

export default Employee
