import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src="/src/assets/img/nike.png" alt="logo" />
        </div>
        <ul className="navigate">
          <li>menu</li>
          <li>location</li>
          <li>about</li>
          <li>contact</li>
        </ul>
        <button>login</button>
      </div>
      <div className="middleman">
        <div className="elem">
          <h1>Your feet</h1>
          <h1>Deserve</h1>
          <h1>The Best</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            consequuntur commodi doloremque, pariatur iste incidunt odio,
            officiis eaque doloribus distinctio velit tempora beatae cupiditate
            nam culpa? Ipsa quae est necessitatibus quidem quasi, dolor itaque
            sequi amet nulla nisi totam.
          </p>
        </div>
        <div className="hero">
          <img src="/src/assets/img/shoew.png" alt="shoe" />
        </div>
      </div>
      <div class="buy">
        <div class="shop">
          <button>Shop Now</button>
          <button>category</button>
        </div>
        <div class="place">
          <p>Available now on</p>
          <img src="/src/assets/img/amazon.png" alt="amazon" />
          <img src="/src/assets/img/fkart.png" alt="flipkart" />
        </div>
      </div>
    </>
  );
}

export default App;
