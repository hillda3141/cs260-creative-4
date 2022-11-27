import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <img src="images/pcb_guru.svg" alt="PCB Guru"></img>
          </a>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/services">Services</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/material">Our Process</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

    <Outlet />
    <p>The code can be viewed on GitHub <a href="https://github.com/hillda3141/cs260-creative-4">here</a>.</p>
    </>)
};

export default Layout;