import { useEffect } from "react";
import Container from "../../../Utils/Container/Container";
import useProperties from "../../../Hooks/GetProperties/useProperties";
import PropertyCard from "./PropertyCard";
import Loading from "../../../Components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/AxiosPublic/useAxiosPublic";

const Allproperties = () => {
  const axiosPublic = useAxiosPublic()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const {data:properties=[],refetch,isLoading,isError}  = useQuery({
    queryKey:["properties"],
    queryFn:async()=>{
      const res = await axiosPublic.get('/getVerifiedProperties')
      return res.data;
    }
  })
  if(isLoading){
    return <Loading></Loading>
  }
  return (
   <div className="my-10">
     <Container>
      <h3 className="text-center text-3xl text-main font-semibold">Total Properties : {properties?.length}</h3>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 my-10">
     {
        properties?.map(property=> <PropertyCard property={property} key={property._id}></PropertyCard> )
      }
     </div>
    </Container>
   </div>
  );
};

export default Allproperties;
