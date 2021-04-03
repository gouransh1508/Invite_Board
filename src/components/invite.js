import { useEffect } from 'react'
import Chart from 'chart.js'



const Invite = () => {

    let onSubmit = e => {
        e.preventDefault();
        console.log('hi');
    }

    let onChange = e => {
        e.preventDefault();
        let value1 = document.getElementById('EventDays').value;
        let value2 = document.getElementById('NoPeople').value;
        let EventStartValue = document.querySelector('#EventStartValue');
        let NoPeopleValue = document.querySelector('#NoPeopleValue');
        let ExpectedValue = document.querySelector('#ExpectedValue');


        EventStartValue.innerHTML = value1;
        NoPeopleValue.innerHTML = value2;
        ExpectedValue.innerHTML = `Rs ${value1 * value2 * 100}`

        var ctx = document.getElementById('myChart').getContext('2d');
        console.log(e.target.value)
        var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['No.Of People', 'TIme Of Event'],
                datasets: [{
                    label: 'Expense of Events vs days vs Time',
                    data: [value2, value1],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',

                    ],
                    borderWidth: 1
                }]
            },
            options: {

            }
        });
    }

    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        let value1 = document.getElementById('EventDays').value;
        let value2 = document.getElementById('NoPeople').value;
        document.querySelector('.inviteii').style.display = 'none';

        var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['No.Of People', 'TIme Of Event'],
                datasets: [{
                    label: 'Expense of Events vs days vs Time',
                    data: [value2, value1],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',

                    ],
                    borderWidth: 1
                }]
            },
            options: {

            }
        });
        return () => {
        }
    }, [])
    return (
        <div className="center">
            <div className="row">
                <div class="card  left col s12 m6">

                    <div class="card-image waves-effect waves-block waves-light">
                        <canvas id="myChart" width="400" height="185"></canvas>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">No of Days: <span id='EventStartValue' class='right1'></span></span>
                        <span class="card-title activator grey-text text-darken-4">No of People: <span id='NoPeopleValue' class='right1 '></span></span>
                        <span class="card-title activator grey-text text-darken-4">Expected Price: <span id='ExpectedValue' class='right1 '></span></span>
                        <span class="card-title activator grey-text text-darken-4">Graphical Stats of Expense of Event<i class="material-icons right">more_vert</i></span>



                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Graphical Stats of Expense of Event<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
                <div class="card shiftii right col s6 m5 ">
                    <form id='EventForm' style={{ paddingTop: '20px' }} noValidate onSubmit={onSubmit}>
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                id="EventName"
                                type="text"

                            />
                            <label htmlFor="EventName">Name of Event</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                id="EventType"
                                type="text"

                            />
                            <label htmlFor="EventType">Type of Event</label>
                        </div>
                        <div className="input-field col s12">
                            <br />
                            <p class="range-field">
                                <input
                                    onChange={onChange}
                                    id="EventDays"
                                    type="range"
                                    min="1"
                                    max="30"

                                />
                            </p>
                            <label htmlFor="EventStart"> Days of Event <span id='EventStartValue' class='right1'></span></label>
                        </div>
                        <div className="input-field col s12">
                            <br />
                            <p class="range-field">
                                <input
                                    onChange={onChange}
                                    id="NoPeople"
                                    type="range"
                                    min="1"
                                    max="30"

                                />
                            </p>
                            <label htmlFor="NoPeople">Expected Number of People In Event <span id='NoPeopleValue' class='right1'></span> </label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                id="EventPlace"
                                type="text"

                            />
                            <label htmlFor="EventPlace">Place of Event</label>
                        </div>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <button
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem",
                                    fontSize: "8px"
                                }}
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Register Event
                </button>
                        </div>
                    </form>
                    <div class="card-content">
                    </div>
                    <div class="card-reveal">
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invite;