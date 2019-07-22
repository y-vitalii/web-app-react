import React from 'react';
import './App.css';
import Header from "../header/Header";
import Content from "../content/Content";
import Bottom from "../bottom/Bottom";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Content />
                <Bottom />
            </div>
        )
    }
}


export default App;
