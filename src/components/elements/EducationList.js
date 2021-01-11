import React from "react";

function EducationList(props) {
  const skills = props.skills;
  return buildSkills(skills);
};

const messageItem = (message, k) => {
  return (
    <article key={k} className="message is-success">
      <div className="message-body"><div dangerouslySetInnerHTML={createMarkup(message)}></div></div>
    </article>
  );
};

function createMarkup(m) {
  return {__html: m};
};

function buildSkills(skills) {
  return skills.map((item, key) => {
    const courses = item.courses;
    return <div key={key}>
      {messageItem(`Studied at the <b>${item.institution}</b> from <b>${item.startDate}</b> to <b>${item.endDate}</b> in the direction of <b>${item.area}</b>, receiving a <b>${item.studyType}'s</b> degree.`)}
      {item.alsoDesc.map((desc, descKey) => messageItem(desc, descKey))}
      <div id="meta" className="field is-grouped is-grouped-multiline">
        {
          courses.map((i, k) => 
          <div key={k}  className="control">
            <div className="tags has-addons"><span className="tag">{i.key}</span><span className="tag"><span className="icon has-text-success">
              <i className="fas fa-check-circle"></i>
            </span></span></div>
          </div>)
        }
      </div>
    </div>
  })
}

export default EducationList;
