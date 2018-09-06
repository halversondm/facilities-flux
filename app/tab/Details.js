/**
 * Created by Daniel on 1/20/2016.
 */
import React from 'react';

class Details extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-4">
                    <label htmlFor="input1">An Input</label>
                    <input type="text" className="form-control"></input>
                </div>
                <div className="col-sm-4">
                    <span>A radio question?</span>
                    <label htmlFor="input2">Yes</label>
                    <input type="radio" className="radio-inline" id="input2" name="rq"></input>
                    <label htmlFor="input3">No</label>
                    <input type="radio" className="radio-inline" id="input3" name="rq"></input>
                </div>
                <div>another test</div>
            </div>
        );
    }
}

export default Details;
