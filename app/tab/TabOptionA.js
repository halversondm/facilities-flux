/**
 * Created by Daniel on 1/20/2016.
 */

import React from 'react';
import Details from './Details';
import FacilitiesSection from '../facilities/FacilitySection';

class TabOptionA extends React.Component {

    constructor() {
        super();
        const facilities = [{id: 1, facilityId: '1', isFunding: true, facilityAmount: 123.45},
            {id: 2, facilityId: '2', isFunding: false, facilityAmount: 678.90},
            {id: 3, facilityId: '3', isFunding: true, facilityAmount: 99.99},
            {id: 4, facilityId: '4', isFunding: false, facilityAmount: 199.99},
            {id: 5, facilityId: '5', isFunding: false, facilityAmount: 299.99},
            {id: 6, facilityId: '6', isFunding: false, facilityAmount: 399.99}];
        this.state = {facilities: facilities};
    }

    render() {
        return (
            <div>
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#Details" aria-controls="Details" role="tab"
                                                                  data-toggle="tab">Details</a></li>
                    <li role="presentation"><a href="#Facilities" aria-controls="Facilities" role="tab"
                                               data-toggle="tab">Facilities</a></li>
                    <li role="presentation"><a href="#Contacts" aria-controls="Contacts" role="tab"
                                               data-toggle="tab">Contacts</a>
                    </li>
                    <li role="presentation"><a href="#Documents" aria-controls="Documents" role="tab"
                                               data-toggle="tab">Documents</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="Details">This is my Details
                        <Details/>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="Facilities"><FacilitiesSection
                        facilities={this.state.facilities}/></div>
                    <div role="tabpanel" className="tab-pane" id="Contacts"> the Contacts</div>
                    <div role="tabpanel" className="tab-pane" id="Documents">more Documents</div>
                </div>
            </div>
        );
    }
}

export default TabOptionA;
