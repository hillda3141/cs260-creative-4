import {Link} from "react-router-dom";

const Home = () => {
  return (
      <div class="index-content-container container-lg">
          <Link class="index-option" to="/pricing">
              <div class='index-image-holder'>
                  <img src="images/calculator.png"></img>
              </div>
              <h2>Get an Instant Quote!</h2>
          </Link>
          <Link class="index-option" to="/shop">
              <div class='index-image-holder'>
                  <img src="images/shopping_cart.png"></img>
              </div>
              <h2>Place PCB or Assembly Order</h2>
          </Link>
          <Link class="index-option" to="/services">
              <div class='index-image-holder'>
                  <img src="images/robot_arm.png"></img>
              </div>
              <h2>Discover our Capabilities</h2>
          </Link>
          <Link class="index-option" to="/material">
              <div class='index-image-holder'>
                  <img src="images/material.png"></img>
              </div>
              <h2>PCB Materials and Processes</h2>
          </Link>
          <a class="index-option" href="https://www.autodesk.com/products/eagle/overview">
              <div class='index-image-holder'>
                  <img src="images/computer.png"></img>
              </div>
              <h2>Free PCB Layout Software</h2>
          </a>
          <Link class="index-option" to="/student">
              <div class='index-image-holder'>
                  <img src="images/grad_cap.png"></img>
              </div>
              <h2>Student Discount Program</h2>
          </Link>
      </div>
    );
};

export default Home;