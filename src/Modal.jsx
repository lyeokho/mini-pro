
import './Modal.css'

function Modal({isOpen, isClose, children}){
  if(!isOpen) 
    return null;
  
  return(
 
    <div  className='modal-back' onClick={isClose}>
      <div className='modal-info' onClick={e=>e.stopPropagation()} >
          {children}

        <button className='close-btn' onClick={isClose} ></button>
      </div>
    </div>
    
 


  );
};

export default Modal;