import { useState } from 'react';

function EditModal({ todo, onClose, onEdit }) {
    const [value, setValue] = useState(todo.text);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) {
            window.alert('수정할 내용을 입력해주세요.');
            return;
        }
        onEdit(todo.id, value.trim());
        onClose();
    };

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        autoFocus
                    />
                    <button className="modal-edit" type="submit">
                        수정
                    </button>
                    <button
                        className="modal-cancel"
                        type="button"
                        onClick={onClose}
                    >
                        취소
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditModal;
