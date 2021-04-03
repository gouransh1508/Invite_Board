import { useEffect } from 'react'
import Chart from 'chart.js'
import M from 'materialize-css'


const Dashboard = () => {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
                datasets: [{
                    label: '# of people in Events vs days',
                    data: [12, 19, 3, 5, 2, 3,10],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

            var elems = document.querySelector('#sidenav');
            var instance = M.Sidenav.init(elems, {});

        


    }, [])

    

    return (
        <div className="center">
            
            <div className="row">

                <div class="card  left col s12 m6">
                    <nav>
                        <div class="nav-wrapper grey">
                            <a class="navEve  nav-text brand-logo" href=" " >Your Events<i class="material-icons">calendar_today</i></a>
                            <ul id="nav-mobile" class="center hide-on-med-and-down">
                                <li><a class="nav-text" href=" ">New Events</a></li>
                                <li><a class="nav-text" href=" ">Events Revenue</a></li>
                                <li><a class="nav-text" href=" ">Past Events</a></li>
                                <li><a class="nav-text" href=" ">Active Events</a></li>

                            </ul>
                            <ul class="sidenav naviiii" id="sidenav">
                            <li><a class="nav-text" href=" ">New Events</a></li>
                                <li><a class="nav-text" href=" ">Events Revenue</a></li>
                                <li><a class="nav-text" href=" ">Past Events</a></li>
                                <li><a class="nav-text" href=" ">Active Events</a></li>   
</ul>
<a href=" " data-target="sidenav" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
                        </div>
                    </nav>
                    
                    <div class="card-image waves-effect waves-block waves-light">
                        <canvas id="myChart" width="400" height="160"></canvas>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Graphical Stats<i class="material-icons right">more_vert</i></span>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Graphical Stats<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
                <div class="card waveiii right col s6 m5 ">
                    <div class=" waveiii card-image waves-effect waves-block waves-light center">
                        <div className=" row center">
                            <div class="col s12 m4">
                                <i class="small iiii material-icons">perm_identity</i>
                                <br />
                                <p>All Users</p>
                                <p class='blue-text flow-text'>11000</p>

                            </div>
                            <div class=" col s12 m4">
                                <i class="small material-icons">compare_arrows</i>
                                <br />
                                <p>Conversion</p>
                                <p class='blue-text flow-text'>90%</p>

                            </div>
                            <div class=" col s12 m3">
                                <i class="small material-icons">shopping_bag</i>
                                <br />
                                <p>30 Days Sales</p>
                                <p class='blue-text flow-text'>10,00,000</p>

                            </div>

                        </div>
                        <div className="row">
                            <div class=" col s12 m4">
                                <i class="small material-icons">alarm</i>
                                <br />
                                <p>Average Event Time</p>
                                <p class='blue-text flow-text'>4 Days</p>

                            </div>
                            <div class=" col s12 m4">
                                <i class="small material-icons">book</i>
                                <br />
                                <p> Event Courses</p>
                                <p class='blue-text flow-text'>4</p>

                            </div>
                            <div class=" col s12 m3">
                                <i class="small material-icons">category</i>
                                <br />
                                <p>Event Categories</p>
                                <p class='blue-text flow-text'>20</p>

                            </div>
                        </div>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Discrete Stats<i class="material-icons right">more_vert</i></span>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Discrete Stats<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div class="card  left col s12 m6">

                </div>
                <div class="card right col s12 m6">
                </div>
            </div>
            <div className="row">
                <div class="col s6 m3">
                    <div class="card  darken-1">
                        <div class="card-content white-black">
                            <span class="card-title bb"><i class="left small material-icons">perm_identity</i>New Events</span>
                            <br />
                            <i class="small material-icons">sentiment_satisfied_alt</i>
                            <p><span>HUBX</span>
                                <br />  24 min</p>
                        </div>

                    </div>
                </div>
                <div class="col s6 m3">
                    <div class="card  darken-1">
                        <div class="card-content white-black">
                            <span class="card-title bb"><i class="left small material-icons">api</i>How to Manage Event</span>
                            <br />
                            <ul class="collection">
                                <li class="collection-item avatar">
                                    <i class="material-icons circle">insert_chart</i>
                                    <span class="title txtmm">Event Blog 1</span>
                                    <p class='textp'>Management <br />
                                    </p>
                                    <a href=" " class="secondary-content"><i class="ggg material-icons">grade</i></a>
                                </li>
                                <li class="collection-item avatar">
                                    <i class="material-icons circle">insert_chart</i>
                                    <span class="title txtmm">Event Blog 2</span>
                                    <p class='textp'>Decoration <br />
                                    </p>
                                    <a href=" " class="secondary-content"><i class="ggg material-icons">grade</i></a>
                                </li>
                                <li class="collection-item avatar">
                                    <i class="material-icons circle green">insert_chart</i>
                                    <span class="title txtmm">Event Blog 3</span>
                                    <p class='textp'>Catering <br />
                                    </p>
                                    <a href=" " class="secondary-content"><i class="ggg material-icons">grade</i></a>
                                </li>
                                <li class="collection-item avatar">
                                    <i class="material-icons circle red">insert_chart</i>
                                    <span class="title txtmm">Event Blog 4</span>
                                    <p class='textp'>Security <br />
                                    </p>
                                    <a href=" " class="secondary-content"><i class="ggg material-icons">grade</i></a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class=" col s6 m3 ">
                    <div class="card  darken-1">
                        <div class="card-content white-black">
                            <span class="card-title bb"><i class="left small material-icons">timeline</i>Events Logs</span>
                            <br />
                            <ul class="collection">
                                <li class="collection-item avatar">
                                    <i class="material-icons circle">vpn_key</i>
                                    <span class="title left txtmm">HUBX</span>
                                    <br />
                                    <p class="left txtmm">Logged In <br />
                                    </p>
                                    <a href=" " class="secondary-content txtsm">22 Minutes</a>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
                <div class="col s6 m3">
                    <div className="row">
                        <div class="card  darken-1">
                            <div class="card-content white-black">
                                <span class="card-title bb"><i class="right small material-icons">hourglass_empty</i>Trial Period</span>
                                <br />
                                <p><span>30 Days Left</span>
                                    <br />  <button class=" btn red waves-effect waves-light" type="submit" name="action">Upgrade Now
    <i class="material-icons right">upgrade</i>
  </button></p>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div class="card  darken-1">
                            <div class="card-content white-black">
                                <span class="card-title bb"><i class="small material-icons">perm_identity</i>Online Users</span>
                                <br />
                                <i class="small material-icons">sentiment_satisfied_alt</i>
                                <p><span>HUBX</span>
                                    <br />  <button class=" btn waves-effect waves-light" type="submit" name="action">Contact
    <i class="material-icons right">send</i>
  </button></p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard