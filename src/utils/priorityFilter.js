export const priorityFilter = (data,priority) => {
  if (priority.length) {
    return data.filter(item => priority.includes(item.priority));
  } else {
    return data;
  }
};

