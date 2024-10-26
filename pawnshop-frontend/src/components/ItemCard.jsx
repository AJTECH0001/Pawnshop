import React from 'react'

const ItemCard = () => {
  return (
    <div className=" my-3 mx-3">
      <div className="card card-compact bg-white w-96 shadow-xl p-6">
  <figure>
    <img
      src="roleproduct.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-black">Rolex!</h2>
    <p className=' text-base-100'>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn bg-blue-500">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default ItemCard
