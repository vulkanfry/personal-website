import React from "react";
import TimelineItem from "./TimelineItem";
import Resume from "../../resume.json";

const dateToString = (date) => {
  return date.toLocaleString("en-UK", {
    month: "long",
    year: "numeric"
  })
}

function Timeline() {
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">
          {new Date().getFullYear()}
        </span>
      </header>
      <div className="timeline-item">
        <div className="timeline-marker is-success"></div>
        <div className="timeline-content"></div>
      </div>
      {Resume.work
        .map(item => {
          return dateToString(new Date(item.startDate));
        })
        .map((year, i) => {
          let content = [];
          content.push(
            <header key={i} className="timeline-header">
              <span className="tag is-success">{year}</span>
            </header>
          );
          content.push(
            Resume.work
              .filter(work => dateToString(new Date(work.startDate)) === year)
              .map((item, j) => {
                return (
                  <TimelineItem
                    key={j}
                    date={dateToString((new Date(item.startDate)))}
                    company={item.company}
                    website={item.website}
                    summary={item.summary}
                  />
                );
              })
          );
          return content;
        })}
    </div>
  );
}

export default Timeline;
