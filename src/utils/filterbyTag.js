export const FilterbyTag = (state,data) => {

   const {work,daily,other,home,weekly} = state
    const TagFilter = []

    if(work ===true) {

       TagFilter = [
           ...TagFilter,
          data.filter(item => item.tags === "work")
        ]
    }
    if(home ===true) {

        TagFilter = [
            ...TagFilter,
           data.filter(item => item.tags === "home")
         ]
     }
 
     if(daily ===true) {

        TagFilter = [
            ...TagFilter,
           data.filter(item => item.tags === "daily")
         ]
     }
 
     if(other ===true) {

        TagFilter = [
            ...TagFilter,
           data.filter(item => item.tags === "other")
         ]
     }
     if(weekly ===true) {

        TagFilter = [
            ...TagFilter,
           data.filter(item => item.tags === "weekly")
         ]
     }
 
     return data
}