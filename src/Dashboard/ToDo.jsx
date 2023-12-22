import TodoList from "../../components/ui/TodoList";
import useTodo from "../../hooks/useTodo";

const ToDo = () => {
  const { data, refetch, todotask, completetask } = useTodo();

  return (
    <div>
      <h1 className="text-3xl font-bold">TO-DO</h1>
      <div className="my-10">
        {todotask?.map((todo) => (
          <TodoList
            key={todo._id}
            sta={"complete"}
            todo={todo}
            refetch={refetch}
          ></TodoList>
        ))}
      </div>
      <hr />
      <div className="my-10">
        {completetask?.map((todo) => (
          <TodoList
            key={todo._id}
            sta={"incomplete"}
            todo={todo}
            refetch={refetch}
          ></TodoList>
        ))}
      </div>
    </div>
  );
};

export default ToDo;