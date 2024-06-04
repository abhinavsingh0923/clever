import React from 'react'

export default function Infinitecrousel() {
  return (
<div className="w-full inline-flex flex-nowrap">
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <img className='max-h-20' src="./facebook.svg" alt="Facebook" />
        </li>
        <li>
            <img className='max-h-20' src="./disney.svg" alt="Disney" />
        </li>
        <li>
            <img className='max-h-20' src="./airbnb.svg" alt="Airbnb" />
        </li>
        <li>
            <img className='max-h-20' src="./apple.svg" alt="Apple" />
        </li>
        <li>
            <img className='max-h-20' src="./spark.svg" alt="Spark" />
        </li>
        <li>
            <img className='max-h-20' src="./samsung.svg" alt="Samsung" />
        </li>
        <li>
            <img className='max-h-20' src="./quora.svg" alt="Quora" />
        </li>
        <li>
            <img className='max-h-20' src="./pinterest.svg" alt="pinterest" />
        </li>
    </ul>
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        <li>
            <img className='max-h-20' src="./facebook.svg" alt="Facebook" />
        </li>
        <li>
            <img className='max-h-20' src="./disney.svg" alt="Disney" />
        </li>
        <li>
            <img className='max-h-20' src="./airbnb.svg" alt="Airbnb" />
        </li>
        <li>
            <img className='max-h-20' src="./apple.svg" alt="Apple" />
        </li>
        <li>
            <img className='max-h-20' src="./spark.svg" alt="Spark" />
        </li>
        <li>
            <img className='max-h-20' src="./samsung.svg" alt="Samsung" />
        </li>
        <li>
            <img className='max-h-20' src="./quora.svg" alt="Quora" />
        </li>
        <li>
            <img className='max-h-20' src="./pinterest.svg" alt="pinterest" />
        </li>
    </ul>
</div>
  )
}
