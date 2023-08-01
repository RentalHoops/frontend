import React from 'react'

const SearchOut = () => {
	return (
		<div className='md:mx-14 mx-4 bg-[#1E40AF] lg:mb-40 mb-2 lg:pb-36 pb-8'>
			<div className='items-center text-center text-white pt-10'>
				<h1 className='font-bold lg:text-3xl text-xl'>How Easily It Works For You</h1>
				<p className='lg:text-base text-sm px-2'>How does the Real estate Work? The Real Estate industry works because the value of real estate tend to rise.</p>
			</div>
			<div className='mt-10 flex flex-col items-center lg:justify-center gap-4'>
				<div className='flex lg:flex-row flex-col justify-center lg:gap-64 gap-4'>
					<div className='relative bg-white w-72 h-40 rounded-lg px-4 p-1 mx-10'>
						<div className='absolute z-10 -top-4 -right-2 lg:w-10 w-4 h-4 lg:h-10  bg-[#D9D9D9] rounded-full'></div>
						<p className='font-bold text-xl'>Search Place</p>
						<p>Typically, the purpose of a life estate deed is to provide for the transfer of the property to the desired person.</p>
					</div>
					<div className='relative bg-white w-72 h-40 rounded-lg px-4 p-1 mx-10'>
						<div className='absolute z-10 -top-4 -right-2 lg:w-10 w-4 h-4 lg:h-10  bg-[#D9D9D9] rounded-full'></div>
						<p className='font-bold text-xl'>Agent Dealing</p>
						<p>When you have the cash to pay for the full amount of a house, it means that there will be no contingencies.</p>
					</div>
				</div>
				<div className='relative bg-white w-72 h-40 rounded-lg px-4 p-1 mx-10'>
						<div className='absolute z-10 -top-4 -right-2 lg:w-10 w-4 h-4 lg:h-10  bg-[#D9D9D9] rounded-full'></div>
						<p className='font-bold text-xl'>Select Best Choice</p>
						<p>Investment properties can be exciting and very rewarding if you make the right choice. But income and rewards aside.</p>
					</div>
			</div>
		</div>
	)
}

export default SearchOut