"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  name: string
  rating: number
  date: string
  text: string
  photo: string
}

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    if (isAnimating) return
    setDirection("right")
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
      setIsAnimating(false)
    }, 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setDirection("left")
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
      setIsAnimating(false)
    }, 500)
  }

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [testimonials.length, isAnimating])

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
    autoPlayRef.current = setInterval(() => {
      nextSlide()
    }, 5000)
  }

  const handlePrev = () => {
    prevSlide()
    resetAutoPlay()
  }

  const handleNext = () => {
    nextSlide()
    resetAutoPlay()
  }

  return (
    <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
      <div className="relative h-[400px] md:h-[300px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out bg-gray-50 p-6 rounded-lg shadow-md ${
              index === currentIndex
                ? "opacity-100 translate-x-0 z-10"
                : `opacity-0 ${direction === "right" ? "translate-x-full" : "-translate-x-full"} z-0`
            }`}
          >
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                <Image
                  src={testimonial.photo || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.date}</p>
              </div>
            </div>
            <div className="flex mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600 italic">"{testimonial.text}"</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#8e0061] p-2 rounded-full shadow-md z-20 transition-transform duration-300 hover:scale-110"
        aria-label="Anterior testimonio"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#8e0061] p-2 rounded-full shadow-md z-20 transition-transform duration-300 hover:scale-110"
        aria-label="Siguiente testimonio"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? "right" : "left")
              setCurrentIndex(index)
              resetAutoPlay()
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#b3007a] w-6" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir al testimonio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
