import React, {Component} from "react";

class ErrorBoundry extends React.Component{
    constructor(props) {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.state.hasError = true
    }

    render() {
        if (this.state.hasError){
            return(
                <h1>Oooppss. That is not good</h1>
            )
        }else {
            this.state.props.children
        }

    }
}
export default ErrorBoundry;