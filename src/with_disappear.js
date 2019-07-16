import React from "react";


function withDisappear(PureComponent, time) {
    return class extends React.Component {

        state = {
            time: time,
            timeOut: false
        }

        componentWillUpdate(){
            clearTimeout(this.count);
        }

        componentDidUpdate(){
            if (this.state.timeOut){
                this.state.timeOut = false;
            } else {
                this.count = setTimeout(() => {
                this.setState({
                    timeOut: true
                })}, this.state.time)};
        };


        render() {
            if (this.state.timeOut) return (
                <div></div>
            )
            return (
                <PureComponent {...this.props} />
            )
        }
    }
}

export default withDisappear;