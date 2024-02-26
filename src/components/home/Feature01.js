import React from 'react'
import FeauturedProduct from '../../containers/home/FeauturedProduct'

const Feature01 = () => {
	return (
		<div className='md:mx-14 mx-4 mt-10 flex flex-col lg:gap-10'>
			<div>
				<h1 className='font-bold lg:text-3xl text-xl lg:text-start text-center pb-3'>Recently added Featured Properties</h1>
				<div className='flex flex-row md:items-center justify-center w-full lg:gap-[700px]'>
					<p className='lg:text-lg text-[14px] pb-4'>Some people choose prices as primary reason. Those companies that get customers
						because of low prices will lose their customers.</p>
					<div className='flex lg:flex-row flex-col gap-2'>
						<div className='lg:w-8 w-4 h-4 lg:h-8  bg-[#1E40AF] rounded-full'></div>
						<div className='lg:w-8 w-4 h-4 lg:h-8  bg-slate-400 rounded-full'></div>
					</div>
				</div>
			</div>
			<div className='relative grid 2xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-10 gap-8' >
				<FeauturedProduct />
				<FeauturedProduct />
				<FeauturedProduct />
			</div>

		</div>
	)
}

export default Feature01