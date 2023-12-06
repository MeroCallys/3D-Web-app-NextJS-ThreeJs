import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30vh;
  background-color: #f6ebff;
  border: 1px dashed #e0d5e9;
`;

function footer() {
  return (
    <Footer>
      <h2>THIS IS THE FOOTER</h2>
    </Footer>
  );
}

export default footer;
