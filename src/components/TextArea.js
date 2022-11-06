
import React, { useState } from 'react'



export default function TextArea(props) {
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase","success");
        // let textr = newtext.toLowerCase();
        // setText(textr);

    }

    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase","success");
        // let textr = newtext.toLowerCase();
        // setText(textr);

    }

    const handleOFClick = () => {
        let arr = text.split(" ");
        for(var i=0;i<arr.length;i++){
            arr[i]=arr[i].charAt(0).toUpperCase()+ arr[i].slice(1);
        }
        const newtext = arr.join(" ");
        setText(newtext);
        props.showAlert("Converted ","success");

    }

    const handleClearClick = () => {
        let newtext = " ";
        setText(newtext);
        props.showAlert("Clear the text","success");

    }

    const handleRESClick = () => {
       let newtext = text.trim().split(/ +/).join(' ');
        setText(newtext);
        props.showAlert("Removed White Space","success");
    }

    const handleOnClick = (event) => {
        console.log(event);
       
        setText(event.target.value);

    }
    const [text, setText] = useState('');
    // setText("hello anurag");
    return (
    <>
        <div className='container'  style={{color:props.mode==='dark'?'white':'#070a17'}}>

            <div className="mb-3">
                <h1 className='mb-2'>{props.heading}</h1>
                <textarea className="form-control" onChange={handleOnClick} style = {{backgroundColor:props.mode==='dark'?'#202533':'white',color:props.mode==='dark'?'white':'#070a17' }}value={text} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div >

            <button  disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
            <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleLoClick}>Convert To LowerCase</button>
            <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOFClick}>Capitalize Case</button>
            <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRESClick}>Remove Extra Space</button>
            <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
            
        </div>
         <br />
        <div className="container" style={{color:props.mode==='dark'?'white':'#070a17'}}>
            <p>{text.split(" ").filter((text)=> {return text.length!==0 }).length} Words and {text.length} Character</p>
            <p>Time Taken To Read : {0.008*text.split(" ").filter((text)=> {return text.length!==0}).length} min</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing To Preview!"}</p>
           
        </div>
        
    </>
         )
}
