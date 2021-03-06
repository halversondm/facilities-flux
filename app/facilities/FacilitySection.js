'use strict';
var React = require('react');
var FacilityList = require('./FacilityList');
var FacilityStore = require('./FacilityStore');
var FacilityActions = require('./FacilityActions');

function getFacilityState() {
    return {
        facilities: FacilityStore.getAll()
    };
}

var FacilitySection = React.createClass({
    propTypes: {
        facilities: React.PropTypes.array.isRequired
    },
    getInitialState: function () {
        // add facilities to the FacilityStore from the 'back-end'
        this.props.facilities.forEach(function (facility) {
            FacilityActions.create(facility.id, facility.facilityId, facility.isFunding, facility.facilityAmount);
        });
        return getFacilityState();
    },
    componentDidMount: function () {
        FacilityStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        FacilityStore.removeChangeListener(this.onChange);
    },
    componentWillReceiveProps: function (nextProps) {
        // add facilities to the FacilityStore from the 'back-end'
        nextProps.facilities.forEach(function (facility) {
            FacilityActions.create(facility.id, facility.facilityId, facility.isFunding, facility.facilityAmount);
        });
    },
    onChange: function () {
        this.setState(getFacilityState());
    },
    render: function () {
        return (
            <div className="container">
                <fieldset>
                    <legend>Facilities</legend>
                    <FacilityList facilities={this.state.facilities}/>
                </fieldset>
            </div>
        )
    }
});

export default FacilitySection;