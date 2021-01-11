import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <span className="timeline-marker is-32x32 icon has-text-success fas fa-check-circle"></span>
      <div className="timeline-content">
        <p className="heading">{props.date}</p>
        <h1 className="title is-4"><a href={props.website}>{props.company}</a></h1>
        <p style={{ maxWidth: "25em" }}>{props.summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
