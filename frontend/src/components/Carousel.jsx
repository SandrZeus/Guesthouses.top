import { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom"
import "../style/Carousel.css"

import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/toa-heftiba-n5jkZK-4rhs-unsplash.jpg";
import image6 from "../assets/toa-heftiba-1-fTW0R5EGs-unsplash.jpg";
import image8 from "../assets/8.jpg";

const images = [image8, image1, image2, image3, image4, image5, image6];


function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const location = useLocation()

  // Generate breadcrumb based on the current location
  const getBreadcrumb = () => {
    const pathArray = location.pathname.split("/").filter(Boolean)

    // Handle empty path array (for the root page)
    if (pathArray.length === 0) {
      return (
        <>
          {" > "}
          <Link to="/">Home</Link>
        </>
      )
    }

    // Generate breadcrumbs for each path segment
    return pathArray.map((path, index) => (
      <span key={index}>
        {index > 0 ? " > " : " > "}
        <Link to={`/${pathArray.slice(0, index + 1).join("/")}`}>
          {path.charAt(0).toUpperCase() + path.slice(1)}
        </Link>
      </span>
    ))
  }

  useEffect(() => {
    let loadedImages = 0

    images.forEach(src => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        loadedImages += 1
        if (loadedImages === images.length) {
          setIsLoaded(true)
        }
      }
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="carousel-container">
      {!isLoaded ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="carousel-slide">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index}`}
                className={currentIndex === index ? "active" : ""}
              />
            ))}
          </div>
          {/* Breadcrumb container */}
          <div className="breadcrumb">{getBreadcrumb()}</div>
        </>
      )}
    </div>
  )
}

export default Carousel
