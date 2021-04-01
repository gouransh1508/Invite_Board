import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav calss=''>
                <div class="nav-wrapper grey">
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
                </div>
            </nav>

     );
}
 
export default Navbar;