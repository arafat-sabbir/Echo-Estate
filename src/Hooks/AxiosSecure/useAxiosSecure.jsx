import axios from "axios";

const instance = axios.create({
    baseURL:'https://echo-state-server.vercel.app/api',
    withCredentials:true
})

const useAxiosSecure = () => {

return instance;
};

export default useAxiosSecure;