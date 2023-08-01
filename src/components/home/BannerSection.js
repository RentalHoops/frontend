import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const BannerSection = () => {
	return (	
		<div className='relative md:p-5 background-image bg-cover md:h-[500px] h-[350px] bg-gray-400' >
			<div className=' text-2xl absolute  md:top-44 top-20 md:left-[400px] md:h-[150px] '>
				<div className='md:bg-white/50 bg-white/60 flex md:justify-evenly md:text-left text-justify px-8 flex-col md:px-4 md:p-2 pt-10 pb-10 rounded-xl	'>
					<div className="font-bold ">
						<h1 className='text-[#1E40AF] md:text-4xl text-[18px] md:text-start text-center'>FIND YOUR NEXT PERFECT PLACE WITH EASE</h1>
					</div>
					{/* <div className="mb-4">
						<p className='font-bold'>Location</p>
					</div> */}
					<div className="md:mt-6 mb-10 mt-1 flex items-center md:justify-center">
						
						<input type="text" className='md:w-full w-[260px] md:h-[40px] h-[30px] rounded-l-lg bg-gray-200 outline-none md:px-4 px-2 md:p-2 p-0 md:text-xl	text-sm	' placeholder='Location....'/>
						<AiOutlineSearch  className='cursor-pointer bg-black text-white rounded-r-lg md:h-10 h-7 w-9'/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BannerSection