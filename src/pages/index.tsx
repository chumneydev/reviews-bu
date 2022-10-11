import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import { Rating } from 'react-simple-star-rating'

const Home: NextPage = () => {

  const [rating, setRating] = useState(0);

    const handleRating = (rate: number) => {
        setRating(rate);

        console.log('Rating', rate);
    }



  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
        {/* !! Placeholder will go here */}
        <h1>Something will go here as a placeholder</h1>
    </div>
  )
}

export default Home
