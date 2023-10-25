import { useState } from 'react'
import './App.css';
import './ArticleStyles.css'
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './qoute.css';

import bathroom_image from './assets/bathroom.jpg'
import mental from './assets/mentalhealth.jpg'
import map from './assets/map.jpg'
import lady from './assets/coollady.png'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar className="navbar" />
    <div className='qoute'>
      Your source for the crap that matters.
    </div>
    <div className='container'>
      <div className='article'>
        <div className='title'>
          Colon and Mental Health realated??
        </div>
        <div className='image_box'>
          <img className='header_image' src={mental}/>
        </div>
        <div className='caption'>
          trying to hold it in before i get home
        </div>
        <br/>
        <div className='text'>
          <p>
          In a world where thoughts are as twisted as our intestines, the fascinating saga of mental health and colon health emerges as the ultimate odd couple of the healthcare world. Picture this: your brain is hosting a never-ending stand-up comedy show while your colon is demanding a strict "no entry" policy. Who would have thought that these two could ever be entangled in a tumultuous tango of wellness? Welcome to the circus, folks!
</p>

<h2>The Gut-Brain Axis: Where Drama Meets Digestion</h2>

<p>Imagine your gut as a bustling train station, and your brain as the quirky station master, constantly trying to manage the chaos. According to the "Gut-Brain Axis Chronicles," a popular mockumentary series, "the gut and the brain communicate like two bickering siblings, with one always trying to outdo the other in causing trouble. If the gut is feeling cranky, you can bet your brain is having a meltdown too, and vice versa!"</p>

<h2>Stress: The Uninvited Party Crasher</h2>

<p>Ah, stress, the ultimate uninvited guest at the gut-brain party. It's like that one neighbor who always shows up unannounced and overstays their welcome. One renowned gastro-comedian, Dr. Gassy McLaughalot, explains, "Stress is like the grumpy old neighbor who bangs on the wall when your gut's trying to sleep. It disrupts your precious gut flora like an over-enthusiastic gardener on a rampage, leaving your colon feeling as chaotic as a demolition site."</p>

<h2>Diet and Digestion: The Epic Battle for Supremacy</h2>

<p>Let's not forget the war between what you eat and how it greets your gut. The "Colon Chronicles" reveal that your diet plays a role in determining the mood of your colon. A renowned nutrition prankster, Chef Fibrous von Probiotic, warns, "Feed your colon junk, and it'll throw a tantrum like a toddler denied candy. But treat it to some fibrous delight and watch it do the happy dance like nobody's watching."</p>

<h2>Therapeutic Laughter and the Poo-rific Effect</h2>

<p>In the realm of mental health and colon health, laughter reigns supreme. The "Happy Colon Handbook" swears by the power of therapeutic laughter, suggesting that a hearty chuckle is the best colon workout. "If your gut could talk, it'd thank you for every giggle that eases the tension. A good laugh is like a spa day for your colon, leaving it as relieved as a person finding a restroom after holding it for hours!"

In this topsy-turvy world of mental health and colon health, one thing is for certain: they may be an odd duo, but they sure know how to keep us entertained on this wild ride called life. So here's to our resilient brains and our hardworking colons — may they continue to collaborate, commiserate, and keep us laughing all the way to the bathroom!</p>
          <br/> <hr style={{color: '#2D3577', height: '3px', backgroundColor: '#2D3577', opacity: '90%'}}/> <br/> <br/>

        </div>
      </div>
      <div className='recommended'>
        <a href="/article1">
        <div className='recArticle' id='rec1'>
        <div className='title1'>
          <div className='side_type'> Rankings </div>
          Bathroom Rankings 2023!
        </div>
        <div><img className='im' src={bathroom_image}/></div>
        </div>
        </a>

        <a href="https://www.buzzfeed.com/parth773/what-berkeley-bathroom-are-you-9hdv8lzo2w?utm_source=dynamic&utm_campaign=bfsharecopy" target='_blank'>
        <div className='recArticle' id='rec1'>
        <div className='title1'>
          <div className='side_type'> Quiz </div>
          Which UC Berkeley Bathroom are You?
        </div>
        <div><img className='im' src={lady}/></div>
        </div>
        </a>

        <a href="https://cal-admin.maps.arcgis.com/apps/instant/sidebar/index.html?appid=7607a3f9594447ce9b77b251abb1a3f5" target='_blank'>
        <div className='recArticle' id='rec1'>
        <div className='title1'>
          <div className='side_type'> Local Affairs </div>
          Don't Know Where to Go? We got you!
        </div>
        <div><img className='im' src={map}/></div>
        </div>
        </a>
      </div>
    </div>
    <footer> <div className='margin_text'> © Berkeley R.R. </div> </footer>
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
