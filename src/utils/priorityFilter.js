export const priorityFilter = (state,data) => {
     
    switch(state) {
    
      case "high":
       console.log(data.filter(item => item.priority === "high")
       ,"hello priority");
      return data.filter(item => item.priority === "high")
    
      case "medium":
      return data.filter(item => item.priority === "medium")
    
      case "low":
        return data.filter(item => item.priority === "low")
    
        default:
    
        return data
    }
    
    }