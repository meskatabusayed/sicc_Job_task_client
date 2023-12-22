import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import useTodo from "../../hooks/useTodo";
import { useLocation } from "react-router-dom";
import useSingleTodo from "../../hooks/useSingleTodo";

const CreateToDo = () => {
  const { user } = useAuth();
  const [priority, setPriority] = useState("low");
  const axios = useAxiosPublic();
  const { refetch } = useTodo();
  const location = useLocation();
  console.log(location);
  const { data: singletodo, refetch: auto } = useSingleTodo(location?.state);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const getPriority = priority;
    const title = data.title;
    const des = data.des;
    const date = data.date;

    const newList = {
      title,
      des,
      date,
      priority: getPriority,
      email: user?.email,
      status: "incomplete",
    };

    const res = await axios.post("/todo", newList);
    refetch();
    console.log(res.data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold  capitalize">create new tasks</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border my-10 p-5 relative"
      >
        <div className="flex items-center gap-5">
          <div className="w-full">
            <h3 className="mb-2 font-bold">Title :</h3>
            <input
              defaultValue={singletodo?.data?.title}
              name="title"
              placeholder="inter your title"
              className="outline-none w-full border p-2"
              {...register("title")}
            />
          </div>

          <div className="w-full">
            <h3 className="mb-2 font-bold">Date :</h3>
            <input
              defaultValue={singletodo?.data?.date}
              name="date"
              type="date"
              className="outline-none w-full border p-2"
              {...register("date")}
            />
          </div>
        </div>
        <div className=" my-5 ">
          <h3 className="mb-2 font-bold">Description :</h3>
          <textarea
            defaultValue={singletodo?.data?.des}
            name="des"
            placeholder="description"
            className="outline-none w-full border p-2 min-h-36"
            {...register("des")}
          />
        </div>
        <div className=" my-5 flex items-center gap-5">
          <h3 className=" font-bold">priority :</h3>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 ">
              <p
                onClick={() => setPriority("low")}
                className={`p-2 inline-block border rounded-full cursor-pointer  hover:bg-gray-400 ${
                  priority == "low" && "bg-gray-400"
                }`}
              ></p>
              <p>Low</p>
            </div>
            <div className="flex items-center gap-2 ">
              <p
                onClick={() => setPriority("moderate")}
                className={`p-2 inline-block border rounded-full cursor-pointer  hover:bg-gray-400 ${
                  priority == "moderate" && "bg-gray-400"
                }`}
              ></p>
              <p>Moderate</p>
            </div>
            <div className="flex items-center gap-2 ">
              <p
                onClick={() => setPriority("high")}
                className={`p-2 inline-block border rounded-full cursor-pointer  hover:bg-gray-400 ${
                  priority == "high" && "bg-gray-400"
                }`}
              ></p>
              <p>High</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 lg:bottom-10 right-5 flex items-center gap-5">
          {" "}
          <input
            className="border cursor-pointer  px-6"
            type="button"
            onClick={() => reset()}
            value="reset"
          />
          <input
            className="border cursor-pointer  px-6"
            type="submit"
            value={"Add"}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateToDo;