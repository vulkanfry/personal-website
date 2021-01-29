import React, { Component } from "react";
import Article from "../elements/Article";
import _ from 'lodash';
import moment from 'moment';

class OSS extends Component {
  constructor(props) {
    super();
    this.state = { articles: [] };
  }

  langToSymbol = (lang) => {
    return {
      JavaScript: 'JS',
      Ruby: 'Ruby',
      Java: 'Java'
    }[lang] || lang
  }

  componentDidMount() {
    const devTo = "https://api.github.com/users/ByJIKaHkaz/repos";

    fetch(devTo)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let articles = [];
        data = _.sortBy(data, [function(o) { return moment(o.created_at); }]).slice(data.length, -4);
        data.forEach((element, index) => {
          articles.push(
            <div className="column" key={index}>
              <Article
                key={index}
                title={element.full_name}
                url={element.html_url}
                license={element.license}
                language={this.langToSymbol(element.language)}
                extract={element.description}
              />
            </div>
          );
        });
        var offset = 4 - data.length;
        for (var i = 0; i < offset; i++) {
          articles.push(<div className="column"></div>);
        }
        this.setState({ articles: articles });
      });
  }

  render() {
    return (
      <section className="section" id="oss">
        <div className="container">
          <h1 className="title">OSS</h1>
          <h2 className="subtitle is-4">My latest OSS</h2>
          <div className="columns">{this.state.articles}</div>
        </div>
      </section>
    );
  }
}

export default OSS;
