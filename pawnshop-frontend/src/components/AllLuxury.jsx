import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import ItemCard from './ItemCard'

const AllLuxury = () => {
    const { contract } = useAuth()

    const [luxuries, setLuxuries] = useState([])
    
    const getLuxList = async () => {
        const luxLen = await contract.itemCounter();

        try {
            const luxArray = []
        } catch (error) {
            
        }
    }
  return (
    <div>
       <div className=' mx-auto max-w-4xl py-5 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
            {/*  */}
          </div>
      </div>
    </div>
  )
}

export default AllLuxury
