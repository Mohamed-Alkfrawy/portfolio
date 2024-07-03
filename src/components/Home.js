import react ,{ Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode} from '@fortawesome/free-solid-svg-icons';
import {faHtml5 , faCss3Alt , faJs , faReact, faNode , faNpm , faGit, faGithub} from '@fortawesome/free-brands-svg-icons';
import PI from "../imgs/PI.png"


class Home extends Component{
    state={
        jobTitle: "Front-End Dev",
    };

jobTitleAnimation=()=>{
    let overlay = document.getElementsByClassName("overlay")[0].style;
    const jobs = ["Front-End Dev" , "React Dev" , "Hard Worker" ,"Always Updated" ,"Flexiable"];
    let i =1
    
    setInterval(()=> {
        overlay.animationName = "to-left";

        setTimeout(() => {
            this.setState({jobTitle : jobs[i]});
            i===jobs.length-1 ? i=0 : ++i ;
            overlay.animationName = "to-right";
        }, 1000);
        }, 5000);   
    }

componentDidMount(){
    this.jobTitleAnimation()
}


    render(){
        return(
        <Fragment>
            <div className='PI-container'>
                <img src={PI} alt='Img is not found' />
            </div>
            <div className='home-text-box flex'>
                <h3>Hello I'am</h3>
                <h2> MOHAMED ALKFRAWY :</h2>
                <div className='job-box'>
                    <h1 className='job-title'>
                        {this.state.jobTitle}
                        </h1>
                    <div className='overlay'>
                    </div>
                    </div>
                    <div className='icons'>
            <FontAwesomeIcon icon={faCode} />
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3Alt} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faNode} />
            <FontAwesomeIcon icon={faNpm} />
            <FontAwesomeIcon icon={faGit} />
            <FontAwesomeIcon icon={faGithub} />
                    </div>
            </div>
        </Fragment>
    )
}}

export default Home