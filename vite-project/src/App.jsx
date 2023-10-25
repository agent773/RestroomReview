import { useState } from 'react'
import './App.css';
import Navbar from './Navbar';
import Article1 from './Article1';
import BasicExample from './BasicExample';
import bathroom_image from './assets/bathroom.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './qoute.css';
import './mainstory.css';
import Article2 from './Article2';
import map from './assets/map.jpg';
import mental from './assets/mentalhealth.jpg';
import lady from './assets/coollady.png';

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
    <a href="/article1"><div className='image'>
    <img className= 'imger' src={bathroom_image} />
    </div>
    </a>
    <div className='grider'>
    <div className='newtag'>NEW</div>
    <a href="/article1"> <div className='titlee'>2023 RANKINGS ARE IN!</div></a>
    <br/>
    <div className='blurb'>Move over Michelin stars, it's time for the porcelain throne parade! In a world where toilet paper quality matters as much as Michelin-starred cuisine, Berkeley's restrooms have emerged as the unsung heroes of the city. From the 'Squeaky Clean Sanctuaries' to the 'Eccentric Flush Galore,' this year's restroom review rankings promise to unveil the most hilarious and eyebrow-raising toilet tales ever witnessed. Get ready for a whirlwind of quirkiness, splashes of surprise, and of course, a whole lot of 'sit'-com-worthy moments that will leave you chuckling on the edge of your toilet seat!</div>
  
  </div>
</div>

<div className='sidestorys'>
  <a href="https://www.buzzfeed.com/parth773/what-berkeley-bathroom-are-you-9hdv8lzo2w?utm_source=dynamic&utm_campaign=bfsharecopy">
  <div className='sidestory1'>
    <div>
      <div className='sidecontent'>
        <div className='type'>Quiz</div>
      <p className='title1'>Which bathroom are you? Dwinelle
basement, you fucking perv.</p>
        
        </div>
    </div>
    <div className='placer'> 
    <img className= 'imger1' src={lady} />
    </div>
  </div>
  </a>
  <a href="/article2">
  <div className='sidestory'>
    <div>
      <div className='sidecontent'>
        <div className='type'>Health</div>
      <p className='title1'> Mental health realted to colon health? The answer will make you shit your pants. </p>
        
        </div>
    </div>
    <div className='placer'>     <img className= 'imger1' src={mental} /> </div>
  </div>
  </a>
  <a href="https://cal-admin.maps.arcgis.com/apps/instant/sidebar/index.html?appid=7607a3f9594447ce9b77b251abb1a3f5">
  <div className='sidestory'>
    <div>
      <div className='sidecontent'>
        <div className='type'>Map</div>
      <p className='title1'>Don't where the closest porcelain throne is? Here's a map of all of them. </p>
        </div>
    </div>

    <div className='placer'> 
    <img className= 'imger1' src={map} />
    </div>
  </div>
  </a>
</div>
<footer>
© Berkeley R.R.
</footer>
  </>
  },
  
  {
    path: "/article1",
    element: <Article1 />
  },

  {
    path: "/article2",
    element: <Article2 />
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
