import React, { useState } from 'react'
import ClipboardCopy from './copy_btn';

export default function TextForm(props) {

    const [text, setText] = useState('');
    const [output, setOutput] = useState('');

    const [option, setOption] = useState('option1');
    const [bool_CAPS, setbool_CAPS] = useState(false);

    const func_onchange_input = (event) => {
        console.log("change huya re baba");
        setText(event.target.value)
        console.log(text)
        if (option === "option1")
            Touppercase();
        else if (option === "option2") {
            Tolowercase();
        }
        else {
            Tobackchodi();
        }
    };
    // const buttontoggle = (event) => {
    //     console.log(event.target.value);
    // };
    // const func_onchange_output = (event) => {
    //     console.log("change huya re baba");
    //     setOutput(event.target.value)
    //     console.log(output)

    // };
    const Touppercase = () => {
        console.log("i pressed btn 1 ")
        let out_upper = text.toUpperCase();
        setOutput(out_upper);
    };
    const Tolowercase = () => {
        console.log("i pressed btn 3 ")
        let out_upper = text.toLowerCase();
        setOutput(out_upper);
    };
    const Tobackchodi = () => {
        console.log("i pressed btn 2 ")
        var temp = "";
        var flag = 1;
        var f;
        for (let index = 0; index < text.length; index++) {
            if (text[index] === "") {
                continue;
            }
            if (flag === 1) {
                f = text[index].toUpperCase();
                temp = temp + f;
                flag = 0;
            }
            else {
                f = text[index].toLowerCase();
                temp = temp + f;
                flag = 1;
            }

        }
        setOutput(temp);
    };
    const toggle = (event) => {
        setOption(event.target.id)
    }
    return (
        <div>
            <div className="mb-2">
                <label htmlFor="input_box" className="form-label"><h3>{props.heading1}</h3></label>

                <textarea className="form-control" onChange={func_onchange_input} value={text} id="input_box" aria-describedby="emailHelp" rows="6" />
            </div>

            <div className="mb-2 mt-3" >
                <div className="btn btn-group btn-group-toggle" data-toggle="buttons" onChange={toggle}>
                    <label className="btn btn-secondary active">
                        <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> CAPS
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option2" autoComplete="off" /> small
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option3" autoComplete="off" /> BaCkChOdI
                    </label>
                </div>
                <div>

                    <label htmlFor="output_box" className="form-label"><h3>{props.heading2}</h3></label>
                </div>
                <textarea className="form-control" id="output_box" onChange={func_onchange_input} value={output} aria-describedby="emailHelp" rows="6" />
                <div>
                    <ClipboardCopy inputtext={output}></ClipboardCopy>
                </div>
            </div>
        </div>
    )
}
TextForm.defaultProps = {
    heading1: "heading1 here",
    // heading2: "heading2 here ",
    // button1: "btn1",
    // button2: "btn2"
};
