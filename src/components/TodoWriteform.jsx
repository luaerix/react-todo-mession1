function TodoWriteform({ addTodo }) {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const value = e.target.todo.value.trim();
        if (!value) {
            window.alert('할 일을 입력해주세요.');
            return;
        }
        addTodo(value);
        e.target.todo.value = '';
    };

    return (
        <form className="todo-form" onSubmit={handleOnSubmit}>
            <input
                className="todo-input"
                type="text"
                name="todo"
                placeholder="할 일을 입력하세요."
            />
            <button className="todo-button" type="submit">
                등록
            </button>
        </form>
    );
}

export default TodoWriteform;
