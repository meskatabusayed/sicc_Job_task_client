import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTodo = () => {
  const axios = useAxiosPublic();
  const { data, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await axios("/todo");
      return res.data;
    },
  });
  const todotask = data?.data?.filter((items) => items.status === "incomplete");
  const completetask = data?.data?.filter(
    (items) => items.status === "complete"
  );
  return { data, refetch, todotask, completetask };
};

export default useTodo;