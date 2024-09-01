import { useState } from 'react';

// Single todo item component
const TodoItem = ({ todo, toggleTodo, deleteTodo }) => (
    <div>
        <span
            onClick={() => toggleTodo(todo.id)}
            style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
            }}
        >
            {todo.text}
        </span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
);

// Form component to add a new todo
const AddTodoForm = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;
        addTodo(newTodo);
        setNewTodo('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a Todo List', completed: false },
    ]);

    const addTodo = (text) => {
        const newTodo = {
            id: todos.length + 1,
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <AddTodoForm addTodo={addTodo} />
            <div>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
