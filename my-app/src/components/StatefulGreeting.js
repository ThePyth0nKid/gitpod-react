import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    render () {
        //return <h1>Hello from the stateful class component!</h1>
        return (
            <div>
                <h1>{this.state.introduction} from the stateful class component!</h1>
                <button>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreeting;