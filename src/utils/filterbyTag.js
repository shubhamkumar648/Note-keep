export const FilterbyTag =(data,tags) => {
    if(tags.length) {
       return data.filter(item => tags.includes(item.tags))
    }
  else {
    return data

  }
}