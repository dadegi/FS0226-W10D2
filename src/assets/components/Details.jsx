import { Alert } from 'react-bootstrap';

const Details = (props) => (
	<Alert variant='danger'>
		{props.selectedFromApp || 'Nessun valore selezionato'}
		<h4>Il componente Details riceve il nuovo valore da App e lo stampa</h4>
	</Alert>
);

export default Details;
