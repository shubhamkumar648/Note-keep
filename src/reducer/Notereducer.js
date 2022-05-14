export const NoteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, { ...action.payload }] };

    

     case "EDIT_NOTES":
      return {
          ...state,
          notes: state.notes.map((note) =>
            note._id === action.payload._id ? { ...note, ...action.payload } : note
          ),
      }

    default:
      return state;
  }
};
