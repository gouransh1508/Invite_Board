import { Link } from "react-router-dom";
import { useEffect } from 'react'
import M from 'materialize-css'


const Navbar = () => {
  useEffect(() => {
    var elemtss = document.querySelector('.sidenav');
    var instance = M.Sidenav.init(elemtss, {});

  }, [])

  return (
    <div className="center">
      <nav class=''>
        <div class="nav-wrapper grey">
          <a class="navDash nav-text brand-logo" href=" " >Dashboard</a>

          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a href=" ">Dashboard</a></li>
            <li><a href=" ">Create Course  <i class="material-icons">add</i> </a></li>
            <li><a href=" ">Preview Home Page <i class="material-icons">visibility</i></a></li>
            <li><a href=" ">Preview after login Page <i class="material-icons">visibility</i></a></li>
            <li><a href=" ">View Welcome Screen <i class="material-icons">power_settings_new</i></a></li>
          </ul>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li> <Link
              to="/invite"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="inviteii btn btn-large btn-flat waves-effect white black-text"
            >
              Invite
              </Link></li>
            <li><a href=" ">Help<i class="material-icons">help</i></a></li>

          </ul>
          <ul class="sidenav" id="slide-out">
            <li><a href=" ">Dashboard</a></li>
            <li><a href=" ">Create Course  <i class="material-icons">add</i> </a></li>
            <li><a href=" ">Preview Home Page <i class="material-icons">visibility</i></a></li>
            <li><a href=" ">Preview after login Page <i class="material-icons">visibility</i></a></li>
            <li><a href=" ">View Welcome Screen <i class="material-icons">power_settings_new</i></a></li>
            <li> <Link
              to="/invite"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="inviteii btn btn-large btn-flat waves-effect white black-text"
            >
              Invite
              </Link></li>
            <li><a href=" ">Help<i class="material-icons">help</i></a></li>

          </ul>
          <a href=" " data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>


    </div>

  );
}

export default Navbar;