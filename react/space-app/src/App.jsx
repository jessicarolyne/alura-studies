import { styled } from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"
import Header from "./components/header"

const FundoGradiente = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
    img {
      width: 212px;
    }
`

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Header />
    </FundoGradiente>
  )
}

export default App
