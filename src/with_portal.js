import React from "react";
import ReactDom from "react-dom";

let portalDestination = document.getElementById("allerts-div");

function withPortal(PureComponent) {

    return class extends React.Component {
        render() {
            return ReactDom.createPortal((
                <PureComponent {...this.props} />
            ), portalDestination)
        }
    }
}

export default withPortal;