import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './assets/components/Table';
// import Details from './assets/components/Details';
import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Details from './assets/components/Details';
import Counter from './assets/components/counter';

// Il componente Table dovrà comunicare il proprio stato al componente Details, che sarà fratello nella gerarchia di App. Per definizione i due componenti fratelli non possono comunicare tra loro, quindi, perché condividano lo stesso stato, devo ELEVARLO, cioè lo devo far gestire al componente padre (App) che lo comunicherà a entrambi tramite props.
// Il component App deve quindi diventare (per ora) un class component

class App extends Component {
	// Table avrà come stato la selezione di un elemento di una lista
	state = {
		selected: '',
	};

	// Ora questo stato può essere comunicato sia a Table che a Details come prop
	// Sarà però il click su un elemento di lista in Table che dovrà modificare questo stato, quindi ci serve un metodo che faccia questo

	setAppState = (newValue) => {
		this.setState({
			selected: newValue,
		});
	};

	// L'ideale sarebbe che table invocasse direttamte this.props.setAppState(valore). Per fare questo va passato a Table NON SOLO il valore di state, ma anche un metodo per cambiarlo

	render() {
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
								selectedFromApp={this.state.selected}
								// Per MODIFICARE lo stato...
								setAppState={this.setAppState}
								// ... passo a Table il metodo setAppState() di riga 20 come PROP
							/>
						</Col>
						<Col className='my-auto'>
							<h2>COMPONENTE DETAILS</h2>
							<Details
								// LEGGE lo stato
								selectedFromApp={this.state.selected}
							/>
						</Col>
					</Row>
					<div>
						<Counter />
					</div>
				</Container>
			</div>
		);
	}
}

export default App;
