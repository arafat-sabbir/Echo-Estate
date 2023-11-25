import toast from "react-hot-toast";
import Button from "../../Shared/Button";
import useGetUser from "../../Hooks/GetUserInfo/useGetUser";
import useAxiosSecure from "../../Hooks/AxiosSecure/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const Review = ({ property }) => {
  const { userinfo } = useGetUser();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()
  const handleCancel = (e) => {
    e.preventDefault();
    document.getElementById("my_modal_5").close();
    toast.error("Review Canceled");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toDateString();
    console.log(date);
    document.getElementById("my_modal_5").close();
    const reviewdetail = e.target.review.value;
    if (!reviewdetail) {
      return toast.error("Review Can't Be Empty");
    }
    if (userinfo.role === "user") {
      const review = {
        review: reviewdetail,
        reviewerName: userinfo.name,
        reviewerEmail: userinfo.email,
        reviewerPhoto: userinfo.photo,
        reviewDate: date,
        propertyTitle: property.propertyTitle,
        propertyId: property._id,
        agentName:property.agentName,
      };
      axiosSecure.post("/addReview", review).then((res) => {
        if (res.data.insertedId) {
          toast.success("Review Submitted");
          navigate("/dashboard/myReview")
        }
      });
    } else {
      return toast.error(`${userinfo.role} "Cant Review Properties"`);
    }
  };

  return (
    <>
      <div
        className=""
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <Button title={"Review"}></Button>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form className="p-4 md:p-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Review
                </label>
                <textarea
                  name="review"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write Your Review About The Property"
                ></textarea>
              </div>
            </div>
            <div className="modal-action">
              <div className="flex gap-4 justify-center items-center">
                <button
                  onClick={handleCancel}
                  className="relative px-8 py-2  bg-main text-white  isolation-auto z-10 border rounded-full border-dashed border-main 
    before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#072730] hover:text-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="relative px-8 py-2  bg-main text-white  isolation-auto z-10 border rounded-full border-dashed border-main 
    before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#072730] hover:text-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Review;
