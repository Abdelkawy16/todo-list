"use client";

import { useState } from "react";
import Backdrop from "./backdrop";
import Modal from "./modal";

export default function Todo(props: props) {
  const [modelIsOpen, setModelIsOpen] = useState(false); //array destructuring

  function handleDelete(): void {
    setModelIsOpen(true);
  }

  function closeModalHandler(): void {
    setModelIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.title ? props.title : "Title"}</h2>
      <h4>{props.info ? props.info : "No info!"}</h4>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {modelIsOpen && <Modal onCancel={()=> setModelIsOpen(false)} onConfirm={()=> setModelIsOpen(true)} title={props.title} /> }
      {modelIsOpen && <Backdrop onCancel={closeModalHandler} /> }
    </div>
  );
}

type props = {
  title: string;
  info?: string;
};
