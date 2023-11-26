import prisma from '@/lib/db'
import { format } from 'date-fns'
import { FC } from 'react'

interface CommentsProps {
	postId: string
}

const Comments: FC<CommentsProps> = async ({ postId }) => {
	const comments = await prisma.comment.findMany({
		where: {
			postId,
		},
		include: {
			author: true,
		},
	})
	return (
		<div className='mt-8'>
			<h2 className='font-bold text-xl'>Comments</h2>
			<ul>
				{comments.map((comment) => (
					<li
						key={comment.id}
						className='mb-4 p-2 bg-slate-300 rounded-md'
					>
						<div className='flex items-center mb-2'>
							<span className='text-blue-500 font-medium mr-2'>
								{comment.author?.name}
							</span>
							<small className='text-gray-400'>
								{format(comment.createdAt, 'MMM d, yyyy')}
							</small>
						</div>
						<p>{comment.text}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Comments
