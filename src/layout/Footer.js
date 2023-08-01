import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/svg/facebook.svg'
import instragram from '../assets/svg/instragram.svg'
import linkedin from '../assets/svg/linkedin.svg'
import twitter from '../assets/svg/twitter.svg'

const Footer = () => {
	return (
		<div className='md:mx-14 mx-4 mt-10 bg-white Link-10'>
			<h1 className='font-bold text-3xl'>Contact Information</h1>
			<div className='grid lg:grid-cols-3 grid-cols-1 items-center mb-4'>
				<div className='mt-4 flex flex-col'>
					<Link>RentalHooLinks Inc.</Link>
					<Link>The Innovation Village</Link>
					<Link>Linkhone: +256 777- 000 - 000</Link>
					<Link>Email: info@rentalhooLinks.org</Link>
				</div>
				<div className='mt-4 flex flex-col flex-1'>
					<Link>About Us</Link>
					<Link>Features</Link>
					<Link>Services</Link>
					<Link>Reach Us Now</Link>
				</div>
				<div className='mt-4 flex lg:flex-col flex-row  lg:mx-10 lg:items-end items-center'>
					<Link>
						<img src={facebook} alt="" className='w-14'/>
					</Link>
					<Link>
						<img src={linkedin} alt="" className='w-14'/>
					</Link>
					<Link>
						<img src={instragram} alt="" className='w-14'/>
					</Link>
					<Link>
						<img src={twitter} alt="" className='w-14'/>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer