export default function comics(state = "", action) {
    switch (action.type) {
      case "ADD_COMICS":
        return [action.comics];
      default:
        return state;
    }
  }