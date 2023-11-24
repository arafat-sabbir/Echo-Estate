import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";
import useAuth from "../../../../../Auth/UseAuth/useAuth";

const AddedProperties = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const {data} = useQuery({
        queryKey:["properties",user],
        queryFn:async()=>{
            const res = axiosSecure.get(`/getProperty?email=shanto018235@gmail.com`)
            return res.data;
        }
    })
    console.log(data);
    return (
        <div>
            Added Properties
        </div>
    );
};

export default AddedProperties;