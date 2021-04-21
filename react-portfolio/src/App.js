import React, { Component } from react;
import './pages/assets/style.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">

          <h1>Portfolio</h1>

        <main>
          <div id="main-container" class="container">
            <section className="main-section">

              <div className="work">
                <div class="row mb-3">
                  <div className="col-md-4">
                    <img src={require(".page/assets/Project1website.png")} alt="image of website" style={{width:'100%'}}/>
          <a href="https://glynismullankwok.github.io/musiclocations/">"https://glynismullankwok.github.io/musiclocations/"</a>

                    </div>
                  </div>
                </div>
                <div className="work">
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <img src={require(".page/assets/Project2website.png")}alt="image of website" style={{width:'100%'}} />
                      <a href="https://obscure-scrubland-41344.herokuapp.com/">https://obscure-scrubland-41344.herokuapp.com/</a>

                    </div>
                  </div>
                </div>
                <div className="work">
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <img src={require(".page/assets/Notetaker.png")}alt="image of website" style={{width:'100%'}} />
                      <a href="https://sleepy-peak-16505.herokuapp.com/">https://sleepy-peak-16505.herokuapp.com/</a>

                    </div>
                  </div>
                </div>
                <div className="work">
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <img src={require(".page/assets/weather.png")} alt="image of website" style={{width:'100%'}} />
                      <a href="https://glynismullankwok.github.io/weatherdashboard/">https://glynismullankwok.github.io/weatherdashboard/</a>

                    </div>
                  </div>
                </div>
                <div className="work">
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <img src={require(".page/assets/Burger.png")}alt="image of website" style={{width:'100%'}} />
                      <a href="https://shrouded-journey-51277.herokuapp.com/">https://shrouded-journey-51277.herokuapp.com/</a>

                    </div>
                  </div>
                </div>
                <div className="work">
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <img src={require(".page/assets/quiz.png")} alt="image of website" style={{width:'100%'}}  />
                      <a href="https://glynismullankwok.github.io/codequiz/">https://glynismullankwok.github.io/codequiz/</a>

                    </div>
                  </div>
                </div>
           
</section>

</div>
</main>
</div>

      </div >
    )

  }
}
export default App;
