import React from 'react'
import { RouterProvider } from 'react-router-dom';
import Footer from './components/Footer';
import router from './Routes';




function App() {
  
  return <div>
          <RouterProvider router={router}></RouterProvider>
          <Footer></Footer>
    </div>
  
}
  

export default App;
