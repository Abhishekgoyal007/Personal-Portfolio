import { useState, useEffect } from 'react'

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      {/* Dots indicator */}
      <div className="absolute z-10 flex gap-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-aqua w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
