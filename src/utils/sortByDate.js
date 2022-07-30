export const sortByDateFun = (data, sortBydate) => {

  console.log(sortBydate);
  console.log(data,"datewala");

  switch (sortBydate) {
    case "oldest":
      return [...data].sort(
        (a, b) => new Date(a.CreatedAt) - new Date(b.CreatedAt)
      );

    case "latest":
      return [...data].sort(
        (a, b) => new Date(b.CreatedAt) - new Date(a.CreatedAt)
      );

    default:
      return data;
  }
};
