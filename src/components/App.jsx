import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import "./styles.css";

import { Modal} from 'rsuite';



let interval = undefined;


export function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => { setOpen(true); };
  const handleClose = () => setOpen(false);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }
  }, [running]);

  

  useEffect(() => {
    if (progress === 100) {
      setRunning(false);
      clearInterval(interval);

      handleOpen();
    }
  }, [progress]);

  return (
    <div className="App">
      <ProgressBar name="22" progress={progress} />
      <button className="btn"
        onClick={() => {
          setRunning(false);
          setProgress(0);
        }}
      >
        
      </button>
      <button className="3333" onClick={() => setRunning(!running)}>
        {running ? "Секундочку" : "Сделать, что бы всё было хорошо"}
      </button>
      <Modal open={open} onClose={handleClose}>
        <div className="wrap">
          <p className="text">Теперь всё не просто хорошо, всё охуенно!</p>
          </div>
      </Modal>
    </div>
    
  );
}