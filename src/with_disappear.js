import React from "react";



function withDisappear(PureComponent, time) {
    
    return class extends React.Component {

        state = {
            time: time,
            timeOut: false,
        }


        componentDidUpdate(){
            this.timer();
        }

        timer = () => {
            if (this.state.timeOut) {
                this.state.timeOut = false;
            } else {
                setTimeout(() => {
                    let timeOut = this.state.timeOut
                    this.setState({
                        timeOut: true
                    })
                }, this.state.time);
            }
        } 

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