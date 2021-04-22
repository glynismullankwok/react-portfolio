import classes from './Skills.css';
import PageHeader from './../PageHeader/PageHeader';
import weather from './../img/weather.png';
import Project1 from './../img/Project1website.png';
import Project2 from './../img/Project2website.png';
import quiz from './../img/quiz.png';
import Burger from './../img/Burger.png';
import Notetaker from './../img/Notetaker.png';



const Skills = () => {
    return (
        <div>
            <PageHeader title={'Skills'}/>
            <div className={classes.Container}>
                <img src={weather} alt="weather forecast project"  />
            </div>
            <div className={classes.Container}>
                <img src={Project1} alt="Project1"  />
            </div>
            <div className={classes.Container}>
                <img src={Project2} alt="Project2"  />
            </div>
            <div className={classes.Container}>
                <img src={quiz} alt="quiz project"  />
            </div>
            <div className={classes.Container}>
                <img src={Burger} alt="Burger project"  />
            </div>
            <div className={classes.Container}>
                <img src={Notetaker} alt="Notetaker project"  />
            </div>
        </div>
    );
}

export default Skills;