import { useState } from 'react';

const App = () => {
	const [counter, setCounter] = useState({
		value: 0,
		steps: 1
	});
	return (
		<>
			<h1>COUNTER: {counter.value}</h1>
			<h1>STEPS: {counter.steps}</h1>

			<button onClick={() => addNumber(counter, setCounter)}>+</button>
			<button onClick={() => substractNumber(counter, setCounter)}>-</button>
			<button onClick={() => resetNumber(counter, setCounter)}>Reset</button>
			<button onClick={() => addStep(counter, setCounter)}>Steps + </button>
			<button onClick={() => substractStep(counter, setCounter)}>
				Steps -
			</button>
			<button onClick={() => resetStep(counter, setCounter)}>
				Reset Steps
			</button>
		</>
	);
};

export default App;

// SUMAR NUMERO AL CONTADOR
const addNumber = (counter, setCounter) => {
	setCounter({ ...counter, value: counter.value + counter.steps });
};

// RESTAR NUMERO AL CONTADOR
const substractNumber = (counter, setCounter) => {
	setCounter({ ...counter, value: counter.value - counter.steps });
};

// RESETEAR EL CONTADOR
const resetNumber = (counter, setCounter) => {
	setCounter({ ...counter, value: 0 });
};

// SUMAR STEP
const addStep = (counter, setCounter) => {
	setCounter({ ...counter, steps: counter.steps + 1 });
};

// RESTAR STEP
const substractStep = (counter, setCounter) => {
	setCounter({ ...counter, steps: counter.steps - 1 });
};

// RESETEAR LOS STEPS
const resetStep = (counter, setCounter) => {
	setCounter({ ...counter, steps: 1 });
};
