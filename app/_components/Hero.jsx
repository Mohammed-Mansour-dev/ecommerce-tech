import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='' >
        <section className="bg-primary/95">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
    <div className="mx-auto max-w-2xl  capitalize text-center">
      <h1 className="text-3xl text-transparent
       bg-gradient-to-r from-white via-blue-500
        to-secondary bg-clip-text
        font-extrabold  sm:text-5xl !leading-[1.2]">
     All your digital products 
        <span className="font-extrabold  text-transparent
       bg-gradient-to-r from-white/10 via-blue-500
        to-secondary/50 bg-clip-text
        sm:block"> are one click away </span>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-gray-200 ">
       Start Exploring State of The Art Assets Now
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-secondary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <Link
          className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-white focus:outline-none focus:ring  sm:w-auto"
          href="#"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero


