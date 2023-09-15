import React from 'react';
import styled from 'styled-components'
const Footer = () => {
  return (
    <Foot>
    <footer>
      <p>&copy; 2023 Your Website. All rights reserved.</p>
    </footer>
    </Foot>
  );
};
const Foot = styled.footer`
  position: relative;
  left: 0;
  bottom: 0;
  color: black;
  text-align: center;
  background-color:#f7f7f7;
  padding: 2rem;
  margin-left:-1rem;
  margin-right:-1rem;  
`;
export default Footer;
