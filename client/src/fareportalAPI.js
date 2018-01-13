import React, {Component} from "react"; 

class Fareportal extends Component {
  constructor() {
    super();
    this.state = {
      flights: [],
    }
  };

    componentWillMount() {
        var username = "stephanie48964@gmail.com";
        var password = "1C61120A";
        var apiUrl = "https://api-dev.fareportallabs.com/air/api/search/searchflightavailability";
        var apiKey = new Buffer(username + ":" + password).toString('base64');
        var apiHeaders = new Headers();
        apiHeaders.append("Authorization", "Basic " + apiKey);
        apiHeaders.append("Content-Type", "application/json");
        apiHeaders.append("Accept-Encoding", "application/gzip");
        var apiParams = {
            FlightSearchRequest: {
            Adults: "1",
            TypeOfTrip: "ROUNDTRIP",
            ClassOfService: "ECONOMY",
            SegmentDetails: [
                // flight out
                { 
                Origin: "SAN", 
                Destination: "LAS",
                DepartureDate: "2018-02-01",
                DepartureTime: "1100"
            },
                // flight back in
                {
                Origin: "LAS", 
                Destination: "SAN",
                DepartureDate: "2018-02-05",
                DepartureTime: "1900"
            }
            ]
        },
        ResponseVersion: "VERSION41",
        };

        console.log('params', JSON.stringify(apiParams));

        // ref: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(apiParams),
            headers: apiHeaders
        })
        .then(results => {
            return results.json();
        }).then(data => {
            console.log(data);
            let flights = data.FlightResponse.FpSearch_AirLowFaresRS.OriginDestinationOptions.InBoundOptions.InBoundOption.map((flight) => {
                return (
                    <div key={flight.Segmentid}>
                        Arrival: {flight.FlightSegment[0].ArrivalAirport.LocationCode}
                        /
                        Departure: {flight.FlightSegment[0].DepartureAirport.LocationCode}
                    </div>
                )
            })
            this.setState({flights: flights});
            console.log("state", this.state.flights);
        })
    };

    render() {
        return (
            <div>
                {this.state.flights}
            </div>
        )
    };
}

export default Fareportal;