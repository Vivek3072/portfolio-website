import React from 'react'
import './Timeline.css'

export default function Timeline() {
  return (
    <>
    <div className="timeline_container container">

  <div className="rb-container">
    <ul className="rb">
      <li className=" rb_item" >
        <div className="timestamp">
          Co-Founder, Qualido
        </div>
        <p className='working_duration'>July 2021 - Present | 4 months</p>
        <div className=" item_title">An e-commerce business , currently
aiming at selling books much cheaper.</div>

      </li>
      <li className=" rb_item" >
        <div className="timestamp">
          Head of Design , nextcaller
        </div>
        <p className='working_duration'>Dec 2021 - Present | 11 months</p>
        <div className=" item_title"> Designed Greedy Rocket and nextcaller app's complete UI.</div>

      </li>

      <li className=" rb_item" >
        <div className="timestamp">
          Web-Developer , LernX
        </div>
        <p className='working_duration'>Jan 2022 - Mar 2022 | 3 months</p>
        <div className=" item_title"> Designed and developed company's website.</div>

      </li>
      <li className=" rb_item">
        <div className="timestamp">
        Web-Developer , GDSC NIT-P
        </div>
        <p className='working_duration'>Nov 2021 - Apr 2022  | 6 months</p>
        <div className=" item_title"> Contributed in F/E and B/E of enivronmental awareness app .</div>

      </li>

      <li className=" rb_item">
        <div className="timestamp">
        UI/UX Designer , Hackslash NIT-P
        </div>
        <p className='working_duration'>Mar 2021 - Dec 2021  | 10 months</p>
        <div className=" item_title"> Designed many apps and websites UI under hackslash using Figma.</div>

      </li>

    </ul>

</div>
</div>

    </>
  )
}
