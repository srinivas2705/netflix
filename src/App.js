import './App.css';
import Header from "./components/header.js";
import Banner from './components/banner.js';
import Popular from "./components/popular.js";
import Nowplaying from './components/nowplaying.js';
import Toprated from './components/toprated';
import Upcoming from './components/upcoming';
function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Popular/>
     <Nowplaying/>
     <Toprated/>
     <Upcoming/>
    </div>
  );
}

export default App;
