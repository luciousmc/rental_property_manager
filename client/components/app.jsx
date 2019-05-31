import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            view:{
                name: 'landing',
                params: null,
            }
        }
    }
    render(){
        if (this.state.view.name === 'landing'){
            return(
                <div className="container">
                    <header className="row">
                        <Header />
                    </header>
                    <main>
                        <div className="main-container row">
                            <div className="col-6 manager-container">
                                
                            </div>
                            <div className="col-6 tenants-container">

                            </div>
                        </div>
                    </main>
                </div>
            );
        }
        
    }
}