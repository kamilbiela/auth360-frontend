import * as React from 'react';
import {Link} from "react-router";

export class App extends React.Component<any, any> {
	render() {
		return (
		    <div>
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Auth360</a>
                    </div>

                    <ul className="nav navbar-nav">
                        <li><Link to="/clients">Clients</Link></li>
                    </ul>
                </div>
            </nav>

			{this.props.children}
			</div>
		)
	}
}
