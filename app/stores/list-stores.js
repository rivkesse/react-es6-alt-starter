import alt from 'alt';
import ListActions from '../actions/list-actions.js';
import ListSource from '../sources/list-source.js';

export default class ListStore {
  constructor() {
    this.lists = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateList: ListActions.UPDATE_LIST,
      handleFetchList: ListActions.FETCH_LIST,
      handleListFailed: ListActions.LIST_FAILED //,
      // setFavorites: ListActions.FAVORITE_LIST
    });

    this.exportPublicMethods({
      getList: this.getList
    });

    this.exportAsync(Listource);
  }

  handleUpdateList(list) {
    this.list = list;
    this.errorMessage = null;
  }

  handleFetchList() {
    this.list = [];
  }

  handleListFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  /*resetAllFavorites() {
    this.lists = this.lists.map((list) => {
      return {
        id: list.id,
        name: list.name,
        has_favorite: false
      };
    });
  }

  setFavorites(list) {
    this.waitFor(FavoritesStore);

    var favoritedLists = FavoritesStore.getState().lists;

    this.resetAllFavorites();

    favoritedLists.forEach((list) => {
      // find each list in the array
      for (var i = 0; i < this.lists.length; i += 1) {

        // set has_favorite to true
        if (this.lists[i].id === list.id) {
          this.lists[i].has_favorite = true;
          break;
        }
      }
    });
  }*/

  getList(id) {
    var { list } = this.getState();
    for (var i = 0; i < list.length; i += 1) {
      if (list[i].id === id) {
        return list[i];
      }
    }

    return null;
  }
}
