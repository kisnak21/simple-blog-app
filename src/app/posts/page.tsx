import prisma from '@/lib/db'
import Link from 'next/link'

const page = async () => {
	const posts = await prisma.post.findMany({
		orderBy: {
			createdAt: 'desc',
		},
		include: {
			author: true,
		},
	})

	return (
		<div className='container mx-auto py-5'>
			<h1 className='text-3xl font-bold mb-4 text-center text-blue-600'>
				Blog Posts
			</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
				{posts.map((post) => (
					<Link
						className='p-4 bg-blue-300 shadow-md rounded-md hover:shadow-lg hover:bg-blue-400 transition-all block'
						key={post.id}
						href={`/posts/${post.id}`}
					>
						<h2 className='text-xl font-semibold mb-2 text-blue-900'>
							{post.title}
						</h2>
						<p className='text-gray-700'>Written by: {post.author?.name}</p>
					</Link>
				))}
			</div>
		</div>
	)
}

export default page
