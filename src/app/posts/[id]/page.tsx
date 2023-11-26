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
		<div className='max-w-2xl mx-auto py-5'>
			<h1 className='text-2xl font-bold'>{post.title}</h1>
			<p>Written by: {post.author?.name}</p>
			<div className='mt-2'>
				<p>{post?.content}</p>
			</div>
			<Comments postId={params.id} />
			<FormComment postId={params.id} />
		</div>
	)
}

export default page
