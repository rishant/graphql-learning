import React from 'react'

function DummyFunctionalComponentLifeCycle() {

    const [title, setTitle] = React.useState('');
    const [name, setName] = React.useState('');
    const [requestObject, SetRequestObject]= React.useState('');

    // componentDidMount
    React.useEffect(() => {
        console.log("Method: componentDidMount -> Initial Load");
    }, [])

    // componentDidUpdate
    React.useEffect(() => {
        console.log("Method: componentWillUpdate -> title Changed");
    }, [title])

    React.useEffect(() => {
        console.log("Method: componentWillUpdate -> name Changed");
    }, [name])

    // componentWillMount
    React.useEffect(() => {
        return (() => {
            console.log("Method: componentWillUnpount -> Component Destorying");
        });    
    }, []);

    const butonClieckHandler = (event) => {
        event.preventDefault();
        let request = {};

        request.title = title;
        request.name = name;
        console.log(request);
        SetRequestObject(JSON.stringify(request));
        setTitle("")
        setName("")
    }
    return (
        <div style={{
            textAlign: 'center',
            padding: '5px',
            border: '1px solid black',
            width: '500px',
            // marginLeft: "35%",
            margin: 'auto'
        }}>
            <h2>Functional Component Lifecycle</h2>
            <label>Enter Title: <input type="text" value={title} onChange={(event) => { setTitle(event.target.value)}}/></label>
            <br />
            <label>Enter name: <input type="text" value={name} onChange={(event) => { setName(event.target.value)}}/></label>
            <br />
            <button type="button" onClick={butonClieckHandler}>Submit</button>
            <div>{requestObject}</div>
        </div>

    )
}

export default DummyFunctionalComponentLifeCycle