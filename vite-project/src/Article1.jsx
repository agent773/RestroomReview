import { useState } from 'react'
import './App.css';
import './ArticleStyles.css'
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './qoute.css';
import bathroom_image from './assets/bathroom.jpg'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar className="navbar" />
    <div className='qoute'>
      Your source for the crap that matters. ARTICLE 1
    </div>
    <div className='container'>
      <div className='article'>
        <div className='title'>
          The Five Best Bathrooms on Campus
        </div>
        <div className='image_box'>
          <img className='header_image' src={bathroom_image}/>
        </div>
        <div className='caption'>
          The secret bathroom in Dwinelle that everyone knows about but you
        </div>
        <p/> <p/> <p/> <p/> <p/> <p/> <p/>
        <div className='text'>
          <p>
            Yes, I know your dirty secret. Every time you go home, 
          </p>
          <p>
            Paragraph 2!
          </p>
        </div>
      </div>
      <div className='recommended'>
        <div className='recArticle'>
          rec article image/title go here
        </div>
        <div className='recArticle'>
          rec article image/title go here
        </div>
        <div className='recArticle'>
          rec article image/title go here
        </div>
      </div>
    </div>
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
