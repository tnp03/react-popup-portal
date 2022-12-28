import React from 'react';
import ReactDOM from 'react-dom';
import './popup.css';

export function Popup({ open, setOpen, children }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={() => {
          setOpen(false);
        }}
        className="overlay"
      ></div>
      <div className="modal-container">
        <div className="header">
          <h3>Title</h3>
          <span
            onClick={() => {
              setOpen(false);
            }}
            className="close-button"
          >
            X
          </span>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  );
}
