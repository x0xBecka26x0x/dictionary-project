import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row-3">
              {props.photos.map(function (photo, index) {
                return (
                  <div className="col-3" key={index}>
                      <img src={photo.src.landscape} alt="pictures" />
                  </div>
              );
            })}
           </div>
      </section>
    );
  } else {
    return null;
  }
}