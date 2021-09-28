import styled from "styled-components";

const FooterStyle = styled.p`
  font-size: 0.9rem;
  bottom: 0px;
  position: absolute;
  color: #222323;
  background-color: #ebeced;
  width: 100%;
  text-align: center;
  margin-bottom: 0;
  padding: 5px 0 5px 0;
`;

const AnchorStyle = styled.a`
  text-decoration: none;
  color: #222323;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterStyle>
      {" "}
      Creado por el votante
      <AnchorStyle
        href="https://twitter.com/icarde64"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        @icarde64 🗳️
      </AnchorStyle>
    </FooterStyle>
  );
};

export default Footer;
