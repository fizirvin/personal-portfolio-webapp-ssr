import React from 'react';

class Home extends React.Component {

    exampleMethod(){
        console.log("js is running");
    }
    render(){
        return(
            <div>
                <h1>
                    My home page
                </h1>
                <p>
                    Some content
                </p>
                <button onClick={()=>this.exampleMethod()}>Console log some text</button>
                
            </div>
        )

    }
}

export default Home;