import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, details, category, photoURL } =
    coffee;
  console.log(coffee);
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const category = form.category.value;
    const photoURL = form.url.value;

    const updatedCoffee = {
      _id,
      name,
      chef,
      supplier,
      taste,
      details,
      category,
      photoURL,
    };
    console.log(updatedCoffee);

    // send data to the server
    fetch(`http://localhost:5005/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully!",
            icon: "success",
            confirmButtonText: "Done!",
          });
        }
      });
  };
  return (
    <div className="max-w-6xl mx-auto">
      <Link to="/">
        <div className="mt-10 flex items-center gap-2">
          <div className="text-lg">
            <FaArrowLeftLong className="font-extrabold"></FaArrowLeftLong>
          </div>
          <h2 className="text-rancho text-2xl">Back to home</h2>
        </div>
      </Link>
      <div className="bg-[#F4F3F0]  mt-4 mb-20 py-20  space-y-5">
        <h2 className="text-center text-rancho text-4xl">
          Update Existing Coffee Details
        </h2>
        <p className="text-center text-raleway px-10 md:px-44">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form
          onSubmit={handleUpdateCoffee}
          className="mx-10 md:mx-28 text-raleway space-y-4 md:space-y-7"
        >
          <div className="md:flex justify-between space-y-2 md:space-y-0">
            <div className="space-y-1">
              <h2 className="font-semibold">Name</h2>
              <input
                className=" px-3 w-full md:w-[420px] py-2 text-sm"
                type="text"
                name="name"
                id="name"
                defaultValue={name}
                placeholder="Enter Coffee Name"
              />
            </div>
            <div className=" space-y-2 md:space-y-1">
              <h2 className="font-semibold">Chef</h2>
              <input
                className=" px-3 w-full md:w-[420px] py-2 text-sm"
                type="text"
                name="chef"
                id="chef"
                defaultValue={chef}
                placeholder="Enter Chef Name"
              />
            </div>
          </div>
          <div className="md:flex justify-between space-y-2 md:space-y-0">
            <div className="space-y-1">
              <h2 className="font-semibold">Supplier</h2>
              <input
                className=" px-3 w-full md:w-[420px] py-2 text-sm"
                type="text"
                name="supplier"
                id="supplier"
                defaultValue={supplier}
                placeholder="Enter Coffee Supplier"
              />
            </div>
            <div className="space-y-1">
              <h2 className="font-semibold">Taste</h2>
              <input
                className=" px-3 w-full md:w-[420px] py-2 text-sm"
                type="text"
                name="taste"
                id="taste"
                defaultValue={taste}
                placeholder="Enter Coffee Taste"
              />
            </div>
          </div>
          <div className="md:flex justify-between space-y-2 md:space-y-0">
            <div className="space-y-1">
              <h2 className="font-semibold">Category</h2>
              <input
                className=" px-3 w-full md:w-[420px] py-2 text-sm"
                type="text"
                name="category"
                id="category"
                defaultValue={category}
                placeholder="Enter Coffee Category"
              />
            </div>
            <div className="space-y-1">
              <h2 className="font-semibold">Details</h2>
              <input
                className=" px-3 w-full md:w-[420px] py-2 text-sm"
                type="text"
                name="details"
                id="details"
                defaultValue={details}
                placeholder="Enter Coffee Details"
              />
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="font-semibold">Photo</h2>
            <input
              className=" w-full px-3 py-2 text-sm"
              type="url"
              name="url"
              id="url"
              defaultValue={photoURL}
              placeholder="Enter photo URL"
            />
          </div>
          <div className="border px-3 py-1 bg-[#E3B577] hover:text-black text-rancho text-lg text-center">
            <input type="submit" value="Update Coffee Details" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
