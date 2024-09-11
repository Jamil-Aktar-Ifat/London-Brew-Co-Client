import { IoIosEye } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, details, category, photoURL } =
    coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5005/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
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
        <Link to={`/updateCoffee/${_id}`}>
          <button className="bg-[#3C393B] p-1 text-lg text-white">
            <MdEdit />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-[#EA4744] p-1 text-lg text-white"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
