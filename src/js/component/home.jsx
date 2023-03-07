import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Form from "./form.jsx"
import Todo from "./todo.jsx";

const Home = () => {

	const [todoList, setTodoList] = useState([])

	console.log('home -->', todoList)

	const handleAddTodo = (inputValue) => {
    if (inputValue === '' ) {
			return alert('Write something')
		}
		setTodoList([...todoList, {
			id: uuidv4(),
			description: inputValue,
		}])
  }

	const handleRemoveTodo = (todoId) => {
		const newTodoList = todoList.filter(todo => todo.id !== todoId )
		setTodoList(newTodoList)
	}

	return (
		<div className="mainContainer">
			<div className="appContainer">
				<h1>todos</h1>
				<Form todoList={todoList} handleAddTodo={handleAddTodo} />
				<div className="todosContainer">
					{todoList.map((todo) => {
						return (
							<Todo 
								key={todo.id} 
								todo={todo}
								handleRemoveTodo={handleRemoveTodo}
							/>
						)
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
