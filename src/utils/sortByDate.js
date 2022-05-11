 export const sortByDateFun = (state,data) => {

switch(state.sortBydate) {

    case "oldest":
         return[...data].sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt));

         case "latest":

         return[...data].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));

         default:

         return data;

}

}