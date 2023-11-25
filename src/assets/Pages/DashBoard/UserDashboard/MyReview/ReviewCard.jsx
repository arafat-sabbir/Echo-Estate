import { MdDelete } from "react-icons/md";

const ReviewCard = ({ item, handleDelete }) => {
  return (
    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white border border-dashed border-main rounded-lg shadow-lg dark:bg-gray-800">
      <div className="flex justify-center -mt-16 md:justify-end">
        <img
          src={item.reviewerPhoto}
          className="object-cover w-20 h-20 border-2 border-main rounded-full dark:border-blue-400"
          alt=""
        />
      </div>

      <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
        {item.propertyTitle}
      </h2>

      <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
        {item.review}
      </p>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => handleDelete(item._id)}
          className="flex justify-center items-center gap-2 w-12 h-12 cursor-pointer rounded-full shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
        >
          <MdDelete></MdDelete>
        </button>
        <p
          className="text-lg font-medium text-main dark:text-blue-300"
          tabIndex="0"
        >
          {item.agentName}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;