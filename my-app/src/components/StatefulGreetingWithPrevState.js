import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0
        };
    }

    // handleClick() {
    //     this.setState({
    //         introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
    //         buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
    //     }, ()=>{
    //         //callback
    //         console.log("new state", this.state.introduction);
    //         console.log("new state", this.state.buttonText);    
    //     });
    //     console.log(this.state.introduction);
    //     console.log(this.state.buttonText);
    // }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState)
            console.log("Previous Probs:", prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbey" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }
        })
    }

    increment() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState)
            console.log("Previous Probs:", prevProps)
            return {
                count: prevState.count + 1
            }
        })
    }

    render () {
        //return <h1>Hello from the stateful class component!</h1>
        return (
            <div>
                <h1>{this.state.introduction} from the stateful class component with prev state!</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>increment</button>
                <p>You've clicked {this.state.count} times</p>
            </div>
        )
    }
}

export default StatefulGreetingWithPrevState;