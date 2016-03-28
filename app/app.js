'use strict';
require('bootstrap.css');

import React from 'react';
import ReactDOM from 'react-dom';
import FacilitySection from './facilities/FacilitySection';

// simulation of facilities coming into the FacilitySection through props, but ultimately from XHR.
var facilities = [{id: 1, facilityId: "1", isFunding: true, facilityAmount: 123.45},
    {id: 2, facilityId: "2", isFunding: false, facilityAmount: 678.90},
    {id: 3, facilityId: "3", isFunding: true, facilityAmount: 99.99}];


ReactDOM.render(
    <FacilitySection facilities={facilities} readOnly={false}/>,
    document.getElementById('booking')
);
