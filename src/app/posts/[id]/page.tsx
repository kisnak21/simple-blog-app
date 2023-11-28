import parser from 'html-react-parser'
import Comments from '@/components/Comments'
import FormComment from '@/components/FormComment'
import prisma from '@/lib/db'
import { FC } from 'react'

interface DetailPost {
	params: {
		id: string
	}
}
const page: FC<DetailPost> = async ({ params }) => {
	const post = await prisma.post.findFirst({
		where: {
			id: params.id,
		},
		include: {
			author: true,
		},
	})
	return (
		<div className='container mx-auto py-6 px-4'>
			<div className='bg-slate-300 rounded-md shadow-md p-6'>
				<h1 className='text-4xl font-bold mb-6 text-blue-600'>{post?.title}</h1>
				<p className='text-gray-700'>
					Written by:{' '}
					<span className='font-semibold'>{post?.author?.name}</span>
				</p>
				<div className='mt-4 text-lg text-gray-800 leading-relaxed'>
					<p>{parser(post?.content)}</p>
				</div>
			</div>
			<div className='mt-8'>
				<Comments postId={params.id} />
			</div>
			<div className='mt-6'>
				<FormComment postId={params.id} />
			</div>
		</div>
	)
}

export default page
