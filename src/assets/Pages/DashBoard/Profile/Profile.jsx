import Swal from "sweetalert2";
import Loading from "../../../../Components/Loading/Loading";
import useGetUser from "../../../../Hooks/GetUserInfo/useGetUser";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";

const Profile = () => {
  const { userinfo, refetch, isLoading } = useGetUser();
  const agentReq = userinfo.agentReq;
  const axiosSecure = useAxiosSecure()
  const handleAgentReq = (id, e) => {
    e.preventDefault()
    const form = e.target;
    const twitter = form.twitter.value
    const facebook = form.facebook.value
    const linkedin = form.linkedin.value
    const whatsapp = form.whatsapp.value
    const agentInfo = { twitter, facebook, linkedin, whatsapp }
    refetch()
    if (userinfo.agentReq) {
      return toast.error("Please Wait You've Already Send A Request To The Admin")
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to Be A Agent!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#0e3c49da",
      confirmButtonText: "Yes, Send Agent Request!",
    }).then((result) => {
      if (result.isConfirmed) {
        const swal = toast.loading("Making User Agent");
        axiosSecure.patch(`/agentRequest/${id}`, agentInfo).then((res) => {
          if (res.data.modifiedCount > 0) {
            toast.success(`Your Agent Request Has Been Sent Please Wait For Admin Response`, { id: swal });
          }
        });
      }
      console.log(id);
    });
  };
  const role = userinfo.role;
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className="min-w-[calc(100vw-530px)] mx-auto min-h-[100vh] p-4  flex justify-center items-center">
      <div className="">
        <img
          className="w-60 h-60 rounded-full mx-auto border-dashed border-main border"
          src={userinfo?.photo}
          alt=""
        />
        <div className="text-center">
          <h3 className="text-3xl font-semibold mt-6">

            Your Name : <span className="text-main">{userinfo?.name}</span>
          </h3>
          <h3 className="text-2xl font-semibold mt-6">

            Your Email: <span className="text-main">{userinfo?.email}</span>
          </h3>
          {agentReq && role === "user" && <p className="py-2 font-semibold text-lg text-red-500/70">Your Agent Request Is Pending Please Wait For Admin Approval</p>}
          {
            role === "user" && !agentReq &&
            <form onSubmit={(e) => handleAgentReq(userinfo._id, e)} className="flex bg-gray-50/50 px-10 py-1 flex-col">
              <h1 className="font-semibold text-xl  mt-6">Update Your Info To Become A Agent</h1>
              <input type="number" name="whatsapp" required className="input-field my-2 mx-2" placeholder="Your WhatsApp Number" />
              <input type="text" name="linkedin" required className="input-field my-2 mx-2" placeholder="Linkedin Profile" />
              <input type="text" name="facebook" required className="input-field my-2 mx-2" placeholder="Facebook Profile" />
              <input type="text" name="twitter" required className="input-field my-2 mx-2" placeholder="Twitter Profile" />
              <button type="submit" className={`${agentReq ? 'relative px-8 py-2  my-4 tracking-wider font-semibold  bg-gray-500 text-white  isolation-auto z-10 border rounded-full border-dashed border-main before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#072730] hover:text-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 ' : 'relative px-8 py-2  my-4 tracking-wider font-semibold  bg-main text-white  isolation-auto z-10 border rounded-full border-dashed border-main before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#072730] hover:text-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700'}  `}>Become An Agent</button>
            </form>
          }
          {role !== "user" && (
            <h3 className="text-2xl font-semibold mt-6">
              You are a : <span className="uppercase text-main">{role}</span>
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
