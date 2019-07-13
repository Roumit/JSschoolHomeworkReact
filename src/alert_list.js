import React from "react";


class AlertList extends React.Component {
    render() {
        return(
            <div>
            {this.props.alerts.map((e, index) => {
                return <div key={index}>{e}</div>
            })}
            </div>
        )
    }
}

export default AlertList;