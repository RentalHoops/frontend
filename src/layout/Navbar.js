import React from 'react'
import { Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import Sidebar from './Sidebar'

const Navbar = () => {
	return (
		<nav className='bg-white px-4 p-2 fixed top-0 right-0 left-0 z-20'>
			<div className='relative flex items-center'>
				{/* left side */}
				<div className='flex-1 flex flex-row text-xl 	gap-10 text-[#1E40AF]'>
					<div>
						<Link to='/' className='font-bold'>RentalHoops</Link>
					</div>
					
				</div>
				{/* right side */}
				<div className='flex items-center justify-between gap-10 font-bold text-[#1E40AF]'>
					<div className='hidden md:flex gap-10 items-center'>
						<Link to="/">Home</Link>
						<Link to="/insights">Insights</Link>
						<Link to="/contact-us" className='border-2 border-[#1E40AF] px-4 p-1'>Reach Us Now</Link>
					</div>
					<h1 className='bg-[#1E40AF] text-white md:px-4 px-2 md:p-2 p-2 rounded-lg md:text-lg uppercase font-bold cursor-pointer'>Login</h1>
					<div className='flex md:hidden'>
						{/* <BiMenu size={30}/> */}
						<Sidebar />
					</div>
				</div>
			</div>
		</nav>

	)
}

export default Navbar