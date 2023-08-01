import React from 'react'
import house from '../../assets/svg/house.svg'

const FeauturedProduct = () => {
	return (
		<div className='bg-gray-400 relative w-[350px] h-[320px] rounded-2xl'>
			<div>
				<img src={house} alt="" className='w-[350px] rounded-t-2xl' />
			</div>
			<p className='px-1'>Dr. Lucile road</p>
			<div className='flex items-center px-1'>
				<p className='flex flex-1 '>2 beds</p>
				<p>2 baths</p>
			</div>
			<p className='px-1 text-[#1E40AF] font-bold'>UGX. 1.200,000</p>
			<div className='flex flex-row items-center mx-2 '>
				<div className='flex items-center flex-1 gap-2'>
					<div className='w-8 h-8 bg-white rounded-full'></div>
					<p>Jimmy Okidi</p>
				</div>
				<div className='bg-[#1E40AF] rounded-lg text-white p-2'>
					<p className='text-sm'>Contact Now</p>
				</div>
			</div>
		</div>
	)
}

export default FeauturedProduct