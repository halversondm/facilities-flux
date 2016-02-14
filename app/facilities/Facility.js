'use strict';
var React = require('react');
var FacilityActions = require('./FacilityActions');

var Facility = React.createClass({
    propTypes: {
        facility: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {facility: this.props.facility}
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({facility: nextProps.facility});
    },
    handleRemove: function (event) {
        FacilityActions.destroy(this.props.facility.uiId);
    },
    handleRadioClick: function (event) {
        var facility = this.state.facility;
        facility.isFunding = event.target.value === 'true';
        this.setState(facility);
        this.save(null);
    },
    handleFacilityIdChange: function (event) {
        var facility = this.state.facility;
        facility.facilityId = event.target.value;
        this.setState(facility);
    },
    handleFacilityAmountChange: function (event) {
        var facility = this.state.facility;
        facility.facilityAmount = event.target.value;
        this.setState(facility);
    },
    save: function (event) {
        FacilityActions.updateFacility(this.state.facility.uiId, this.state.facility.facilityId, this.state.facility.isFunding, this.state.facility.facilityAmount);
    },
    render: function () {
        return (
            <div className="row">
                <div className="col-sm-2">
                    <input type="text" className="input-group" value={this.state.facility.facilityId} onBlur={this.save}
                           onChange={this.handleFacilityIdChange}></input>
                </div>
                <div className="col-sm-2">
                    <label>Yes</label>
                    <input type="radio" onChange={this.handleRadioClick} name={this.state.facility.uiId} value={true}
                           checked={this.state.facility.isFunding === true}></input>
                    <label>No</label>
                    <input type="radio" onChange={this.handleRadioClick} name={this.state.facility.uiId} value={false}
                           checked={this.state.facility.isFunding === false}></input>
                </div>
                <div className="col-sm-2">
                    <input type="text" className="input-group"
                           value={this.state.facility.facilityAmount} onBlur={this.save}
                           onChange={this.handleFacilityAmountChange}></input>
                </div>
                <div className="col-sm-2">
                    <input type="button" className="btn btn-sm btn-danger" value="Remove"
                           onClick={this.handleRemove}></input>
                </div>
            </div>
        )
    }
});

export default Facility;