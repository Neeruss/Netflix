import './App.css';
import Bnner from './components/Bnner';
import Row from './components/Row';
import requests from './requests';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Bnner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row isPresent={true} title="NetflixOriginals" fetchurl={requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchurl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchurl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
