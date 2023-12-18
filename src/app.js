import { useEffect, useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className={styles.app}>
			<div>ToDo List</div>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				todos.map(({ id, title, completed }) => (
					<div key={id} className={styles.todos}>
						{id}. {title} - {completed ? 'done' : 'not done'}
					</div>
				))
			)}
		</div>
	);
};
