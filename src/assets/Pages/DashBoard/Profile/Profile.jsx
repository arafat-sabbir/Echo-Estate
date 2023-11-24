import useGetUser from "../../../../Hooks/GetUserInfo/useGetUser";

const Profile = () => {
  const { userinfo } = useGetUser();
  const role = userinfo.role;
  return (
    <div className="min-w-[calc(100vw-530px)] mx-auto min-h-[100vh]  flex justify-center items-center">
      <div className="">
        <img
          className="w-60 h-60 rounded-xl mx-auto border-dashed border-main border"
          src={userinfo?.photo}
          alt=""
        />
        <div className="text-center">
          <h3 className="text-3xl font-semibold mt-6">
            {" "}
            Your Name : <span className="text-main">{userinfo?.name}</span>
          </h3>
          <h3 className="text-2xl font-semibold mt-6">
            {" "}
            Your Email: <span className="text-main">{userinfo?.email}</span>
          </h3>
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
