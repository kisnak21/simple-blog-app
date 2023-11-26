import Link from 'next/link'
import React from 'react'

const Header = () => {
	return (
		<header className='bg-cyan-500 p-2'>
			<nav className='flex items-center justify-between max-w-2xl mx-auto'>
				<Link
					href='/'
					className='text-white text-2xl font-medium'
				>
					My Blogs
				</Link>
				<ul className='flex gap-4'>
					<li>
						<Link
							href='/posts'
							className='text-white text-xl'
						>
							Posts
						</Link>
					</li>
					<li>
						<Link
							href='/auth/login'
							className='text-white text-xl'
						>
							Login
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
