import ListActions from '../actions/list-actions';

var listItems = [
    { id: 1, name: "Name1" },
    { id: 2, name: "Name2" },
    { id: 3, name: "Name3" },
    { id: 4, name: "Name4" },
    { id: 5, name: "Name5" },
    { id: 6, name: "Name6" },
    { id: 7, name: "Name7" }
];

var ListSource = {
  fetchList() {
    return {
      remote() {
        return new Promise(function (resolve, reject) {
          // simulate an asynchronous flow where data is fetched on
          // a remote server somewhere.
          setTimeout(function () {

            // change this to `false` to see the error action being handled.
            if (true) {
              // resolve with some mock data
              resolve(mockData);
            } else {
              reject('Unable to retreive lists');
            }
          }, 250);
        });
      },

      local() {
        // Never check locally, always fetch remotely.
        return null;
      },

      success: ListActions.updateLists,
      error: ListActions.locationsFailed,
      loading: ListActions.fetchLists
    }
  }
};

module.exports = ListSource;