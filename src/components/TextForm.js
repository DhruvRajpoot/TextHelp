import React, { useState } from 'react'

export default function TextForm(props) {
    const handleChange = (e) => {
        console.log('HandleChange')
        setText(e.target.value)
    }
    const upperCase = () => {
        setText(text.toUpperCase())
    }
    const lowerCase = () => {
        setText(text.toLowerCase())
    }
    const removeExtraSpace = () => {
        let newTextArr = text.split(/\s+/)
        let newText = newTextArr.join(' ')
        setText(newText)
    }
    const clearText = () => {
        setText('')
    }
    const copyText = () => {
        let textStr = document.getElementById('myBox')
        textStr.select()
        navigator.clipboard.writeText(textStr.value)
    }

    const wordCounting = () => {
        let textArr = text.split(/\s+/)
        let count = 0
        textArr.forEach(element => {
            if (element === '') { 
                count++ 
            }
        })
        return textArr.length-count
    }
    // const capitalize=()=>{
    //     console.log('capitalize')
    //     let newTextArr=text.split(' ')
    //     let newText=''
    //     console.log(newTextArr);
    //     newTextArr.forEach((e)=>{
    //         console.log(e[0].toUpperCase())
    //         newText+=e[0].toUpperCase()+e.slice(1)
    //     })
    //     setText(newText)
    // }

    const [text, setText] = useState('')

    return (
        <>
            <div className="container px-4 py-3" style={props.myStyle}>
                <h3 className="title">Write Here</h3>
                <textarea className='form-control' name="text" value={text} id="myBox" rows="10" onChange={handleChange} style={props.myStyle} placeholder="Enter text here"></textarea>
                <br />
                <button disabled={text.length===0} className={`btn btn-${props.modeTextColour} m-1`} onClick={upperCase}>Convert to UpperCase</button>
                <button disabled={text.length===0} className={`btn btn-${props.modeTextColour} m-1`} onClick={lowerCase}>Convert to LowerCase</button>
                <button disabled={text.length===0} className={`btn btn-${props.modeTextColour} m-1`} onClick={removeExtraSpace}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className={`btn btn-${props.modeTextColour} m-1`} onClick={copyText}>Copy Text</button>
                <button disabled={text.length===0} className={`btn btn-${props.modeTextColour} m-1`} onClick={clearText}>Clear Text</button>
                {/* <button disabled={text.length===0} className={`btn btn-${props.modeTextColour} m-1`}  onClick={capitalize}>Capitalize</button> */}
            </div>
            <div className="container px-4 py-3" style={props.myStyle}>
                <h3>Your Summary</h3>
                <p>{wordCounting(text)} words and {text.length} characters</p>
            </div>
        </>
    )
}
