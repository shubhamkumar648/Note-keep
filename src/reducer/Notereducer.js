export const NoteReducer = (state, action) => {

  console.log(action.type);
  console.log(action.payload);

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
        archives: [...state.archives, { ...action.payload }],
        notes: state.notes.filter((item) => item._id !== action.payload._id),
      };

    case "UNARCHIVED_NOTES":
      return {
        ...state,
        archives: state.archives.filter(
          (item) => item._id !== action.payload._id
        ),
        notes: [...state.notes, { ...action.payload }],
      };

      case "DELETE_NOTE":
       return {
       ...state,
       trash:[...state.trash, {...action.payload}],
       notes: state.notes.filter((item) => item._id !== action.payload._id),

      }

      case "RESTORE_TRASH":
        return {
        ...state,
        trash: state.trash.filter((item) => item._id !== action.payload._id),
        notes:[...state.notes, {...action.payload}],
      }

       case "DELETE_FOREVER":
        return {
        ...state,
        
        trash: state.trash.filter((item) => item._id !== action.payload),
          }
 
    default:
      return state;
  }
};
