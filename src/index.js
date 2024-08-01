import "./styles.css";
import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return (
    <div className="card">
      <Photo />
      <div className="data">
        <Description />
        <SkillList />
      </div>
    </div>
  );
}
function Photo() {
  return <img className="avatar" src="my.jpg" alt="yekta" />;
}
function Description() {
  return (
    <div>
      <h1>Yekta Besharaty</h1>
      <p>
        Gaining skills and experience to become a front-end programmer and
        computer student
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👶" color="#FF8C9E" />
      <Skill skill="HTML+CSS" emoji="💪" color="#DC0083" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="bootstrap" emoji="💪" color="#3DC2EC" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ background: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
