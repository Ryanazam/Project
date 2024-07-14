import React from 'react'
import Image from "./../assets/image 15.png"
import Arrow from "../assets/arrow-up-right (1).png"

const HomePage = () => {
  return (
    <div className='w-full h-full flex flex-col md:flex-row items-center justify-center gap-4  bg-gray-200 '>
    <div className='w-full md:w-[660px] ml-7 mr-10 flex flex-col gap-3'>
      <h2 className='text-left text-[24px] md:text-[28px] text-blue-600 ml-4'>Демо-версия</h2>
      <p className='text-gray-600 ml-4'>
        За 18 лет деятельности было реализовано более 500 крупных, а так же, не менее 2500 средних и малых проектов. Используя знания и накопленный опыт мы можем предложить
      </p>
      <button className='bg-blue-700 rounded-full p-3  ml-4 w-[290px] md:w-[341px] custom-w-250 mt-3 text-white flex justify-between items-center'>
        <p>Попробовать бесплатно</p>
        <div className='w-[20px] h-[20px] rounded-full bg-white'>
          <img src={Arrow} alt="arrow" className='w-full h-full p-1' />
        </div>
      </button>
    </div>
    <div className='w-full flex justify-center '>
      <img src={Image} alt='a' className='w-full h-auto' />
    </div>
  </div>
  
    
  )
}

export default HomePage