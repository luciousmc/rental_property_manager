import React from 'react';
import ReactDOM from 'react-dom';
// import Header from './header';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            view:{
                name: 'landing',
                params: {},
            }
        }
        this.setView = this.setView.bind(this);
    }
    setView( view, obj ){
        this.setState({ view, obj });
    }
    render(){
        if (this.state.view.name === 'landing'){
            return(
                <div className="container col-12">
                    <header className="row">
                        {/* <Header /> */}
                    </header>
                    <main>
                        <div className="content-container row col-8 align-items-center">
                            <div className="col manager-container">
                                <div className="card text-center">
                                    <img className="manager-icon" src="images/manager_icon.png" alt="manager icon"/>
                                    <div className="card-body">
                                        <h2 className="card-title">Property Manager</h2>
                                        <button className="btn btn-primary">Go to Portal</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col tenants-container p-15">
                                <div className="card text-center">
                                    <img className="tenant-icon" src="images/tenant_icon.png" alt="tenant icon"/>
                                    <div className="card-body">
                                        <h2 className="card-title">Tenant</h2>
                                        <button className="btn btn-primary">Go to Portal</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            );
        }
        
    }
}