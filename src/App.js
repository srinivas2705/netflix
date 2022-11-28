import './App.css';
import Header from "./components/header.js";
import Banner from './components/banner';
import Popular from "./components/popular";
function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Popular/>
    </div>
  );
}

export default App;
