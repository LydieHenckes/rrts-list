import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList: React.FC = () => {
	const {todos, error, loading, page, limit} = useTypedSelector(state => state.todo);
	const {fetchTodos, setTodoPage} = useActions();
	const pages = [1, 2, 3, 4, 5];

	useEffect(() => {
		fetchTodos(page, limit);
		console.log('todos', todos);
		console.log()
	}, [page])

	if (loading) {
		return <h1>Loading...</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}	
	return (
		<div>
			<h1>List : </h1>
			{todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title}</div>
         )}
			<div style = {{display: 'flex'}}>
				{pages.map(p =>
					<div
						onClick = {() => setTodoPage(p)}
						style = {{border: p === page ? '2px solid green' : '1px solid gray', padding: 10}}
					>
						{p}
					</div>
				) }
			</div>
		</div>
	)
}

export default TodoList;