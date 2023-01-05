// import React, { useState } from 'react'

// import exported_text from './inputbox'

// export default function ALL_CAPS(props) {

//     const [output, setOutput] = useState('output');
//     // const[]
//     const Touppercase = () => {
        
//         console.log("i pressed btn 1 ")
//         let out_upper = exported_text.toUpperCase();
//         setOutput(out_upper);
//     };
//     const func_onchange = (event) => {
//         console.log("change huya re baba");
//         // setOutput(event.target.value)
//         // console.log(output)

//     };
    
//     return (
//         <div>
//             <button type="submit" onClick={Touppercase} className="btn btn-outline-primary mx-1 ">{props.button1}</button>
//             <div className="mb-2 mt-3" >
//                 <label htmlFor="output_box" className="form-label"><h3>{props.heading2}</h3></label>
//                 <textarea className="form-control" id="output_box" onChange={func_onchange} value={output} aria-describedby="emailHelp" rows="6" />
//             </div>
//         </div>
//     )

// }
