import React from "react";

class DummyClassComponentLifeCycle extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {title: '', name: '', requestObject: ''}
        console.log("Method: constructor");
    }
    
    componentWillUpdate() {
        console.log("Method: componentWillUpdate");
    }

    butonClieckHandler = (event) => {
        event.preventDefault();
        let request = {};

        request.title = this.state.title;
        request.name = this.state.name;
        console.log(request);
        this.setState({title: '', name: '', requestObject: JSON.stringify(request)})
    }

    render() { 
        console.log("Method: render")
        return (
            <div style={{
                textAlign: 'center',
                padding: '5px',
                border: '1px solid black',
                width: '500px',
                // marginLeft: "35%",
                margin: 'auto'
            }}>
                <h2>Class Component Lifecycle</h2>
                <label>Enter Title: <input type="text" value={this.state.title} onChange={(event) => { this.setState({title : event.target.value})}}/></label>
                <br />
                <label>Enter name: <input type="text" value={this.state.name} onChange={(event) => { this.setState({name : event.target.value})}}/></label>
                <br />
                <button type="button" onClick={this.butonClieckHandler}>Submit</button>
                <div>{this.state.requestObject}</div>
            </div>        
        );
    }

    componentDidMount() {
        console.log("Method: componentDidMount");
    }

    componentDidUpdate() {
        console.log("Method: componentDidUpdate");
    }
    
    componentWillUnmount() {
        console.log("Method: componentWillUnmount");        
    }
}
 
export default DummyClassComponentLifeCycle;