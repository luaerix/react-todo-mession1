import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, removeTodo, editTodo }) {
    return (
        <div className="todo-list">
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
