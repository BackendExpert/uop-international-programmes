import React from 'react'
import ErrorPageImg from '../../assets/ErrorPage.png'

const ErrorPage = () => {
  return (
    <div className='my-40 xl:mx-32 md:mx-10 mx-4'>
        <center>
            <img src={ErrorPageImg} alt="" className='w-auto md:h-80 h-36'/>
            <h1 className="text-3xl text-[#560606] font-semibold">ERROR 404</h1>
            <p className="mt-2">Page Not Found</p>    

            <a href="/" className='text-[#e8b910] duration-500 hover:text-[#560606] hover:font-semibold'>Back to home Page</a>
        
        </center>


    </div>
  )
}

export default ErrorPage