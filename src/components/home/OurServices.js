import React from 'react'
import team from '../../assets/svg/team.svg'
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md'

const OurServices = () => {
	return (
		<div className='md:mx-14 mx-4 '>
			<hr />
			<div className=' flex lg:flex-row flex-col gap-16 lg:mb-10  mb-4 lg:mt-10 mt-2'>
				<h1 className='font-bold text-3xl lg:hidden text-center -mb-10 mt-4'>Our Service</h1>
				<div className='lg:w-[550px] h-full w-full flex flex-1'>
					<img src={team} alt="choose us" className='w-[550px]' />
				</div>
				<div className='md:w-1/2 w-full items-center justify-evenly lg:mt-36 -mt-14'>
					<h1 className='hidden lg:flex font-bold text-4xl text-center items-center'>Our Service</h1>
					<div className=' space-y-6 mt-4 items-center'>
						{/* first item */}
						<div>
							<div className='flex flex-row items-center'>
							<h1 className='flex font-bold md:text-3xl text-xl flex-1'>Personalized Consultation </h1>
							<MdOutlineExpandLess size={35} className='hover:bg-gray-200 cursor-pointer'/>
							</div>
							<div>
								<p>Our team of experts will work closely with you to understand your specific requirements, preferences, and aspirations. We will guide you through every step of the process, providing personalized</p>
							</div>
						</div>
						<div>
							<div className='flex flex-row items-center'>
							<h1 className='flex font-bold md:text-3xl text-xl flex-1'> Exclusive listings </h1>
							<MdOutlineExpandMore size={35} className='hover:bg-gray-200 cursor-pointer'/>
							</div>
							<div>
								<p className='hidden'>Our team of experts will work closely with you to understand your specific requirements, preferences, and aspirations. We will guide you through every step of the process, providing personalized</p>
							</div>
						</div>
						<div>
							<div className='flex flex-row items-center'>
							<h1 className='flex font-bold md:text-3xl text-xl flex-1'>  Confidentiality and Discretion </h1>
							<MdOutlineExpandMore size={35} className='hover:bg-gray-200 cursor-pointer'/>
							</div>
							<div>
								<p className='hidden'>Our team of experts will work closely with you to understand your specific requirements, preferences, and aspirations. We will guide you through every step of the process, providing personalized</p>
							</div>
						</div>
						<div>
							<div className='flex flex-row items-center'>
							<h1 className='flex font-bold md:text-3xl text-xl flex-1'>After-sales support </h1>
							<MdOutlineExpandMore size={35} className='hover:bg-gray-200 cursor-pointer'/>
							</div>
							<div>
								<p className='hidden'>Our team of experts will work closely with you to understand your specific requirements, preferences, and aspirations. We will guide you through every step of the process, providing personalized</p>
							</div>
						</div>
					</div>
				</div>

			</div>
			<hr />
		</div>
	)
}

export default OurServices