import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const BannerSection = () => {
	return (	
		<div className='relative md:p-5 background-image bg-cover md:h-[500px] h-[350px] bg-gray-400' >
			<div className='flex-1 justify-evenly mt-52 text-2xl absolute bottom-4 left-0 w-[500px] h-[150px] '>
				<div className='md:bg-white/50 bg-white/60 flex md:justify-evenly md:text-left text-justify px-8 flex-col md:px-4 md:p-2 pt-10 pb-10 rounded-r-xl	'>
					<div className="font-bold ">
						<h1 className='text-[#1E40AF] md:text-4xl text-sm'>FIND YOUR NEXT PERFECT PLACE WITH EASE</h1>
					</div>
					{/* <div className="mb-4">
						<p className='font-bold'>Location</p>
					</div> */}
					<div className="md:mt-6 mb-10 mt-1 flex items-center md:justify-center">
						
						<input type="text" className='md:w-full w-1/2 h-[40px] rounded-l-lg bg-gray-200 outline-none md:px-4 p-2 md:text-xl	text-md	' placeholder='Location....'/>
						<AiOutlineSearch size={40} className='cursor-pointer bg-black text-white rounded-r-lg '/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BannerSection