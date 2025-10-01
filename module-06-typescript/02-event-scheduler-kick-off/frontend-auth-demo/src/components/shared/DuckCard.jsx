const DuckCard = ({ imgUrl, quote, name }) => {
	// console.log(prop2);

	return (
		<div className='card shadow-xl hover:shadow-2xl hover:cursor-pointer w-96  m-auto'>
			<figure className='w-full h-96'>
				<img className='w-full h-full' src={imgUrl} alt={name} />
			</figure>
			<div className='card-body rounded-b-md bg-slate-800 h-40'>
				<h2 className='text-3xl border-b-2 mb-4 border-b-gray-400'>{name}</h2>
				<p>{quote}</p>
			</div>
		</div>
	);
};

export default DuckCard;
