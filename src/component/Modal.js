import React from 'react';

const Modal = ({ 
  id, // Unique ID for the modal
  btnName = "Modal",
  Design = "btn",
  title = "Default Title", 
  body = "Default Body", 
  saveButtonLabel = "Save changes", 
  closeButtonLabel = "Close" 
}) => {
  return (
    <>
      <button type="button" className={Design} data-toggle="modal" data-target={`#${id}`}>
        {btnName}
      </button>
      
      <div className="modal bottom fade" id={id} tabIndex="-1" role="dialog" aria-labelledby={`${id}Label`} aria-hidden="true">
        <div className="modal-dialog modal-frame modal-bottom" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${id}Label`}>{title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {body}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary text-capitalize" data-dismiss="modal">{closeButtonLabel}</button>
              <button type="button" className="btn bg-success text-light text-capitalize">{saveButtonLabel}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;  
      