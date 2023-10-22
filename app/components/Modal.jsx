import './Modal.css';
import {RiCloseCircleFill} from 'react-icons/ri';

const Modal = ({ children, modalOpen, setModalOpen }) => {
    return (
      <>
        {modalOpen && (
          <div className="modal">
            <div className="overlay">
              <div className="modal-content">
                <button className="close-modal" onClick={() => setModalOpen(false)}>
                  <RiCloseCircleFill style={{fontSize:15}}/>
                </button>
  
                {children }
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Modal;
  