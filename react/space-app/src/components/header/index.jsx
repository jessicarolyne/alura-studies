import styled from "styled-components";
import inputText from "../inputText";

const headerEstilizado = styled.header`
 padding : 60px 0;
 display: flex;
 justify-content: space-between;
`
const Header = () => {
  return(
    <headerEstilizado>
      <img src="/imagens/logo.png" alt="Logo" />
      <inputText />
    </headerEstilizado>
  )
}
export default Header;