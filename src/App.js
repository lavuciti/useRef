import React, { Component } from "react";
import Main from "./Main.js";
export const NameContext = React.createContext();


class App extends Component {

    state = {
        name : "Danilo"
    }

    render(){
        return(
            <div className="container text-center">
                <NameContext.Provider value={this.state.name}>
                    <Main name={this.state.name}/>
                </NameContext.Provider>
                
            </div>
        )
    }
}

export default App;

 /*ako se ne stavi exact tada kada se klikne na about vidi se i home page i about page*/