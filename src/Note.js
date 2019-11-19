import React from "react";
import { Link } from "react-router-dom";
// import format from "date-fns/format";
import * as moment from "moment";

export default function Note(props) {
  return (
    <div className="note-item">
      <h2 className="note-title">
        <Link to={`/note/${props.id}`}>{props.name}</Link>
      </h2>
      <button className="delete-note-btn" type="button">
        {""}
        Remove
      </button>
      <div className="note-date-mod">
        modified
        {""}
        <span className="date">
          {moment().format(props.modified, "Do MMM YYYY")}
        </span>
      </div>
    </div>
  );
}
