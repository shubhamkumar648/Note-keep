export const setNoteReducer = (state, action) => {
  console.log(action.payload, "action");

  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };

    case "SET_TEXTAREA":
      return { ...state, textarea: action.payload };

    case "COLOR_PALLET":
      return { ...state, isColorpalletVisible: !state.isColorpalletVisible };

    case "SET_COLOR":
      return { ...state, noteColor: action.payload };

    case "SET_TAG":
      return { ...state, tags: action.payload };

    case "TAG_CATEGORIES": {
      return { ...state, isTagCategoreis: !state.isTagCategoreis };
    }
    case "RESET":
      return { title: "", textarea: "", noteColor: "", tags: "" };

    case "PRIORITY":
      return { ...state, priority: action.payload };

    case "TAG_HIGH":
      return { ...state, priority: action.payload };

    case "TAG_MEDIUM":
      return { ...state, priority: action.payload };

    case "TAG_LOW":
      return { ...state, priority: action.payload };

    default:
      return state;
  }
};
