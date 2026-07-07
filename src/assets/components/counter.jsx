import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);
	const [user, setUser] = useState({ name: 'Mario', age: 30 });
	const [numArray, setNumArray] = useState([1, 5, 18, 13, 9]);

	let newName = 'Antonio';
	const filteredArray = numArray.filter((num) => num < 10);

	console.log(user);

	return (
		<>
			<button onClick={() => setCount(count + 1)}>incrementa</button>
			<button onClick={() => setCount(count - 1)}>decrementa</button>
			<button onClick={() => setCount(0)}>azzera</button>
			<h4>{count}</h4>
			<button onClick={() => setUser(() => ({ name: newName, age: 25 }))}>
				Cambia nome
			</button>
			<h4>
				{user.name}, {user.age}
			</h4>
			<button onClick={() => setNumArray(() => filteredArray)}>
				Filtra Array
			</button>
			<h4>{numArray.join(', ')}</h4>
		</>
	);
};

export default Counter;
