import React, { useState, useEffect, useRef } from 'react';

const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 767);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isSmallScreen;
};

const Modal = ({
  id,
  btnName = "Modal",
  Design = "btn",
  title = "Default Title",
  body = "Default Body",
  saveButtonLabel = "Save changes",
  closeButtonLabel = "Close",
  onConfirm,
  questionId
}) => {
  const [loading, setLoading] = useState(false);
  const isSmallScreen = useScreenSize();
  const modalRef = useRef(null);

  const handleConfirm = async () => {
    setLoading(true);
    if (onConfirm) {
      await onConfirm(questionId);
      setLoading(false);
      if (modalRef.current) {
        const modalElement = modalRef.current.querySelector('.modal');
        if (modalElement) {
          // Hide the modal using Bootstrap's modal method
          modalElement.modal('hide');
        }
      }
    }
  };

  return (
    <>
      <button type="button" className={Design} data-toggle="modal" data-target={`#${id}`}>
        {btnName}
      </button>

      {isSmallScreen ? (
        <div ref={modalRef} className="modal bottom fade" id={id} tabIndex="-1" role="dialog" aria-labelledby={`${id}Label`} aria-hidden="true">
          <div className="modal-dialog modal-frame modal-bottom" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <p className="modal-title" id={`${id}Label`}>{title}</p>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {body}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary text-capitalize" data-dismiss="modal" disabled={loading}>
                  {closeButtonLabel}
                </button>
                <button type="button" className="btn bg-danger text-light text-capitalize" onClick={handleConfirm} disabled={loading}>
                  {loading ? <> Deleting...   <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></> : saveButtonLabel} <i className="fi fi-sr-trash-xmark"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div ref={modalRef} className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby={`${id}Label`} aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
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
                <button type="button" className="btn btn-secondary text-capitalize" data-dismiss="modal" disabled={loading}>
                  {closeButtonLabel}
                </button>
                <button type="button" className="btn bg-danger text-light text-capitalize" onClick={handleConfirm} disabled={loading}>
                  {loading ? <> Deleting...   <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></> : saveButtonLabel} <i className="fi fi-sr-trash-xmark"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
