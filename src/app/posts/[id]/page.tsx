import Comments from '@/components/Comments'
import FormComment from '@/components/FormComment'

const page = () => {
	return (
		<div className='max-w-2xl mx-auto py-5'>
			<h1 className='text-2xl font-bold'>Post Title</h1>
			<p>Written by: john doe</p>
			<div className='mt-2'>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
					non voluptatum dolorem! Totam ad nemo, sequi blanditiis excepturi
					repudiandae commodi quos veritatis beatae fugiat dolorem illum,
					corporis molestias, rem fugit?
				</p>
			</div>
			<Comments />
			<FormComment />
		</div>
	)
}

export default page
