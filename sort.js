export function sortByDate(tasksBlock, isSortingAscending) {
    const tasks = Array.from(tasksBlock.children);
  
    const sortedTasks = tasks.slice().sort((taskA, taskB) => {
      const dateA = new Date(taskA.dataset.date);
      const dateB = new Date(taskB.dataset.date);

      if (isSortingAscending) {
        return dateA.getTime() - dateB.getTime(); // Ascending order
      } else {
        return dateB.getTime() - dateA.getTime(); // Descending order
      }
    });
  
    return sortedTasks;
}