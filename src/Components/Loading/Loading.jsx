import { TraceSpinner } from "react-spinners-kit";

const Loading = () => {
  return (
    <div className="w-[100vw] mx-auto flex justify-center items-center h-[40vh]">
        <TraceSpinner size={50} frontColor="#FF5B22" />
    </div>
  );
};

export default Loading;
