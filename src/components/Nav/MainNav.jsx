import React from 'react'
import UopLogo from '../../assets/uoplogo.png'
import { MainNavData } from './DataNav'
import { FaSearch } from 'react-icons/fa'

const MainNav = () => {
    return (
        <div className='xl:px-20 px-4 py-4 bg-[#560606] text-white'>
            <div className="flex justify-between">
                <div className="">
                    <a href="/">
                        <img src={UopLogo} alt="" className='xl:h-20 h-12 w-auto' />
                    </a>
                </div>
                <div className="py-6">
                    <div className="xl:block hidden">
                        <div className="flex">
                            {
                                MainNavData.map((item, index) => {
                                    return (
                                        <div className="mx-2 font-semibold" key={index}>
                                            <div className="flex">
                                                <p className='mr-4'><a href={item.link}>{item.name}</a></p>
                                                {
                                                    item.id === 6 ?
                                                        <div className=""></div>
                                                        :
                                                        <div className="">|</div>
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }


                            <div className="">
                                <div className="flex justify-between items-center">
                                    <div className="">
                                        <div className="flex">
                                            <input type="text" name="" id="" className='text-gray-500 mr-2 h-8 rounded pl-2' placeholder='Search...' />
                                            <div className="mt-1"><FaSearch className='h-6 w-auto' /></div>
                                        </div>
                                        <div className="flex justify-center items-center mt-2">
                                            <div className="mx-2">සිං</div>
                                            <div className="mx-2">த</div>
                                            <div className="mx-2">A</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mr-4">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNav