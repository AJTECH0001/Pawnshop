'use client'
import React, { useCallback, useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'


const ItemCard = ({}) => {

  const [fetchLux, setFetchLux] = useState(null)

  const { signerP, contract } = useAuth()


  const getFormatedData = useCallback(() => {
    try {
      const luxury = contract.luxuryItems(id);

      console.log(luxury)
    } catch (error) {
      console.log(error)
    }
  })
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
