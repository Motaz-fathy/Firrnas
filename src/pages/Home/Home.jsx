import React from 'react'
import Header from '../../components/Header'

const Home = () => {
  return (
    <div className='flex flex-col items-center w-full h-auto gap-4'>
      <div >navbar component</div>
         <Header />

         <div className='h-96 w-full mt-20'> sponsor component </div>
         <div className='h-96 w-full mt-20'> why Firrnas component </div>
         <div className='h-96 w-full mt-20'> card3d component </div>
         <div className='h-96 w-full mt-20'> super convention component </div>
         <div className='h-96 w-full mt-20'> FAQs component </div>
         <div className='h-96 w-full mt-20'> OrderCard component </div>
         <div className='h-96 w-full mt-20'> footer component </div>
    </div>
  )
}

export default Home