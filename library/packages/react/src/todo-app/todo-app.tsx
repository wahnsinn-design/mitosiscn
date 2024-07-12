"use client";
import * as React from "react";
import { useState } from "react";

function TodoApp(props: any) {
  const [list, setList] = useState(() => ["hello", "world"]);

  const [newItemName, setNewItemName] = useState(() => "");

  function addItem() {
    if (!newItemName) {
      return;
    }
    setList([...list, newItemName]);
  }

  function deleteItem(idx: number) {
    setList(list.filter((x, i) => i !== idx));
  }

  return (
    <>
      <div className="div-71a7ca5e">
        <span>TO-DO list:</span>
        <div className="div-71a7ca5e-2">
          <input
            placeholder="Add a new item"
            className="input-71a7ca5e"
            value={newItemName}
            onChange={(event) => setNewItemName(event.target.value)}
          />
          <button className="button-71a7ca5e" onClick={(event) => addItem()}>
            Add
          </button>
        </div>
        <div className="div-71a7ca5e-3">
          <ul className="ul-71a7ca5e">
            {list?.map((item, idx) => (
              <li className="li-71a7ca5e" key={idx}>
                <span>{item}</span>
                <button
                  className="button-71a7ca5e-2"
                  onClick={(event) => {
                    deleteItem(idx);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`.div-71a7ca5e {
  padding: 10px;
  max-width: 700px;
}.div-71a7ca5e-2 {
  display: flex;
  width: 100%;
  gap: 16px;
  align-items: stretch;
}.input-71a7ca5e {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  flex-grow: 1;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}.button-71a7ca5e {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  font-weight: 700;
  color: #ffffff;
  background-color: #3B82F6;
  cursor: pointer;
}.div-71a7ca5e-3 {
  margin-top: 1rem;
}.ul-71a7ca5e {
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: unset;
  padding: unset;
}.li-71a7ca5e {
  display: flex;
  padding: 0.625rem;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #E5E7EB;
  gap: 16px;
}.button-71a7ca5e-2 {
  cursor: pointer;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  color: #ffffff;
  background-color: #EF4444;
}`}</style>
    </>
  );
}

export default TodoApp;
