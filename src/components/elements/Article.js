import React from "react";

function Article(props) {
  return (
    <div className="card">
      <div className="card-header">
        <a href={props.url} target="blank">
          <p className="card-header-title">{props.title}</p>
        </a>
        <a
          href={props.url}
          target="blank"
          className="card-header-icon"
          aria-label="GitHub"
        >
          <span className="icon">
            <i className="fab fa-2x fa-github"></i>
          </span>
        </a>
      </div>
      <div className="card-content">
        <div className="tags has-addons">
          <span className="tag is-link">GitHub</span><span className="tag"><span className="icon has-text-success"><i className="fab fa-github"></i></span></span>
        </div>
        {props.license ? <div className="tags has-addons">
          <span className="tag is-link">{(props.license || {}).name}</span><span className="tag"><span className="icon has-text-success"><i className="fab fa-mit"></i></span></span>
        </div>
          : null
        }
        <div className="content">
          <p>{props.extract}</p>
        </div>
        <a href={props.url} target="blank">
          Open
        </a>
      </div>
    </div>
  );
}

export default Article;
