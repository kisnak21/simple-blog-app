'use client'
import { FormData } from '@/types/post'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'

// import ReactTextareaAutosize from 'react-textarea-autosize'

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

	const modules = {
		toolbar: [
			[{ header: '1' }, { header: '2' }, { font: [] }],
			[{ size: [] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[
				{ list: 'ordered' },
				{ list: 'bullet' },
				{ indent: '-1' },
				{ indent: '+1' },
			],
			['link', 'image', 'video'],
			['clean'],
		],
		clipboard: {
			matchVisual: false,
		},
	}

	const formats = [
		'header',
		'font',
		'size',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
		'video',
	]

	return (
		<form
			className='max-w-md mx-auto p-2'
			onSubmit={handleSubmit}
		>
			<div className='mb-4'>
				<input
					required
					type='text'
					className='inputClass'
					name='title'
					placeholder='Enter Title'
					value={formdata.title}
					onChange={handleChange}
				/>
			</div>
			<div className='mb-4'>
				{/* <ReactTextareaAutosize
					minRows={5}
					name='content'
					className='inputClass'
					placeholder='Enter Content'
					value={formdata.content}
					onChange={handleChange}
				/> */}
				<ReactQuill
					modules={modules}
					formats={formats}
					theme='snow'
					value={formdata.content}
					onChange={(e) => {
						setFormdata({ ...formdata, content: e })
					}}
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
