import { useState, useEffect } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);
	const [user, setUser] = useState({ name: 'Mario', age: 30 });
	const [numArray, setNumArray] = useState([1, 5, 18, 13, 9]);
	// Esempio per illustrare il cleanup (smontaggio del component)
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setSeconds((prevSeconds) => prevSeconds + 1);
		}, 1000);
		// Cleanup: ferma il timer quando il component si smonta. Senza questo return si verifica il memory leak, cioè il commponente non intercetta lo smontaggio e genera più setInterval in memoria invece di uno per volta
		return () => clearInterval(intervalId);
	});

	let newName = 'Antonio';
	const filteredArray = numArray.filter((num) => num < 10);
	// Fine esempio cleanup

	// console.log(user);

	// Senza array di dipendenze, useEffect equivale a componentDidMount + componentDidUpdate, eseguito a ogni render, cioè a ogni cambiamento di qualsiasi stato
	useEffect(() => {
		console.log(
			'render completo, è cambiato uno degli stati del component',
		);
		return console.log('componente smontato (componentWillUnmount)');
	});

	// Con un array di dipendenze vuoto, equivale a componentDidMount, eseguito una sola volta
	useEffect(() => {
		console.log('componente montato (componentDidMount)');
	}, []);

	// Con un array di dipendenze, equivale a componentDidMount + componentDidUpdate, eseguito ogni volta che la dipendenza specifica (in questo caso lo stato di count) cambia
	useEffect(() => {
		console.log('count è cambiato', count);
	}, [count]);

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
			<h4>Secondi trascorsi: {seconds}</h4>
		</>
	);
};

export default Counter;
