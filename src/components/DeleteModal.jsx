function DeleteModal({ onConfirm, onCancel }) {
    return (
        <div className="modal-backdrop">
            <div className="modal">
                <p>정말 삭제하시겠습니까?</p>
                <div className="modal-btn-group">
                    <button className="modal-edit" onClick={onConfirm}>
                        확인
                    </button>
                    <button className="modal-cancel" onClick={onCancel}>
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;
