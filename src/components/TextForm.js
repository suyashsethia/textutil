import React, { useState } from 'react'

export default function TextForm(props) {

    const func_onchange = (event) => {
        console.log("change huya re baba");
        setText(event.target.value)

    };
    const Touppercase = () => {

        console.log("i pressed btn 1 ")
        let out_upper = text.toUpperCase();
        setOutput(out_upper);
    };
    const Tolowercase = () => {

        console.log("i pressed btn 2 ");

        let out_lower = text.toLowerCase();
        setOutput(out_lower);
    };
    const Tomockery = () => {
        console.log("i pressed btn 3 ");
        var out_mockery = "";
        var k = 1;
        var list = text.split(" ");
        for (let index = 0; index < list.length; index++) 
        {
            // const element = list[index];
            for (let index2 = 0; index2 < list[index].length; index2++) 
            {
                var j="";
                // const element2 = list[index][index2];
                if (k === 1) {
                    j = list[index][index2].toUpperCase();
                    k = 0;
                    out_mockery+=j ;
                }
                else {
                    j = list[index][index2].toLowerCase();
                    k = 1;
                    out_mockery+=j ;

                }
            }
            out_mockery +=" ";
        }
        setOutput(out_mockery);

    };
    // const copyoutput = ()=>
    // {

    // };
    const [text, setText] = useState('Enter text here');
    const [output, setOutput] = useState('output');

    return (
        <div>
            <div className="mb-2">
                <label htmlFor="input_box" className="form-label"><h3>{props.heading1}</h3></label>
                <textarea className="form-control" onChange={func_onchange} value={text} id="input_box" aria-describedby="emailHelp" rows="6" />
            </div>


            <button type="submit" onClick={Touppercase} className="btn btn-outline-primary mx-1 ">{props.button1}</button>
            {/* {console.log(text)} */}

            <button type="submit" onClick={Tolowercase} className="btn btn-outline-primary mx-1  ">{props.button2}</button>

            <button type="submit" onClick={Tomockery} className="btn btn-outline-primary mx-1 ">Mockery</button>
            <div className="mb-2 mt-3" >
                <label htmlFor="output_box" className="form-label"><h3>{props.heading2}</h3></label>
                <textarea className="form-control" id="output_box" value={output} aria-describedby="emailHelp" rows="6" />
            </div>
            {/* <button type='submit' onClick={copyoutput} className="btn btn-secondary  ">Copy</button>
            <button type="button" class="btn-clipboard mt-0 me-0" aria-label="Copy to clipboard" data-bs-original-title="Copy to clipboard" title="" aria-describedby="tooltip586196">
            <svg class="bi" role="img" aria-label="Copy"><use xlink:href="#clipboard"></use></svg>
          </button> */}
        </div>
    )
}
TextForm.defaultProps = {
    heading1: "heading1 here",
    heading2: "heading2 here ",
    button1: "btn1",
    button2: "btn2"
};
