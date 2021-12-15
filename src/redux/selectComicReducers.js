export default function selectedComic(state = "", action) {
    switch (action.type) {
      case "SELECT_COMIC":
        return [action.selectedComic];
      default:
        return state;
    }
  }