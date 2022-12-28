import React, { useState } from 'react';
import './style.css';
import { Popup } from './Popup';
import Login from './Login';

export default function App() {
  const [open, setOpen] = useState();

  return (
    <div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Show modal
      </button>
      <Popup open={open} setOpen={setOpen}>
        <Login />
      </Popup>
    </div>
  );
}
