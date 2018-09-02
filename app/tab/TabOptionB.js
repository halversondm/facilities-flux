/**
 * Created by Daniel on 1/20/2016.
 */

import React from 'react';
import Details from './Details';


class TabOptionB extends React.Component {

    constructor() {
      super();
    }

    render() {
      return (
            <div>
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#Details" aria-controls="Details" role="tab" data-toggle="tab">Details</a></li>
                    <li role="presentation"><a href="#Facilities" aria-controls="Facilities" role="tab" data-toggle="tab">Facilities</a></li>
                    <li role="presentation"><a href="#Contacts" aria-controls="Contacts" role="tab" data-toggle="tab">Contacts</a></li>
                    <li role="presentation"><a href="#Documents" aria-controls="Documents" role="tab" data-toggle="tab">Documents</a></li>
                    <li role="presentation"><a href="#LinkedCase" aria-controls="Linked Case" role="tab" data-toggle="tab">Linked Case</a></li>
                </ul>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="Details">This is my Details
                        <Details />
                    </div>
                    <div role="tabpanel" className="tab-pane" id="Facilities">a Facilities</div>
                    <div role="tabpanel" className="tab-pane" id="Contacts"> the Contacts</div>
                    <div role="tabpanel" className="tab-pane" id="Documents">more Documents</div>
                    <div role="tabpanel" className="tab-pane" id="LinkedCase">a linked Case</div>
                </div>
            </div>
        );
    }
}

export default TabOptionB;
