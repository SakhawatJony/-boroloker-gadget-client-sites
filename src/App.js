
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App m-10">
     
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>

      <h1 className='text-2xl text-info m-2'>Kaj korte korte sobaik Delete maro miha </h1>

      <button class="btn btn-primary mt-5">Delete Maro</button>
    </div>
  );
}

export default App;
