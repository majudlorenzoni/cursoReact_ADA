import React from "react";
import articleImg from "../../assets/images/xmen.png";
import "./styles.css";

export class Article extends React.Component {
  render() {
    return (
      <article id="article">
        <img src={articleImg} alt="" />
          <div className="article-infos">
            <h2>Designing Dashboards</h2>
            <h3>Article Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus totam ipsam perferendis excepturi quidem impedit quas mollitia magnam, voluptatem vel provident nostrum, quis eius eaque eligendi modi voluptatum doloremque molestiae.
            </p>
          </div>
      </article>
    );
  }
}