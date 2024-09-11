import { IoIosEye } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
  const { name, chef, supplier, taste, details, category, photoURL } = coffee;

  return (
    <div className="flex items-center gap-3  p-5 bg-[#F5F4F1]">
      {/* Image */}
      <div>
        <img className="w-52 h-auto" src={photoURL} alt={name} />
      </div>

      {/* Coffee details */}
      <div className="flex-1">
        <p>
          <span className="font-semibold">Name: </span> {name}
        </p>
        <p>
          <span className="font-semibold">Chef: </span> {chef}
        </p>
        <p>
          <span className="font-semibold">Supplier: </span> {supplier}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col gap-2">
        <button className="bg-[#D2B48C] p-1 text-lg text-white">
          <IoIosEye />
        </button>
        <button className="bg-[#3C393B] p-1 text-lg text-white">
          <MdEdit />
        </button>
        <button className="bg-[#EA4744] p-1 text-lg text-white">
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
