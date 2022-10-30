import React from 'react'

export default function TextForm(props) {
    return (
        <div>
            <form>
                {/* {<h1>props.heading</h1>} */}
                <div className="mb-2">
                    <label for="input_box" className="form-label"><h3>{props.heading}</h3></label>
                    <textarea className="form-control" id="input_box" aria-describedby="emailHelp" rows="8" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>

                {/* <div className="mb-2">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
// TextForm.propTypes = {
//     heading: propTypes.string
// };

TextForm.defaultProps ={
heading : "heading here"
};
