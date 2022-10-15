import React from 'react'
import ProjectCard from './ProjectCard'
import EnvironmentApp from '../../Assets/EnvironmentApp.png'
import Lernx from '../../Assets/Lernx.png'
import NewsDaily from '../../Assets/NewsDaily.png'
import Qualido from '../../Assets/Qualido.png'
import RunnerDrop from '../../Assets/RunnerDrop.png'
import Calculator from '../../Assets/Calculator.png'
import TextUtils from '../../Assets/TextUtils.png'
import VideoPlaylist from '../../Assets/VideoPlaylist.png'
import InteractiveCard from '../../Assets/InteractiveCard.png'
import NextcallerWeb from '../../Assets/NextcallerWeb.png'
import Fincoin from '../../Assets/Fincoin.png'
import NavPic from '../../Assets/NavPic.png'
import Clock from '../../Assets/Clock.png'
import SignInPic from '../../Assets/SignInPic.png'
import Footer from "../Footer/Footer";

export default function ProjectPage() {
  return (
    <>
      <div className="container">
        <div className="row project_row">
        <h1  style={{color:"#50d890" }} className="text-center">My projects</h1>  
          <div className="col-lg-4 col-sm-6 my-3 project_card_box"> <ProjectCard description="An e-commerce website to deliver quality products at your door. " githubUrl="" url="https://qualido.in" title="Qualido" image={Qualido}/>  </div>
          <div className="col-lg-4 col-sm-6 my-3 project_card_box"> <ProjectCard description="Contributed in both F/E & B/E in this project. "  githubUrl="https://github.com/gdscnitp/Environmental-Awareness-App" url="https://environmental-awareness-app.vercel.app" title="Environment App" image={EnvironmentApp}/>  </div>
          <div className="col-lg-4 col-sm-6 my-3 project_card_box"> <ProjectCard description="A text editor app to make changes with your text. "  githubUrl="https://github.com/Vivek3072/TextUtils" url="https://textutility-app.herokuapp.com" title="TextUtils" image={TextUtils}/>  </div>
          <div className="col-lg-4 col-sm-6 my-3 project_card_box"> <ProjectCard description="A video player app , can be used for any online tutorial/course playlist website" githubUrl="https://github.com/Vivek3072/Video-playlist-app" url="https://video-playlist-app.netlify.app/" title="Video Playlist" image={VideoPlaylist}/>  </div>
          <div className="col-lg-4 col-sm-6 my-3 project_card_box"> <ProjectCard description="A beautiful credit card where you can fill and see card details. "  githubUrl="https://github.com/Vivek3072/Interactive-card-form" url="https://interactive-form-cards.netlify.app/" title="Interactive Card" image={InteractiveCard}/>  </div>
          <div className="col-lg-4 col-sm-6 my-3 project_card_box"> <ProjectCard description="Created this website under internship at lernx." githubUrl="" url="https://lernx.io/" title="Lernx" image={Lernx}/>  </div>
          <div className="col-lg-4 col-sm-6 my-3 project_card_box"> <ProjectCard description="Nextcaller's official website build with namecheap website builder. " githubUrl="" url="https://nextcaller.ai/" title="Nextcaller" image={NextcallerWeb}/>  </div>
          <div className="col-lg-4 col-sm-6 my-3 project_card_box"> <ProjectCard description=" A simple fun game with a good message to save water. " githubUrl="https://github.com/Vivek3072/Runner-Drop" url="https://runner-drop.herokuapp.com/" title="RunnerDrop" image={RunnerDrop}/>  </div>
          <div className="col-lg-4 col-sm-6 my-3 project_card_box"> <ProjectCard description=" A news app which fetchs data from NEWSAPI. "  githubUrl="https://github.com/Vivek3072/NewsDaily" url="" title="NewsDaily" image={NewsDaily}/>  </div>
          <div className="col-lg-4 col-sm-6 my-3 project_card_box"> <ProjectCard description="Web-App that deals with cryptos & their trade."  githubUrl="https://github.com/Vivek3072/Fincoin-Website" url="" title="Fincoin" image={Fincoin}/>  </div>
          <div className="col-lg-4 col-sm-6 my-3 project_card_box"> <ProjectCard description=" A simple calculator with awesome design theme. "  githubUrl="https://github.com/Vivek3072/Calculator" url="" title="Calculator" image={Calculator}/>  </div>
          <div className="col-lg-4 col-sm-6 my-3 project_card_box"> <ProjectCard description="A clock for you to see time in a beautiful way.  "  githubUrl="https://github.com/Vivek3072" url="" title=" Clock" image={Clock}/>  </div>
          <div className="col-lg-4 col-sm-6 my-3 project_card_box"> <ProjectCard description=" A responsive navbar made using html & css. "  githubUrl="https://github.com/Vivek3072/Responsive-Navbar" url="" title=" Navbar" image={NavPic}/>  </div>
          <div className="col-lg-4 col-sm-6 my-3 project_card_box"> <ProjectCard description=" An app with cool login/signup page design. " githubUrl="https://github.com/Vivek3072/" url="" title=" SignIn/Up" image={SignInPic}/>  </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
