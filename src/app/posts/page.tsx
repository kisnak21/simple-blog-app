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
		<div className='max-w-2xl mx-auto py-5'>
			<h1 className='font-bold text-3xl mb-4'>Posts</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
				{posts.map((post) => (
					<Link
						className='p-4 bg-gray-500 shadow-xl rounded-md hover:scale-105 hover:bg-gray-400 transition-all'
						key={post.id}
						href={`/posts/${post.id}`}
					>
						<h2 className=''>{post.title}</h2>
						<p>Written by: {post.author?.name}</p>
					</Link>
				))}
			</div>
		</div>
	)
}

export default page
