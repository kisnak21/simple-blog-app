'use client'
import { FormData } from '@/types/post'
import React, { useState } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'

const FormPost = () => {
	const [formdata, setFormdata] = useState<FormData>({
		title: '',
		content: '',
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		e.preventDefault()
		setFormdata({ ...formdata, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(formdata)
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
				type='submit'
				className='bg-cyan-500 hover:opacity-80 text-white font-bold py-2 px-4 rounded w-full disabled:bg-slate-500'
			>
				Submit
			</button>
		</form>
	)
}

export default FormPost
