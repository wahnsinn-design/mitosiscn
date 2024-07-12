"use client";
import * as React from "react";
import { useState, useEffect } from "react";

export type Props = {
  getValues?: (input: string) => Promise<any[]>;
  renderChild?: any;
  transformData?: (item) => string;
};

function AutoComplete(props: Props) {
  const [showSuggestions, setShowSuggestions] = useState(() => false);

  const [suggestions, setSuggestions] = useState(() => []);

  const [inputVal, setInputVal] = useState(() => "");

  function setInputValue(value: string) {
    setInputVal(value);
  }

  function handleClick(item) {
    setInputValue(transform(item));
    setShowSuggestions(false);
  }

  function fetchVals(city: string) {
    if (props.getValues) {
      return props.getValues(city);
    }
    return fetch(
      `http://universities.hipolabs.com/search?name=${city}&country=united+states`
    ).then((x) => x.json());
  }

  function transform(x) {
    return props.transformData ? props.transformData(x) : x.name;
  }

  useEffect(() => {
    fetchVals(inputVal).then((newVals) => {
      if (!newVals?.filter) {
        console.error("Invalid response from getValues:", newVals);
        return;
      }
      setSuggestions(
        newVals.filter((data) =>
          transform(data).toLowerCase().includes(inputVal.toLowerCase())
        )
      );
    });
  }, [inputVal, props.getValues]);

  return (
    <>
      <div className="div-67e32226">
        Autocomplete:
        <div className="div-67e32226-2">
          <input
            placeholder="Search for a U.S. university"
            className="input-67e32226"
            value={inputVal}
            onChange={(event) => setInputVal(event.target.value)}
            onFocus={(event) => setShowSuggestions(true)}
          />
          <button
            className="button-67e32226"
            onClick={(event) => {
              setInputVal("");
              setShowSuggestions(false);
            }}
          >
            X
          </button>
        </div>
        {suggestions.length > 0 && showSuggestions ? (
          <ul className="ul-67e32226">
            {suggestions?.map((item, idx) => (
              <li
                className="li-67e32226"
                key={idx}
                onClick={(event) => handleClick(item)}
              >
                {props.renderChild ? (
                  <props.renderChild item={item} />
                ) : (
                  <span>{transform(item)}</span>
                )}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <style>{`.div-67e32226 {
  padding: 10px;
  max-width: 700px;
}.div-67e32226-2 {
  position: relative;
  display: flex;
  gap: 16px;
  align-items: stretch;
}.input-67e32226 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #000000;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}.button-67e32226 {
  cursor: pointer;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  color: #ffffff;
  background-color: #EF4444;
}.ul-67e32226 {
  border-radius: 0.25rem;
  height: 10rem;
  margin: unset;
  padding: unset;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}.li-67e32226 {
  display: flex;
  padding: 0.5rem;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #E5E7EB;
  cursor: pointer;
}.li-67e32226:hover {
  background-color: #F3F4F6;
}`}</style>
    </>
  );
}

export default AutoComplete;
