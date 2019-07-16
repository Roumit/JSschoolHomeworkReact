import React from "react";
import AlertListPure from "./alert_list"
import withPortal from "./with_portal"
import withDisappear from "./with_disappear";


let AlertList = withDisappear(withPortal(AlertListPure), 3000);


class App extends React.Component {

    state = {
        inputText:"",
        disabled: "disabled",
        alerts: []
    }

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount(){
        this.inputRef.current.focus();
    }

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
        this.inputRef.current.focus();
        this.setState({
            alerts: alerts
        })
    }
    
    
    render(){
        return (
            <div className="input-div">
                <input ref={this.inputRef} onInput={this.onInput}></input>
                <button disabled={this.state.disabled} onClick={this.addAlert}>Add alert</button>
                <div className="alert-div">
                    <AlertList alerts={this.state.alerts} />
                </div>
            </div>
        )
    };
};


export default App;