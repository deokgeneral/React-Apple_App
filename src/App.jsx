import styled from 'styled-components'
import './App.css'
import Nav from './componets/Nav'
import Banner from './componets/Banner';
import Row from './componets/Row';
import requests from './api/requests';

function App() {

  return (
    <Container>
    <Nav />
    <Banner />
    <Row title="Trending Now" id="TN" fechUrl={requests.fetchTrending}/>
    <Row title="TOP Rated" id="TR" fechUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" id="AM" fechUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" id="CM" fechUrl={requests.fetchComedyMovies}/>
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
