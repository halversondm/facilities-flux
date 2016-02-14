'use strict';
var React = require('react');
var FacilityList = require('./FacilityList');

var FacilitiesSection = React.createClass({
	getInitialState: function () {
		return {
			facilities: []
		}
	},
	componentWillMount: function () {
		// load the facilities like it came from an XHR
		this.setState({facilities: [{facilityId: "1", isFunding: true, facilityAmount: 123.45}, {facilityId: "2", isFunding: false, facilityAmount: 678.90}, {facilityId: "3", isFunding: true, facilityAmount: 99.99}
		]});
	},
	render: function () {
		return (<div className="container">
		<fieldset>
			<legend>Facilities</legend>
			<FacilityList facilities={this.state.facilities} />
		</fieldset>
		</div>)
	}
});

export default FacilitiesSection;