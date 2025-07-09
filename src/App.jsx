import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import TodoItem from './components/TodoItem.jsx';
import TodoList from './components/TodoList.jsx';
import TodoWriteform from './components/TodoWriteform.jsx';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const now = new Date();
        const pad = (n) => n.toString().padStart(2, '0');
        const dateStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
            now.getDate()
        )} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
        const uniqueId = `${dateStr}-${now.getTime()}`;

        const newTodo = {
            id: uniqueId,
            text,
            checked: false,
            createdAt: dateStr,
        };
        setTodos((prev) => [...prev, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const editTodo = (id, newText) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
    };

    return (
        <>
            <Header />
            <TodoWriteform addTodo={addTodo} />
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                editTodo={editTodo}
            />
        </>
    );
}

export default App;
