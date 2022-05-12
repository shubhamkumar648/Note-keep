 export const sortByDateFun = (filterSortdate,data) => {
  
   switch(filterSortdate) {

    case "oldest":
        
         return[...data].sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt));
         
         case "latest":

         return[...data].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));

         default:

         return data;

}

}