import alt from 'alt';

export default class ListActions {
  updateLists(locations) {
    this.dispatch(locations);
  }

  fetchList() {
    this.dispatch();
  }

  locationsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  favoriteList(location) {
    this.dispatch(location);
  }
}
