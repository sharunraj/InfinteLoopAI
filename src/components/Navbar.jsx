import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components'
const Navbar = () => {
  return (
    <NAVBAR>
      <nav>
        <ul>
          <li><Link activeClass="active" spy={true} smooth={true} offset={50} duration={500} to="">InfiniteLoop AI</Link></li>
          <li className='right'><Link activeClass="active" spy={true} smooth={true} offset={50} duration={500} to="contact">Contact</Link></li>
          <li className='right'><Link activeClass="active" spy={true} smooth={true} offset={-50} duration={500} to="ourservices">Our Services</Link></li>
        </ul>
      </nav>
    </NAVBAR>
  );
};
const NAVBAR = styled.nav`
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100vw;
  padding-left: 5rem;
  padding-top;2rem;
  padding-right: 5rem;
  overflow: hidden;
  font-size: 1.4rem;
  margin-left:-1rem;
  margin-right:-1rem;
  font-family: 'Share Tech Mono', monospace;
}

li {
  float: left;

}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  border-radius: 5rem;
}
        li:hover{
            cursor:pointer;
        }
.right{
  float: right;
}

`;

export default Navbar;