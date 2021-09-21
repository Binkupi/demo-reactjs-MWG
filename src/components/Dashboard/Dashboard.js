import React, {Component} from 'react'
import logo from './../../logo.svg';

export class Dashboard extends Component{
    
    render() {
        return(
            <div>
                <div className="page-header">
                    <h1>Dashboard</h1>
                </div>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload {this.props.match.params.id} {this.props.match.params.name}.
                        </p>
                        <a href="123" onClick={() => this.props.history.push('/subgroup')}>Back</a>
                        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                            Learn React
                        </a>
                    </header>
                </div>
            </div>
        )
    }
}