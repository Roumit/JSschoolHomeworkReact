import React from "react";
import ReactDom from "react-dom";
import AlertList from "./alert_list.js"


class App extends React.Component {
    state = {
        inputText:"",
        disabled: "disabled",
        alerts: []
    };


    onInput = (e) => {
        let disabled = e.target.value ? "" : "disable";
        this.setState({
            inputText: e.target.value,
            disabled: disabled
        })
    };
    
      
    addAlert = () => {
        let alerts = this.state.alerts;
        alerts.push(this.state.inputText);
        this.setState({
            alerts: alerts
        })
    }
    

    render(){
        return (
            <div className="input-div">
                <input onInput={this.onInput}></input>
                <button disabled={this.state.disabled} onClick={this.addAlert}>Add alert</button>
                <div>
                    <AlertList alerts={this.state.alerts} />
                </div>
            </div>
        )
    };
};


export default App;