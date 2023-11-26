'use client'
import { FormData } from '@/types/post'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'

const FormPost = () => {
	const [formdata, setFormdata] = useState<FormData>({
		title: '',
		content: '',
	})
	const router = useRouter()

	const { data } = useSession()

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		e.preventDefault()
		setFormdata({ ...formdata, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			const response = await axios.post('/api/posts', formdata)
			if (response.status === 200) {
				router.push(`/posts/${response.data.newPost.id}`)
			}
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<form
			className='max-w-md mx-auto p-2'
			onSubmit={handleSubmit}
		>
			<div className='mb-4'>
				<input
					type='text'
					className='inputClass'
					name='title'
					placeholder='Enter Title'
					value={formdata.title}
					onChange={handleChange}
				/>
			</div>
			<div className='mb-4'>
				<ReactTextareaAutosize
					minRows={5}
					name='content'
					className='inputClass'
					placeholder='Enter Content'
					value={formdata.content}
					onChange={handleChange}
				/>
			</div>
			<button
				disabled={!data?.user?.email}
				type='submit'
				className='bg-cyan-500 hover:opacity-80 text-white font-bold py-2 px-4 rounded w-full disabled:bg-slate-500'
			>
				Submit
			</button>
		</form>
	)
}

export default FormPost
