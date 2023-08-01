
import React, { useState } from 'react';
import { BiMenuAltRight, BiX } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Sidebar = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	}

	return (
		<>
			{!showSidebar ? (
				<BiMenuAltRight
					className='cursor-pointer'
					size={30}
					onClick={toggleSidebar}
				/>
			) : (
				<BiX
					className='cursor-pointer'
					size={35}
					onClick={toggleSidebar}
				/>
			)}
			{showSidebar ? (
				<>
					<div className={`-top-4 left-0 right-0 w-10/12 rounded mt-2 bg-white shadow-lg shadow-[#1E40AF] fixed h-full z-20 ease-in-out duration-300 transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
						}`}>
						{/* header */}
						<div className='mx-4 relative flex items-center text-center text-lg font-bold mt-8'>
							<h1 className='text-center self-center text-xl'>RentalHoops</h1>
						</div>
						<hr className='text-xl' />
						<div className="mx-4 flex flex-col mt-10 text-md">
							<Link to="/">Home</Link>
							<Link to="/insights">Insights</Link>
							<Link to="/contact-us" className=''>Reach Us Now</Link>
						</div>
					</div>
				</>
			) : (
				null
			)}
		</>
	)
}

export default Sidebar