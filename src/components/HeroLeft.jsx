import React from 'react'
import watch from '../assets/watch.png'
function HeroLeft() {
    return (
        <div className='ml-24 '>
            <div className='flex flex-col bg-white p-4 m-4 rounded-xl'>
                <div><h3 className='text-[15px] font-[700] mb-6'>Product details</h3>

                </div>
                <div className='flex'>
                    <div>
                        <img src={watch} alt="" />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Name</p>
                        <p className='text-[13px] font-[500]'>AcousticWavw speaker</p>

                        <button className='bg-green-300 h-[24px] w-[104px] rounded-full text-[10px]'>Active warranty</button>
                    </div>
                </div>
                <div className='mt-2.5'>
                    <p className='text-[13px] font-[500] text-[#98A1B0]'>Product Category</p>
                    <p className='text-[13px] font-[500]'>Wearableser</p>
                </div>
                <div className='mt-2.5'>
                <p className='text-[13px] font-[500] text-[#98A1B0]'>Model No.</p>
                    <p className='text-[13px] font-[500]'>Model AW-100r</p>
                </div>
                <div className='mt-2.5'>
                <p className='text-[13px] font-[500] text-[#98A1B0]'>Order ID</p>
                    <p className='text-[13px] font-[500]'>#1233443</p>
                </div>
                <div className='mt-2.5'>
                <p className='text-[13px] font-[500] text-[#98A1B0]'>Purchase Platform</p>
                    <p className='text-[13px] font-[500]'>Amazon</p>
                </div>
                <div className='mt-2.5'>
                <p className='text-[13px] font-[500] text-[#98A1B0]'>Purchase Date</p>
                    <p className='text-[13px] font-[500]'>24 June 2023</p>
                </div>
            </div>
            <div>
            <div className='flex flex-col bg-white p-4 m-4 rounded-xl'>
                <div><h3 className='text-[15px] font-[500] mb-6'>Customer Details</h3>

                </div>
                <div className='flex'>
                    <div>
                    <img src={watch} alt="" />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <p className='text-[13px] font-[500] text-[#98A1B0]'>Saurabh Agrawal GMT </p>
                        <p className='text-[13px] font-[500]'>GMT +5:30 Kolkata</p>

                        <button className='bg-green-300 h-[24px] w-[104px] rounded-full text-[10px]'>Premium</button>
                    </div>
                </div>
                <div className='mt-2.5'>
                    <p className='text-[13px] font-[500] text-[#98A1B0]'>Email</p>
                    <p className='text-[13px] font-[500]'>saurabh123@gmail.com</p>
                </div>
                <div className='mt-2.5'>
                <p className='text-[13px] font-[500] text-[#98A1B0]'>Contact Number</p>
                    <p className='text-[13px] font-[500]'>8934527373</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default HeroLeft