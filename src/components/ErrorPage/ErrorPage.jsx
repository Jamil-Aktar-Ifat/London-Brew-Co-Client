import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const ErrorPage = () => {
  return (
    <div className="">
      <Link to="/">
        <div className="mt-10 flex items-center gap-2 justify-center">
          <div className="text-lg">
            <FaArrowLeftLong className="font-extrabold"></FaArrowLeftLong>
          </div>
          <h2 className="text-rancho text-2xl">Back to home</h2>
        </div>
      </Link>
      <div className="flex justify-center">
        <img src="/images/404/404.gif" alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
