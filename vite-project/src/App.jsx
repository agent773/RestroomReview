import { useState } from 'react'
import './App.css';
import Navbar from './Navbar';
import Article1 from './Article1';
import BasicExample from './BasicExample';
import 'bootstrap/dist/css/bootstrap.min.css';
import './qoute.css';
import './mainstory.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
  path: "/",
  element: 
  <>
  <Navbar className="navbar" />
  <div className='qoute'>
    Your source for the crap that matters.
  </div>

  <div className='mainstory'>
    <div className='image'>
    <img className= 'imger' src="https://via.placeholder.com/1080x720" />
    </div>
    <div className='grider'>
    <div className='newtag'>NEW</div>
      <div className='title'>MENTAL HEALTH REALTED TO COLON HEALTH?</div>
        <div className='blurb'>Betty</div>
  
  </div>
</div>

<div className='sidestorys'>
  <div className='sidestory1'>
    <div>
      <div className='sidecontent'>
        <div className='type'>Quiz</div>
      <p className='title1'>Which bathroom are you? Dwinelle
basement, you fucking perv.</p>
        
        </div>
    </div>
    <div className='placer'> 
    <img className= 'imger1' src="https://via.placeholder.com/1080x720" />
    </div>
  </div>
  <div className='sidestory'>
    <div>
      <div className='sidecontent'>
        <div className='type'>Home</div>
      <p className='title1'>“Just like home!” How to decorate your  bathroom just like Wheeler</p>
        
        </div>
    </div>
    <div className='placer'>     <img className= 'imger1' src="https://via.placeholder.com/1080x720" /> </div>
  </div>
  <div className='sidestory'>
    <div>
      <div className='sidecontent'>
        <div className='type'>Lifestyle</div>
      <p className='title1'>Too busy to work out? How to sneak a quick one in during B.T.</p>
        </div>
    </div>

    <div className='placer'> 
    <img className= 'imger1' src="https://via.placeholder.com/1080x720" />
    </div>
  </div>
</div>
<footer>
© Berkeley RR
</footer>
  </>
  },
  
  {
    path: "/article1",
    element: <Article1 />
  },

  {
    path: "/article2",
    element: <Article1 />
  },
]);

function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <>
    <RouterProvider router={router} />
    </>

    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
