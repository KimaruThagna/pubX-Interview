import React, {Component} from "react";

class Jumbotron extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Bid Data Harvest System</h1>
                <p className="lead">Retrieved Bid Data</p>
                <hr className="my-4"/>

//                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        );
    }
}


export default Jumbotron
