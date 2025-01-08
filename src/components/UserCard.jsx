import React from "react"

const UserCard = ({ user }) => {
    
    
    if(!user)return <div>No data available</div>
  return (
    <div className="card bg-base-300 w-96 shadow-2xl">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{user.firstName+" "+user.lastName}</h2>
      <p>{user.about}</p>
      <p>{user.age+","+user.gender}</p>
      <div className="card-actions justify-evenly my-4">
      <button className="btn btn-primary">Ignore</button>
        <button className="btn btn-secondary">Interested</button>
      </div>
    </div>
  </div>
  )
}

export default UserCard