export const setNoteReducer = (state, action) => {
    console.log(action);

  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };

    case "SET_TEXTAREA":
      return { ...state, textarea: action.payload };

    case "COLOR_PALLET":
      return { ...state, isColorpalletVisible: !state.isColorpalletVisible };

      case "SET_COLOR":
     return {...state, noteColor:action.payload}

    case "RESET":
      return { title: "", textarea: ""};

    default:
      return state;
  }
};
