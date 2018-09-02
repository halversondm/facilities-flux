'use strict';
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

import AppDispatcher from './AppDispatcher';
import FacilityConstants from './FacilityConstants';

var CHANGE_EVENT = 'change';

/**
 * The data store.
 */
var facilities = {};

/**
 * Create a new facility from user input OR add existing facilities from the back-end
 * @param id - unique ID from the back-end or zero if new
 * @param facilityId - describes a facility
 * @param isFunding - determines if the facility is funded
 * @param facilityAmount - determines how much the facility is funded
 */
function create(id, facilityId, isFunding, facilityAmount) {
  var uiId = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  facilities[uiId] = {uiId: uiId, id: id, facilityId: facilityId, isFunding: isFunding, facilityAmount: facilityAmount};
}

/**
 * Update a Facility
 * @param uiId
 * @param updates
 */
function update(uiId, updates) {
  facilities[uiId] = assign({}, facilities[uiId], updates);
}

/**
 * Delete a facility
 * @param uiId
 */
function destroy(uiId) {
  delete facilities[uiId];
}

/**
 * Public API
 */
var FacilityStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return facilities;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch (action.actionType) {
  case FacilityConstants.FACILITY_CREATE:
    create(action.id, action.facilityId, action.isFunding, action.facilityAmount);
    FacilityStore.emitChange();
    break;
  case FacilityConstants.FACILITY_UPDATE:
    update(action.uiId, {
        facilityId: action.facilityId,
        isFunding: action.isFunding,
        facilityAmount: action.facilityAmount
      });
    FacilityStore.emitChange();
    break;
  case FacilityConstants.FACILITY_DESTROY:
    destroy(action.uiId);
    FacilityStore.emitChange();
    break;
  default:
    break;
  }
});

export default FacilityStore;
