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
						<LogoutButton />
					) : (
						<li>
							<Link
								href='/api/auth/signin'
								className='text-white text-xl'
							>
								Login
							</Link>
						</li>
					)}
				</ul>
			</nav>
		</header>
	)
}

export default Header
