import React from 'react';
import Contact from './Contact.jsx';

const Home = () => {

    function exampleMethod(){
    console.log('js is running');
    }
    
        return(
            <>
                <h1>
                    My home page
                </h1>
                <p>
                    Some content
                </p>
                <button onClick={()=>exampleMethod()}>Console log some text</button>
                <Contact></Contact>
                </>
        );  
};

export default Home;