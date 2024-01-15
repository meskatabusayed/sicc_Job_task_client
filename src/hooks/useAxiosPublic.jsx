import axios from "axios";

export const axiosPublic = axios.create({
  baseURL:'https://scic-task-ph-server.vercel.app',
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;