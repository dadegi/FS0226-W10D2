import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Non serve più importare Component perché con gli hooks App torna a essere un functional component
// import { Component } from 'react';
// Al suo posto importamo l'hook useState
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from './assets/components/Table';
import Details from './assets/components/Details';
import Counter from './assets/components/counter';

// Il componente Table dovrà comunicare il proprio stato al componente Details, che sarà fratello nella gerarchia di App. Per definizione i due componenti fratelli non possono comunicare tra loro, quindi, perché condividano lo stesso stato, devo ELEVARLO, cioè lo devo far gestire al componente padre (App) che lo comunicherà a entrambi tramite props.

const App = () => {
	// Table avrà come stato la selezione di un elemento di una lista
	// Con class component:
	// state = {
	// 	selected: '',
	// };

	const [selected, setSelected] = useState('');

	// Ora questo stato può essere comunicato sia a Table che a Details come prop
	// Sarà però il click su un elemento di lista in Table che dovrà modificare questo stato, quindi ci serve un metodo che faccia questo
	// Con class component:
	// setAppState = (newValue) => {
	// 	this.setState({
	// 		selected: newValue,
	// 	});
	// };

	// L'ideale sarebbe che table invocasse direttamte setAppState(valore). Per fare questo va passato a Table NON SOLO il valore di state, ma anche un metodo per cambiarlo
	function setAppState(newValue) {
		setSelected(newValue);
	}

	// Con arrow function:
	// const setAppState = (newValue) => {
	// 	setSelected(newValue);
	// }

	// Non serve più render, metodo per renderizzare i class component
	// render() {
	return (
		<div>
			<header className='container-fluid bg-dark'>
				<h1 className='text-center text-light'>
					STATE ELEVATION HOOKS
				</h1>
			</header>
			<Container>
				<Row className='mt-3'>
					<Col>
						<h2>COMPONENTE TABLE</h2>
						<Table
							// LEGGE lo stato
							// Con class component:
							// selectedFromApp={this.state.selected}
							// Adesso abbiamo l'accesso diretto allo stato, senza passare più per la proprietà di classe
							selectedFromApp={selected}
							// Per MODIFICARE lo stato...
							// Con class component:
							//setAppState={this.setAppState}
							// Adesso abbiamo l'accesso diretto alla funzione, che non è più un metodo di classe ma una funzione autonoma
							setAppState={setAppState}
							// ... passo a Table il metodo setAppState() di riga 20 come PROP
						/>
					</Col>
					<Col className='my-auto'>
						<h2>COMPONENTE DETAILS</h2>
						<Details
							// LEGGE lo stato
							// Con class component:
							// selectedFromApp={this.state.selected}
							// Adesso abbiamo l'accesso diretto allo stato, senza passare più per la proprietà di classe
							selectedFromApp={selected}
						/>
					</Col>
				</Row>
				<div>
					<Counter />
				</div>
			</Container>
		</div>
	);
};
// }

export default App;
