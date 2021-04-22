import classes from './About.module.css';
import PageHeader from './../PageHeader/PageHeader';
// import Me from './../img/';



const About = () => {
    return (
        <div className={classes.AboutMe}>
            <PageHeader title={'About Me'}/>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello my name is Glynis</h2>
                    <p>As a Family Nurse Practitioner, I have witnessed many changes in the medical field.  The biggest change has been the advent of computer medical record keeping.   For this reason, I chose to expand my knowledge of computers and programming.  I'm planning use this knowledge as I return to the medical field.      Thank you for checking out my website, it is a work in progress. Please come back later for updates.     </p>
                </div>
            {/* <div className={classes.Photo}>
            <img className={classes.Me} src={me} alt="me"></img> */}
            </div>
            </div>
       
      

    );
}

export default About;
