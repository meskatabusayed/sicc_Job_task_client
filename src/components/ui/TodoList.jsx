import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AiFillEdit } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";

const TodoList = ({ todo, refetch, sta }) => {
  const navigate = useNavigate();
  const axios = useAxiosPublic();
  const { _id, title, des, data, email, priority, status } = todo;
  const handleComplete = async (id) => {
    const res = await axios.patch(`/todo/${id}`, { status: sta });

    refetch();
  };

  return (
    <div className="flex items-center gap-4 bg-gray-200 my-2 px-4 rounded-full duration-1000 ease-linear delay-500">
      <p
        onClick={() => handleComplete(_id)}
        className={`p-2 my-2 inline-block border rounded-full cursor-pointer    hover:bg-gray-400 ${
          priority == "high"
        } ${sta === "incomplete" ? "bg-gray-400" : "bg-white"}`}
      ></p>
      <TbListDetails
        className="cursor-pointer"
        // onClick={() => handleEdit(_id)}
      />

      <p className={`${sta === "incomplete" && "underline"}`}>{title}</p>
      <p className="ml-20 text-xs">( {priority} )</p>
      <Link to={`/dashboard/updatetodo/${_id}`}>
        <AiFillEdit className="ml-10 cursor-pointer text-xl" />
      </Link>
    </div>
  );
};

export default TodoList;