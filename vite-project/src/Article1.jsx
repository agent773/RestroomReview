import { useState } from 'react'
import './App.css';
import './ArticleStyles.css'
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './qoute.css';
import bathroom_image from './assets/bathroom.jpg'

import dwinout from './assets/dwinout.jpg'
import dwinin from './assets/dwinin.jpg'

import ealin from './assets/ealin.jpg'
import ealout from './assets/ealout.jpg'

import haascrack from './assets/haascrack.jpg'
import haasout from './assets/haasout.jpg'
import haasin from './assets/haasin.jpg'

import havout from './assets/havout.jpg'
import havin from './assets/havin.jpg'

import aprout from './assets/aprout.jpg'
import aprin from './assets/aprin.jpg'

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
          The Five Best Bathrooms on Campus
        </div>
        <div className='image_box'>
          <img className='header_image' src={bathroom_image}/>
        </div>
        <div className='caption'>
          The secret bathroom in Dwinelle that everyone knows about but you
        </div>
        <br/>
        <div className='text'>
          <p>
            Yes, I know your dirty secret. Every time you go home, you relish the fact that you
            made it another day without shitting all over campus. Woopedy-<i>fucking</i>-doo, bud.
            Well, not all of us can handle that kind of pressure, so we've ran all around campus
            with Durant's finest (Taco Bell) in our hands to review the finest toilets on the street.
            You're welcome.
          </p>
          <br/> <hr style={{color: '#2D3577', height: '3px', backgroundColor: '#2D3577', opacity: '90%'}}/> <br/> <br/>

          <p>
            <div className='image_box'>
              <img className='double_image' src={havout}/>
              <img className='double_image' src={havin}/>
            </div>
            <div className='caption'> Oh hey, we actually included a nice one! </div>
            <h2> 1. Haviland Hall - Top Floor </h2>
            Ohhh shit, yeahhhh babyyyy. Those clean marble walls. The spotless, opulent throne. That rustic
            European-style pivot window. Haviland's architecture stands largely the same as when it was built,
            taking you back to a better time - and, coincidentally, before the Civil Rights Act. Take in the 
            beautiful scenery across the landscape as the 4 Top Dogs you gobbled take it out of you.
          </p>
          <br/> <hr style={{color: '#2D3577', height: '3px', backgroundColor: '#2D3577', opacity: '90%'}}/> <br/> <br/>

          <p>
            <div className='image_box'>
              <img className='double_image' src={dwinout}/>
              <img className='double_image' src={dwinin}/>
            </div>
            <div className='caption'> Freshmen, don't read any further -- it's classified. </div>
            <h2> 2. Dwinelle - Floor 2 </h2>
            Look, we know our audience. We were all there at some point: fresh out of the womb,
            still living in the units, and don't want to make a fool of ourselves by doing our 
            business in the shared bathrooms. The only solution is to hit a quickie with that
            precious, precious Berkeley time (I mean, this is what it was made for, right?) before
            your most intensive class of the week -- fighting to get a word in at R1A discussion --
            happens. 
            <br/> <br/>
            Well, we here at BRR have packaged up a sweet little deal for you here. Yes, that's right:
            a bathroom all to yourselves! The top-to-bottom doors. The patented lack-of-crack technology.
            The 1.5 working sinks on average. What's not to love!? And, the best part: if you stay here,
            the rest of us won't have to interact with you ever. Thank you for your sacrifice.
          </p>
          <br/> <hr style={{color: '#2D3577', height: '3px', backgroundColor: '#2D3577', opacity: '90%'}}/> <br/> <br/>

          <p>
            <div className='image_box'>
              <img className='double_image' src={haasout}/>
              <img className='double_image' src={haasin}/>
            </div>
            <div className='caption'> Since the rest of the building smells like shit constantly, 
              the bathroom's honestly not so bad. </div>
            <h2> 3. Haas - Library </h2>
            Being a business major is all about connection, and there's no better way to stick to the
            alpha sigma act broke stay rich Musk-pilled Gronk-pilled grindset than networking on the 
            porcelain throne. Take in gorgeous views of the dude next to you - or don't, if you want
            to get absolutely demolished in the career rat race by the rest of us...
            <br/> <br/> 
            <div className='image_box'>
              <div style={{padding: '7px'}}>
                <i> Slides a note through the door. </i> <br/>Here's my LinkedIn bro, see you at the
                pre-consulting club frat study mixer.
              </div>
              <img className='double_image' width={600} src={haascrack}/>
              
              
            </div>
            
          </p>
          <br/> <hr style={{color: '#2D3577', height: '3px', backgroundColor: '#2D3577', opacity: '90%'}}/> <br/> <br/>
          
          <p>
            <div className='image_box'>
              <img className='double_image' src={ealout}/>
              <img className='double_image' src={ealin}/>
            </div>
            <div className='caption'> Okay, this one actually kinda sucks. But no one needs to know that. </div>
            <h2> 4. East Asian Library - Top Floor </h2>
            With a total of 2.4 open seats at their tables, studiyng at drop-dead gorgeous EAL is reserved
            for those who spend more time on their aesthetic than work. Clad with $5,000 of Apple tech at any
            given point and enough boba to buy off the entirety of CoE to do their homework for them anyways,
            these fools won't be caught dead in anything but the best vibes. And, while that certainly isn't
            you - you're reading a poop article, get a grip - that does mean that there's at <i> most </i>
            1 person in a bathroom within any given hour. Climb up the prettiest stairs you've ever seen and
            ascend as you let it rip.
          </p>
          <br/> <hr style={{color: '#2D3577', height: '3px', backgroundColor: '#2D3577', opacity: '90%'}}/> <br/> <br/>

          <p>
            <div className='image_box'>
              <img className='double_image' src={aprout}/>
              <img className='double_image' src={aprin}/>
            </div>
            <div className='caption'> Let the backrooms take you. </div>
            <h2> 5. Unit 2 - APR </h2>
            Yep, we're once again catering towards our freshman audience; however, using this one's a lot 
            funnier if you aren't a freshman. Just take the walk right down the steps of mere miles-away
            U2 and follow the extremely confusing backrooms until you find yourself battered, beaten down,
            and busting at the bowels. You could also just take the walk from their weird little bitch boy
            gym, if that's your style. Really, it's weirdly publicly accessible for anyone to take the walk to.
            <br/> <br/>
            Okay, you've probably noticed us using the latest slang, <i> take the walk, </i> quite a bit.
            Fun little fact, this is the exact location that the global sensation originated from. And, yes,
            it does mean taking a fat dump in the privacy away from the gendered bathrooms of a shitty dorm.
            You gotta watch your back around these parts, the freshmen'll eat you alive.
          </p>
        </div>
      </div>
      <div className='recommended'>
        <a href="/article2">
        <div className='recArticle' id='rec1'>
        <div className='title1'>
          <div className='side_type'> Health </div>
          Colon x Mental Health: An Unlikely Collab
        </div>
        <div><img className='im' src={mental}/></div>
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
