import './App.scss'
import Navbar from './components/Navbar'
import OurlistComponent from './components/OurList';
import HeaderComponenet from './components/Header';
function Home() {
  return (
    <div className="Home">
      <> 
        <Navbar></Navbar>
        <HeaderComponenet></HeaderComponenet>
      </>
    </div>
  );
}

export default Home;
