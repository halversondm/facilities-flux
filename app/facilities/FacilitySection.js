'use strict';
import React from 'react';
import FacilityList from './FacilityList';
import FacilityStore from './FacilityStore';
import FacilityActions from './FacilityActions';
import {Header} from 'base-react-components';

function getFacilityState() {
  return {
      facilities: FacilityStore.getAll()
    };
}

var FacilitySection = React.createClass({
  propTypes: {
      facilities: React.PropTypes.array.isRequired,
      readOnly: React.PropTypes.bool.isRequired
    },
  getInitialState: function() {
        // add facilities to the FacilityStore from the 'back-end'
      this.props.facilities.forEach(function(facility) {
          FacilityActions.create(facility.id, facility.facilityId, facility.isFunding, facility.facilityAmount);
        });
      return getFacilityState();
    },
  componentDidMount: function() {
      FacilityStore.addChangeListener(this.onChange);
    },
  componentWillUnmount: function() {
      FacilityStore.removeChangeListener(this.onChange);
    },
  componentWillReceiveProps: function(nextProps) {
        // add facilities to the FacilityStore from the 'back-end'
      nextProps.facilities.forEach(function(facility) {
          FacilityActions.create(facility.id, facility.facilityId, facility.isFunding, facility.facilityAmount);
        });
    },
  onChange: function() {
      this.setState(getFacilityState());
    },
  render: function() {
      return (
            <div className="container">
                <form>
                    <fieldset disabled={this.props.readOnly}>
                        <legend>Facilities</legend>
                        <Header />
                        <FacilityList facilities={this.state.facilities} readOnly={this.props.readOnly}/>
                    </fieldset>
                </form>
            </div>
        );
    }
});

export default FacilitySection;
