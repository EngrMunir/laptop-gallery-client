import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://laptop-gallery-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;