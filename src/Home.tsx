import './App.scss'
import Navbar from './components/Navbar'
import OurlistComponent from './components/OurList';
function Home() {
  return (
    <div className="Home">
      <> 
        <Navbar></Navbar>
        <OurlistComponent></OurlistComponent>
      </>
    </div>
  );
}

export default Home;
