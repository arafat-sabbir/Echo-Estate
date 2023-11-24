import { useEffect } from "react";
import Container from "../../../Utils/Container/Container";
import useProperties from "../../../Hooks/GetProperties/useProperties";
import PropertyCard from "./PropertyCard";

const Allproperties = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const { properties } = useProperties();
  console.log(properties);
  return (
   <div className="my-10">
     <Container>
      <h3 className="text-center text-3xl text-main font-semibold">Total Properties : {properties?.length}</h3>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
     {
        properties?.map(property=> <PropertyCard property={property} key={property._id}></PropertyCard> )
      }
     </div>
    </Container>
   </div>
  );
};

export default Allproperties;
