import './App.css';
import {Home} from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header style={{display:"flex",flexDirection:"column",justifyContent:'space-between',position:'absolute',width:"100%"}}>
        <Header style={{position:"fixed"}}/>
        <Home/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
// how to fix the header position at top
// Add routing so that when you click on 