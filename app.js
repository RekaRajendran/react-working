    import React from 'react';
    import ReactDOM from 'react-dom/client';

    //JSX (Transpiled before it reaches the JS engine) - PARSEL -Babel
    //JSX=> Babel transpiles it to React.createElement=>ReactElement=>js Object=>HTM Element(render) 

    //React Element
    const heading=( 
        <h1 className='head'>React using JSX</h1>
    )
    const Title=()=>(
        <h1 className='head'>React  -Functional Components</h1>
        
    )     
    
    const HeadingComponent=()=>(
        <div className='container'>  
         {heading}   
        <Title />
        <Title> </Title>       
        {Title()}
        <h1 className="heading"> React Functional  Component </h1> 
        </div>
         
        )
    

    const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(<HeadingComponent/>);