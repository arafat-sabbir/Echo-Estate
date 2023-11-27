import { MdDelete } from "react-icons/md";
import useReview from "../../../../Hooks/UseReview/useReview";
import SectionTitle from "../../../../Utils/SectionTitle/SectionTitle";

const LatestReview = () => {
    const {reviews} = useReview()
    return (
        <div className="container mx-auto">
            <SectionTitle title={"Client Review"} subtitle={"See Our Client Latest Review"}></SectionTitle>
          <div className="grid grid-cols-3 gap-6 mb-10">
          {
            reviews.map(item =>   <div key={item._id} className="w-full hover:scale-105 duration-300 max-w-md px-8 py-4 mt-16 relative bg-white h-[250px] border border-dashed border-main rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-end">
              <img
                src={item.reviewerPhoto}
                className="object-cover w-20 h-20 border-2 border-main rounded-full dark:border-blue-400"
                alt=""
              />
            </div>
      
            <h2 className="text-sm mb-6 font-semibold text-gray-800 dark:text-white md:mt-0">
              {item.reviewDate}
            </h2>
            <h2 className="mt-2 text-xl mb-2 font-semibold text-gray-800 dark:text-white md:mt-0">
              {item.propertyTitle}
            </h2>
      
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
              {item.review}
            </p>
      
            <div className="flex justify-between items-center mt-6 mb-3 absolute bottom-2 right-0 left-0 px-10 ">
              <p
                className="text-lg font-medium  dark:text-blue-300"
                tabIndex="0"
              >
               Reviewer :  <span className="text-main">{item.reviewerName}</span>
              </p>
            </div>
          </div>)
           } 
          </div>
        </div>
    );
};

export default LatestReview;