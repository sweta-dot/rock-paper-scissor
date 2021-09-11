import React from 'react';
import closeIcon from '../assets/images/icon-close.svg';
import rulesImg from '../assets/images/image-rules.svg';

const Modal = (props) => {
    return (
        props.showRules ?
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">RULES</h4>
                        <img onClick={props.onClose} className="close-icon" alt="close" src={closeIcon} />
                    </div>
                    <div className="modal-body">
                        <img alt="rules" src={rulesImg} />
                    </div>
                </div>
            </div>
            : null
    )
}

export default Modal;