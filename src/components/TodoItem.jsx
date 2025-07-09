import { useState } from 'react';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

function TodoItem({ todo, removeTodo, toggleTodo, editTodo }) {
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <>
            <li
                key={todo.id}
                className={`todo-item${todo.checked ? ' checked' : ''}`}
            >
                <input
                    type="checkbox"
                    onChange={() => {
                        toggleTodo(todo.id);
                    }}
                    checked={todo.checked}
                />
                {todo.checked ? '완료' : '미완료'} / {todo.createdAt} /{' '}
                {todo.text}
                <button className="edit-btn" onClick={() => setShowModal(true)}>
                    수정
                </button>
                <button
                    className="remove-btn"
                    onClick={() => setShowDeleteModal(true)}
                >
                    삭제
                </button>
            </li>
            {showModal && (
                <EditModal
                    todo={todo}
                    onClose={() => setShowModal(false)}
                    onEdit={editTodo}
                />
            )}
            {showDeleteModal && (
                <DeleteModal
                    onConfirm={() => {
                        removeTodo(todo.id);
                        setShowDeleteModal(false);
                    }}
                    onCancel={() => setShowDeleteModal(false)}
                />
            )}
        </>
    );
}

export default TodoItem;
