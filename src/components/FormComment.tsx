'use client'

import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'

interface FormCommentProps {
	postId: string
}
const FormComment: FC<FormCommentProps> = ({ postId }) => {
	const [comment, setComment] = useState<string>('')

	const router = useRouter()
	const { data } = useSession()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setComment(e.target.value)
	}

	const handleSubmit = async () => {
		if (comment !== '') {
			try {
				const newComment = await axios.post(`/api/comments`, {
					postId,
					text: comment,
				})
				if (newComment.status === 200) {
					router.refresh()
				}
			} catch (error) {
				console.log(error)
			}
		}
	}
	return (
		<div className='mt-4'>
			<label
				htmlFor='comment'
				className='block text-gray-700 text-sm font-bold mb-2'
			>
				Add Comment
			</label>
			<input
				value={comment}
				onChange={handleChange}
				type='text'
				className='w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'
				name='comment'
			/>
			<button
				disabled={!data?.user?.email}
				className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-2 disabled:bg-gray-400'
				onClick={handleSubmit}
			>
				Comment
			</button>
		</div>
	)
}

export default FormComment
