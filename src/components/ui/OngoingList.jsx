import { AiFillEdit } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";

const OngoingList = ({ task }) => {
  console.log(task);
  const { title, des, priority } = task;
  return (
    <div className="flex items-center gap-4 bg-gray-200 my-2 px-4 rounded-full duration-1000 ease-linear delay-500">
      <p
        // onClick={() => handleComplete(_id)}
        className={`p-2 my-2 inline-block border rounded-full cursor-pointer    bg-gray-400 `}
      ></p>
      <TbListDetails
        className="cursor-pointer"
        // onClick={() => handleEdit(_id)}
      />
      <p className="text-xs"> {title} </p>
      <AiFillEdit
        // onClick={() => handleEdit(_id)}
        className="ml-10 cursor-pointer text-xl"
      />
    </div>
  );
};

export default OngoingList;