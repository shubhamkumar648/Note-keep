export const filterReducerFunction = (state, { type, payload }) => {
  switch (type) {
    case "PRIORITY_ORDER":
      const updatePriorties = state.priority.includes(payload)
        ? state.priority.filter((item) => item !== payload)
        : [...state.priority, payload];
      return { ...state, priority: updatePriorties };

    case "SORT_BY_TAGS":
      const updateTags = state.tags.includes(payload)
        ? state.tags.filter((item) => item !== payload)
        : [...state.tags, payload];
      return { ...state, tags: updateTags };

    case "SORT_BY_DATE":
      return { ...state, sortBydate: payload };

    case "CLEAR_ALL":
      return {
        priority: [],
        tags: [],
        sortBydate: "",
      };

    default:
      return state;
  }
};
