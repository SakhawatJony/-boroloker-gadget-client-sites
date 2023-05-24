
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Pages/Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className='overflow-hidden'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
     
     
    </div>
  );
}

export default App;
