import React from 'react'
import { FaFilePdf } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";
import watch from '../assets/watch.png'
function Hero() {
    return (
        <div className=' w-[753px] mt-4'>
            <div className='flex flex-col '>
                <div className='bg-white p-6 mr-4'>

                <h2 className='font-[600] text-[24px]'>Product Stopped Working</h2>
                </div>
                <div className='flex justify-between mr-4  bg-white p-6 border ml-0'>
                    <div className='flex '>
                        <div><img src={watch} alt="" className='round-full'/></div>
                        <div className='mt-2.5 space-y-1'>
                            <p className='text-[14px] font-[500] '>Saurabh Agrawal</p>
                            <p className='text-[14px] font-[500] text-[#98A1B0]'>Created via email</p>
                        </div>
                    </div>
                    <div className='flex mt-6'>
                        <p className='text-[14px] mr-12 font-[500] text-[#98A1B0]'>30min ago</p>
                        <MdOutlineFileUpload/>
                    </div>
                </div>
                <h2 className='font-[700] text-[15px] ml-6 mt-4'>Purchase Details</h2>
                <div className='bg-white p-6 m-4 ml-0 space-y-1 rounded-xl'>
                    <div>
                        <div className='grid grid-cols-3'>
                            <div className='space-y-1 mt-4'>
                                <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                                <p className='text-[13px] font-[500]'>Wearableser</p>
                            </div>
                            <div className='space-y-1 mt-4'>
                                <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                                <p className='text-[13px] font-[500]'>Wearableser</p>
                            </div>
                            <div className='space-y-1 mt-4'>
                                <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                                <p className='text-[13px] font-[500]'>Wearableser</p>
                            </div>
                        </div>
                        <div className='space-y-1 mt-4'>
                            <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                            <p className='text-[13px] font-[500]'>Wearableser</p>
                        </div>
                        <div className='space-y-1 mt-4'>
                            <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                            <p className='text-[13px] font-[500]'>I am writing to initiate a warranty claim for my Victor Noise Watch, which I purchased on [Date of Purchase]. Unfortunately, It stopped working I would like to claim for replacement.</p>
                        </div>
                    </div>
                </div>
                <h2 className='font-[700] text-[15px] ml-6 mt-4'>Purchase Details</h2>
                <div className='bg-white p-6 m-4 ml-0 space-y-1 rounded-xl'>
                    <div>
                        <div className='grid grid-cols-3'>
                            <div className='space-y-1 mt-4'>
                                <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                                <p className='text-[13px] font-[500]'>Wearableser</p>
                            </div>
                            <div className='space-y-1 mt-4'>
                                <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                                <p className='text-[13px] font-[500]'>Wearableser</p>
                            </div>
                            
                        </div>
                        <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Invoice</p>
                        <div className='space-y-1 mt-4 border w-56 p-1 flex'>
                            <div>
                                <FaFilePdf className='text-[#E2574C] mr-2 w-[32px] h-[36px]'/>
                            </div>
                            <div>
                            <p className='text-[13px] font-[500] text-[#98A1B0]'>Invoice.pdf</p>
                            <p className='text-[13px] font-[500]'>12 min ago</p>
                            </div>
                        </div>
                        <div className='space-y-1 mt-4 border flex p-1 w-56'>
                        <div>
                                <FaFilePdf className='text-[#E2574C] mr-2 w-[32px] h-[36px]'/>
                            </div>
                            <div>
                            <p className='text-[13px] font-[500] text-[#98A1B0]'>Invoice.pdf</p>
                            <p className='text-[13px] font-[500]'>12 min ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='font-[700] text-[15px] ml-6 mt-4'>User details</h2>
                <div className='bg-white p-6 m-4 ml-0 space-y-1 rounded-xl'>
                    <div>
                        <div className='grid grid-cols-3'>
                            <div className='space-y-1 mt-4'>
                                <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                                <p className='text-[13px] font-[500]'>Wearableser</p>
                            </div>
                            <div className='space-y-1 mt-4'>
                                <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                                <p className='text-[13px] font-[500]'>Wearableser</p>
                            </div>
                            <div className='space-y-1 mt-4'>
                                <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                                <p className='text-[13px] font-[500]'>Wearableser</p>
                            </div>
                        <div className='space-y-1 mt-4'>
                            <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                            <p className='text-[13px] font-[500]'>Wearableser</p>
                        </div>
                        <div className='space-y-1 mt-4'>
                            <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                            <p className='text-[13px] font-[500] '>Product Category</p> 

                        </div>
                        </div>
                    </div>
                </div>
                <h2 className='font-[700] text-[15px] ml-6 mt-4'>Shippinf & Bilings</h2>
                <div className='bg-white p-6 m-4 ml-0 space-y-1 rounded-xl'>
                    <div>
                        <div className='grid grid-cols-3'>
                            <div className='space-y-1 mt-4'>
                                <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                                <p className='text-[13px] font-[500]'>Wearableser</p>
                            </div>
                            <div className='space-y-1 mt-4'>
                                <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                                <p className='text-[13px] font-[500]'>Wearableser</p>
                            </div>
                            <div className='space-y-1 mt-4'>
                                <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                                <p className='text-[13px] font-[500]'>Wearableser</p>
                            </div>
                        <div className='space-y-1 mt-4'>
                            <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                            <p className='text-[13px] font-[500]'>Wearableser</p>
                        </div>
                        <div className='space-y-1 mt-4'>
                            <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                          <p className='text-[13px] font-[500]'>Wearableser</p>

                        </div>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Hero