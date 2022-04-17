import React from "react";
import "./note.css";

const Notes = () => {
  return (
    <div className="main-text-container flex flex-col">
       
    
        <input type="text" placeholder="Title" className="text-input" />

        <textarea placeholder="Take a note" className="text-area" row="4" column="50"></textarea>

        <section className="text-footer flex">
          <button className="btn">Add</button>
        </section>
      
    </div>

 

  );
};

export { Notes };
