const Comments = () => {
	return (
		<div className='mt-8'>
			<h2 className='font-bold text-xl'>Comments</h2>
			<ul>
				<li className='mb-4 p-2 bg-slate-300 rounded-md'>
					<div className='flex items-center mb-2'>
						<span className='text-blue-500 font-medium mr-2'>John Doe</span>
						<small className='text-gray-400'>2 days ago</small>
					</div>
					<p>wow awsome broh</p>
				</li>
			</ul>
		</div>
	)
}

export default Comments
