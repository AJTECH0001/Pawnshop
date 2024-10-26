import React, { useState, useEffect } from 'react'
import ItemCard from '../components/ItemCard'
import Navbar from '../components/Navbar'

const Luxurys = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    // Add your slide content here
    { id: 1, content: <ItemCard /> },
    { id: 2, content: <ItemCard /> },
    { id: 3, content: <ItemCard /> },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); // 10 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=''>
      <div>
        <Navbar />
      </div>
      <div className="carousel">
        {slides[currentSlide].content}
      </div>
    </div>
  )
}

export default Luxurys