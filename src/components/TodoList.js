import React from 'react'
import TodoItem from './TodoItem'
import {useSelector} from 'react-redux';

function TodoList() {
	let todos = useSelector(state => state);
	console.log(todos);
	return (
		<div className="my-4">
			{todos.map(todo => {
				return <TodoItem todo={todo} key={todo.id} />
			})}
			{ /*
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
			 */
			}
		</div>
	)
}
export default TodoList
