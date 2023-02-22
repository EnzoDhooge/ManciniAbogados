import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <p>
        © 2022, Estudio Jurídico Mancini Abogados, construido y diseñado por{" "}
        <a href="https://genovasite.com/">Genova</a>.
      </p>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: #333;
  align-items: center;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8vh;
  p {
    font-size: 1rem;
    margin: auto 0;
    color: #fff;
    a {
      color: #fff;
      font-weight: bold;
      text-decoration: none;
      &:hover {
        text-decoration: underline #e9c994;
        transition: 0.2s;
      }
    }
  }

  @media (max-width: 900px) {
    p {font-size: 0.9rem;}
  }

  @media (max-width: 750px) {
    p {
      width: 90%;
      text-align: center;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 500px) {
    p {
      font-size: 0.7rem;
    }
  }
`;