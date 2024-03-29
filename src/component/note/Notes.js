import React from "react";
import { FaPalette, FaTag } from "react-icons/fa";
import { useReducer } from "react";
import { useAuth } from "../../contexts/Auth-context";
import { useNotes } from "../../contexts/Notes-context";
import { setNoteReducer } from "../../reducer/setNoteReducer";
import "./notes.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const TagCategories = [
  { id: uuidv4(), tag: "" },
  { id: uuidv4(), tag: "work" },
  { id: uuidv4(), tag: "daily" },
  { id: uuidv4(), tag: "weekly" },
  { id: uuidv4(), tag: "home" },
  { id: uuidv4(), tag: "other" },
];

const NoteColors = [
  { id: uuidv4(), color: "" },
  { id: uuidv4(), color: "teal" },
  { id: uuidv4(), color: "blue" },
  { id: uuidv4(), color: "red" },
  { id: uuidv4(), color: "brown" },
  { id: uuidv4(), color: "green" },
];

export const Notes = ({ editNotes, setisEdit }) => {
  const { notesDispatch } = useNotes();
  const { encodedToken } = useAuth();

  const [state, dispatch] = useReducer(setNoteReducer, {
    title: editNotes?.title || "",
    textarea: editNotes?.textarea || "",
    noteColor: editNotes?.noteColor || "",
    isColorpalletVisible: false,
    tags: editNotes?.tags || "",
    isTagCategoreis: false,
    priority: editNotes?.priority || "high",
  });

  const {
    title,
    textarea,
    noteColor,
    isColorpalletVisible,
    isTagCategoreis,
    tags,
    priority,
  } = state;

  const saveNotesHandler = async (e) => {
    e.preventDefault();

    let addNote = {
      _id: uuidv4(),
      title,
      textarea,
      noteColor,
      tags,
      priority,
      CreatedAt: new Date().toLocaleString(),
    };

    try {
      const response = await axios.post(
        "/api/notes",
        { note: addNote },

        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      if (response.status === 201) {
        notesDispatch({ type: "ADD_NOTE", payload: addNote });
        dispatch({ type: "RESET" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // update notes

  const updateNotesHandler = async (updateNotes) => {
    try {
      const response = await axios.post(
        `/api/notes/${updateNotes._id}`,

        { note: updateNotes },
        {
          headers: { authorization: encodedToken },
        }
      );
      if (response.status === 201) {
        notesDispatch({ type: "EDIT_NOTES", payload: updateNotes });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const editHandler = async (e) => {
    e.preventDefault();

    const updateNotes = {
      _id: editNotes._id,
      title,
      textarea,
      noteColor,
      tags,
      priority,
      CreatedAt: new Date().toLocaleString(),
    };
    updateNotesHandler(updateNotes);
    setisEdit(false);
  };

  return (
    <div
      className={`main-text-container  flex flex-col mt-3 note-color-${noteColor}`}
    >
      <form onSubmit={editNotes ? editHandler : saveNotesHandler}>
        <div className="InputContainer flex flex-col">
          <input
            type="text"
            className="input"
            placeholder="Title"
            value={title}
            onChange={(e) =>
              dispatch({ type: "SET_TITLE", payload: e.target.value })
            }
          />
          <textarea
            placeholder="Take a note"
            className="input note_textarea"
            rows="5"
            cols="20"
            value={textarea}
            onChange={(e) =>
              dispatch({ type: "SET_TEXTAREA", payload: e.target.value })
            }
          ></textarea>
        </div>
        <section className="text-footer flex">
          <div className="icons_container flex">
            <span onClick={() => dispatch({ type: "COLOR_PALLET" })}>
              {" "}
              <FaPalette />{" "}
            </span>
            <span onClick={() => dispatch({ type: "TAG_CATEGORIES" })}>
              <FaTag className="ml-1" />
            </span>

            <select
              value={priority}
              onChange={(e) =>
                dispatch({ type: "PRIORITY", payload: e.target.value })
              }
            >
              <option onClick={() => dispatch({ type: "TAG_HIGH" })}>
                high
              </option>
              <option onClick={() => dispatch({ type: "TAG_MEDIUM" })}>
                medium
              </option>
              <option onClick={() => dispatch({ type: "TAG_LOW" })}>low</option>
            </select>
          </div>

          {isColorpalletVisible && (
            <div className="colorpallete_container">
              {NoteColors.map(({ id, color }) => (
                <div
                  key={id}
                  className={`note-color note-color-${color}`}
                  onClick={() =>
                    dispatch({ type: "SET_COLOR", payload: color })
                  }
                ></div>
              ))}
            </div>
          )}

          {isTagCategoreis && (
            <div className="tagCategories_container">
              {TagCategories.map(({ tag, id }) => (
                <div
                  key={id}
                  onClick={() => dispatch({ type: "SET_TAG", payload: tag })}
                >
                  {tag}
                </div>
              ))}
            </div>
          )}

          {tags !== "" && <div className="displayTags">{tags}</div>}

          <div className="addButton flex">
            <button type="submit" className="btn btn__primary">
              {editNotes ? "Edit" : "Add"}
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};
