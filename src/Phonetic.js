import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      console.log(props.phonetic);
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}