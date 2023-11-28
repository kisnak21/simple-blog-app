import { getCurrentUser } from '@/lib/session'
import Link from 'next/link'
import React from 'react'
import LogoutButton from './LogoutButton'

const Header = async () => {
	const user = await getCurrentUser()
	return (
		<header className='bg-cyan-500 p-2'>
			<nav className='flex items-center justify-between max-w-2xl mx-auto'>
				<Link
					href='/'
					className='text-white text-2xl font-medium'
				>
					My Blogs
				</Link>
				<ul className='flex space-x-4 items-center'>
					<li>
						<Link
							href='/posts'
							className='text-white text-xl'
						>
							Posts
						</Link>
					</li>
					{user?.name ? (
						<div className='relative z-10'>
							<span className='flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md hover:bg-gray-100 cursor-pointer'>
								<span className='mx-1'>{user.name}</span>
								<svg
									className='w-5 h-5 mx-1'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z'
										fill='currentColor'
									></path>
								</svg>
								<LogoutButton />
							</span>
						</div>
					) : (
						<Link
							href='/api/auth/signin'
							className='text-white text-xl'
						>
							Login
						</Link>
					)}
				</ul>
			</nav>
		</header>
	)
}

export default Header
