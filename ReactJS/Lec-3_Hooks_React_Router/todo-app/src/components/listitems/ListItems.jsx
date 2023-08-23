const ListItems = (props) => {
  const { tasks , removeTask } = props;
  console.log(tasks);
    return (
      <ul>
        {
          tasks.map((task) => {
            return <li onClick={removeTask} key={task.id} id={ task.id}> { task.taskName } </li>
          })
        }
      </ul>
  )
}

export default ListItems;