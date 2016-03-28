'use strict';
import React from 'react';
import Facility from './Facility';
import FacilityActions from './FacilityActions';

var FacilityList = React.createClass({
    propTypes: {
        facilities: React.PropTypes.object.isRequired,
        readOnly: React.PropTypes.bool.isRequired
    },
    handleAddClick: function () {
        FacilityActions.create(0, "", null, "");
    },
    render: function () {
        var facilities = [];
        for (var key in this.props.facilities) {
            facilities.push(<Facility facility={this.props.facilities[key]} readOnly={this.props.readOnly} key={key}/>);
        }
        return (
            <div>
                <div className="row">
                    <div className="col-sm-2">
                        <p>Facility ID</p>
                    </div>
                    <div className="col-sm-2">
                        <p>Funded?</p>
                    </div>
                    <div className="col-sm-2">
                        <p>Facility Amount</p>
                    </div>
                </div>
                {facilities}
                <hr/>
                <div className="row" hidden={this.props.readOnly}>
                    <div className="col-sm-2">
                        <input type="button" className="btn btn-success" value="Add" onClick={this.handleAddClick}></input>
                    </div>
                </div>
            </div>
        )
    }
});

export default FacilityList;
