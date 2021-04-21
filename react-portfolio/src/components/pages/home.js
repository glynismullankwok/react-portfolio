import React from 'react';

class Home extends React.Component{
    render(){
        return(
        <div>
<main>
  <div class="container" style="background-color: cornsilk;">
    <h1>About</h1>
    <div class="row">
      <div class="col-md-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsH_dQJnbwcmuukZsr6Eg38iiUttKS69NZUQ&usqp=CAU" class="img-fluid"
          alt="medical computer" />
      </div>
      <div class="col-md-8">
        <p class="text">Northwestern University Boot Camp Student in the Full Stack Web Development course.  Experienced in HTML, CSS, JavaScript, Node, MySql, Mongo and Reactjs.</p>  
      </div> 
      <div class="col-md-8">
          <p class="font">As a Family Nurse Practitioner, I have witnessed many changes in the medical field.  The biggest change has been the advent of computer medical record keeping.   For this reason, I chose to expand my knowledge of computers and programming.  I'm planning use this knowledge as I return to the medical field.      Thank you for checking out my website, it is a work in progress. Please come back later for updates. </p>
      </div>

    </div>
 

  </div>
</main>
</div>
        );
    };

  };
export default Home;