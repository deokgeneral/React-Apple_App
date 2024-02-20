import styled from 'styled-components'
import './App.css'
import Nav from './componets/Nav'
import Banner from './componets/Banner';

function App() {

  return (
    <Container>
    <Nav />
    <Banner />
    </Container>
  )
}

const Container = styled.main`
  position : relative;
  display: block;
  top: 70px;
  padding : 0 clac(3.5vw + 5px);
`;

export default App
