import React from 'react';
import logoImg from '../../assets/images/img1.png';
import "./styles.css"

export class Navbar extends React.Component {
  render(){
    return (
      <header>
      <nav id="navbar">
        <div className="nav-brand">
          <img src={logoImg} alt="" />
          <h1>Space Flight News</h1>
        </div>

        <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/">Trendign</a></li>
        <li><a href="/">Categories</a></li>
        <li><a href="/">Abouts us</a></li>
        <li><a href="/">Home</a></li>
        </ul>
      </nav>
    </header>
    )
  }
}

export default Navbar;