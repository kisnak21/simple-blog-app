'use client'

import { signOut } from 'next-auth/react'

const LogoutButton = () => {
	return (
		<button
			onClick={() => signOut()}
			className='bg-red-500 hover:bg-red-600 text-white p-2 rounded-md'
		>
			Logout
		</button>
	)
}

export default LogoutButton
