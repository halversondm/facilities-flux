'use strict';
import AppDispatcher from './AppDispatcher';
import FacilityConstants from './FacilityConstants';

var FacilityActions = {

  create: function(id, facilityId, isFunding, facilityAmount) {
      AppDispatcher.dispatch({
          actionType: FacilityConstants.FACILITY_CREATE,
          id: id,
          facilityId: facilityId,
          isFunding: isFunding,
          facilityAmount: facilityAmount
        });
    },

  updateFacility: function(uiId, facilityId, isFunding, facilityAmount) {
      AppDispatcher.dispatch({
          actionType: FacilityConstants.FACILITY_UPDATE,
          uiId: uiId,
          facilityId: facilityId,
          isFunding: isFunding,
          facilityAmount: facilityAmount
        });
    },

  destroy: function(uiId) {
      AppDispatcher.dispatch({
          actionType: FacilityConstants.FACILITY_DESTROY,
          uiId: uiId
        });
    }

};

export default FacilityActions;
