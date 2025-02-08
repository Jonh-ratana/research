import { NavLink } from "react-router-dom/cjs/react-router-dom.min"


export default function Navbar(){
    return(
        <>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
  <img src="image/bank.png" alt="" width={'50px'} />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <NavLink to="/home" class="nav-link">
              Home
        </NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/chart" class="nav-link">
              Chart
        </NavLink>
        </li>
        {/* <li class="nav-item">
        <NavLink to="/team" class="nav-link">
              Team
        </NavLink>
        </li> */}
        <li class="nav-item">
        <NavLink to="/member" class="nav-link">
              Member
        </NavLink>
        </li>
       

        <li class="nav-item">
        <NavLink to="/professor" class="nav-link">
              professor
        </NavLink>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}