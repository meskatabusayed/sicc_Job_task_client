import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSingleTodo = (id) => {
  const axios = useAxiosPublic();
  const { data, refetch } = useQuery({
    queryKey: ["single"],
    queryFn: async () => {
      const res = await axios(`/todo/${id}`);
      return res.data;
    },
  });
  return { data, refetch };
};

export default useSingleTodo;