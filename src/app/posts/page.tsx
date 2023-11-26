import { posts } from '@/data/posts'
import Link from 'next/link'

const page = () => {
	return (
		<div className='max-w-2xl mx-auto py-5'>
			<h1 className='font-bold text-3xl mb-4'>Post</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
				{posts.map((post) => (
					<Link
						className='p-4 bg-gray-500 shadow-xl rounded-md hover:scale-105 hover:bg-gray-400 transition-all'
						key={post.id}
						href={`/posts/${post.id}`}
					>
						<h2 className=''>{post.title}</h2>
						<p>Written by: {post.username}</p>
					</Link>
				))}
			</div>
		</div>
	)
}

export default page
