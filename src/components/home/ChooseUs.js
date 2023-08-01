import React from 'react'
import house from '../../assets/svg/house.svg'

const ChooseUs = () => {
	return (
		<div className='md:mx-14 mx-4 mt-10'>
			<hr />
			<div className=' flex lg:flex-row flex-col gap-16 lg:mb-10 mb-4 lg:mt-10 mt-2'>
			<h1 className='font-bold text-3xl lg:hidden text-center -mb-10 mt-4'>Why you choose us?</h1>
				<div className='lg:w-1/2 w-full'>
					<img src={house} alt="choose us" className='w-auto' />
				</div>
				<div className='md:w-1/2 w-full lg:mt-10 -mt-20'>
					<h1 className='hidden lg:flex font-bold text-3xl '>Why you choose us?</h1>
					<p className='pt-10 leading-tight tracking-wider lg:text-2xl text-md'>We are dedicated to curating a collection of exceptional
						homes and estates that redefines elegance, sophistication,
						and opulence. With a profound understanding of discerning
						tastes and  a passion for unparalleled quality, we are your trusted partner in finding the epitome of luxury living</p>
				</div>
			</div>
			<hr />
		</div>
	)
}

export default ChooseUs