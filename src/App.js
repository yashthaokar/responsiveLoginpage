import './App.css';
import Email from "./components/Email"

function App() {
return (
<div className="App">
  <div class="main_container">
    <div class="img">
    </div>
    <div class="form">
      <p class="title">Welcome</p>
      <p class="heading">Login In Your Account To Continue</p> <br />
      <Email />
      <section className="icons">
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-twitter"></i>
      </section>

    </div>
  </div>

</div>
);
}

export default App;