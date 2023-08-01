import React from 'react'
import danpic from '../../assets/svg/dan.svg'
import { AiOutlineSearch } from 'react-icons/ai'

const ContactAgent = () => {
	return (
		<div className='md:mx-44 mx-4 lg:-mt-20 mt-10 bg-[#D9D9D9] p-16 rounded-3xl'>
			<div className='flex lg:flex-row flex-col items-center justify-between'>
				<div className='h-[20rem] w-[15rem] bg-white rounded-2xl '>
					<div className='relative mx-4 h-[20rem] w-[15rem] bg-[#1E40AF] rounded-2xl -mt-8'>
						<img src={danpic} alt="" className='absolute -bottom-3 h-50' />
					</div>
				</div>
				<div className='lg:mx-10 flex flex-col'>
					<h1 className='font-bold lg:text-3xl text-xs '>Contact With Your Nearest Real Estate Agents</h1>
					<p className='lg:text-base text-sm mb-4'>A person or firm authorized to act as agent for one or more property insurance companies in a particular community and usually paid by commission.</p>
					<div className="bg-white flex p-2 rounded-lg ">
						<input type="text" name="" id="" placeholder='Enter your email address' className='flex flex-1 lg:text-base text-sm'/>
						<div className='flex  items-center bg-[#1E40AF] rounded-lg p-2 text-white'>
							<AiOutlineSearch color='white' size={25}/>
							<p className='lg:text-base text-sm'>Search</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactAgent