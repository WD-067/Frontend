const API_URL = 'https://duckpond-89zn.onrender.com/wild-ducks';

const getAllDucks = async abortCont => {
	const res = await fetch(API_URL, {
		signal: abortCont.signal
	});

	if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

	const data = await res.json();

	return data;
};

const getDuckById = async (id, abortCont) => {
	const res = await fetch(`${API_URL}/${id}`, {
		signal: abortCont.signal
	});

	if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

	const data = await res.json();

	return data;
};

const createDuck = async newDuck => {
	const res = await fetch(API_URL, {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(newDuck)
	});

	if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

	const data = await res.json();

	return data;
};

const duck = {
	_id: 1,
	name: 'Sir Quacks-a-lot',
	imgUrl:
		'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/430/7841/Knight-Rubber-Duck-Yarto-2__93062.1576270637.jpg?c=2',
	quote: 'I will slay your bugs!'
};
export { getAllDucks, getDuckById, duck, createDuck };
