import { ListGroup } from 'react-bootstrap';

const Table = (props) => {
	// Per far gestire a Table il proprio stato dovrei indicarlo qui, scrivendo la stessa cosa scritta in App. Avendo elevato verso App lo stato di Table, non ho bisogno di riscriverlo
	// state = {
	// 	selected: '',
	// };

	// Table sta leggendo l'attuale stato del padre App
	// class component
	// checkSelected = (value) => {
	// 	return value === this.props.selectedFromApp ? 'selected' : '';
	// };
	// functional component
	const checkSelected = (value) =>
		value === props.selectedFromApp ? 'selected' : '';

	// render() {
	return (
		<>
			<ListGroup className='text-dark'>
				{/*} Per ogni item della lista gestisco il click, che cambia lo stato usando il metodo scritto dentro app e aggiunge la classe selected all'elemento cliccato */}
				<ListGroup.Item
					// onClick={() => this.props.setAppState('Mario Rossi')}
					onClick={() => props.setAppState('Mario Rossi')}
					// className={this.checkSelected('Mario Rossi')}
					className={checkSelected('Mario Rossi')}
				>
					<h4>
						Cliccando sul nome lo stato scritto in App cambia valore
					</h4>
					Mario Rossi
				</ListGroup.Item>
				<ListGroup.Item
					onClick={() => props.setAppState('Giovanna Verdi')}
					className={checkSelected('Giovanna Verdi')}
				>
					<h4>
						Cliccando sul nome lo stato scritto in App cambia valore
					</h4>
					Giovanna Verdi
				</ListGroup.Item>
				<ListGroup.Item
					onClick={() => props.setAppState('Aldo Bianchi')}
					className={checkSelected('Aldo Bianchi')}
				>
					<h4>
						Cliccando sul nome lo stato scritto in App cambia valore
					</h4>
					Aldo Bianchi
				</ListGroup.Item>
				<ListGroup.Item
					onClick={() => props.setAppState('Maria Neri')}
					className={checkSelected('Maria Neri')}
				>
					<h4>
						Cliccando sul nome lo stato scritto in App cambia valore
					</h4>
					Maria Neri
				</ListGroup.Item>
			</ListGroup>
			<p className='mt-3'>
				{props.selectedFromApp === ''
					? 'Stato del componente Table: Nessun elemento selezionato'
					: `Stato del componente Table: 
							${props.selectedFromApp}`}
			</p>
		</>
	);
};
// }

export default Table;
