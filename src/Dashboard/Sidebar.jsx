import { Link } from "react-router-dom";
import { FcTodoList } from "react-icons/fc";
import { BsPencilSquare } from "react-icons/bs";
import Avater from "../components/shared/Avater";
import useAuth from "../hooks/useAuth";
import useTodo from "../hooks/useTodo";

const Sidebar = () => {
  const { user } = useAuth();
  const { data, todotask, completetask } = useTodo();
  return (
    <div>
      <div className="text-center mt-5 mb-20">
        <Avater size={"w-32"}></Avater>
        <h1 className="text-2xl font-bold">{user}</h1>
      </div>
      <div>
        <Link
          className="border-b pl-8 xl:pl-20 py-2  font-bold flex  items-center  gap-5 hover:bg-gray-300"
          to={"/dashboard/todo"}
        >
          <FcTodoList className="text-xl" />
          <span>To-Do ({todotask?.length})</span>
        </Link>
        <Link
          className="border-b pl-8 xl:pl-20 py-2  font-bold flex  items-center  gap-5 hover:bg-gray-300"
          to={"/todo"}
        >
          <FcTodoList className="text-xl" />
          <span>Ongoing (07)</span>
        </Link>
        <Link
          className="border-b pl-8 xl:pl-20 py-2  font-bold flex  items-center  gap-5 hover:bg-gray-300"
          to={"/todo"}
        >
          <FcTodoList className="text-xl" />
          <span>Complete ({completetask?.length})</span>
        </Link>
        <Link
          className="border-b pl-8 xl:pl-20 py-2  font-bold flex  items-center  gap-5 hover:bg-gray-300"
          to={"/dashboard/createtodo"}
        >
          <BsPencilSquare className="text-xl" />
          <span>Create To-Do </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;