export const NoteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, { ...action.payload }] };

    case "EDIT_NOTES":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload._id
            ? { ...note, ...action.payload }
            : note
        ),
      };

      case "ARCHIVE_NOTE":

      return {
        ...state,
        archives:[...state.archives, {...action.payload}],
        notes: state.notes.filter(item => item._id !==action.payload._id)
      }

      case "UNARCHIVED_NOTES": 

      return {
        ...state,
        archives: state.archives.filter(item => item._id !== action.payload._id),
        notes:[...state.notes,{...action.payload}]
      }

    default:
      return state;
  }
};
