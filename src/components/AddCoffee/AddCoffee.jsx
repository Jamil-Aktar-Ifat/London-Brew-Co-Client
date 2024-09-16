import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const category = form.category.value;
    const photoURL = form.url.value;
    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      details,
      category,
      photoURL,
    };
    console.log(newCoffee);

    // send data to the server
    fetch("https://london-brew-co-server.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully!",
            icon: "success",
            confirmButtonText: "Done!",
          });
          form.reset();
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
        <h2 className="text-center text-rancho text-4xl">Add New Coffee</h2>
        <p className="text-center text-raleway px-10 md:px-44">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form
          onSubmit={handleAddCoffee}
          className="mx-10 md:mx-28 text-raleway space-y-4 md:space-y-7"
        >
          <div className="md:flex justify-between space-y-2 md:space-y-0">
            <div className="space-y-1">
              <h2 className="font-semibold">Name</h2>
              <input
                className=" px-3 w-full md:w-[420px] py-2 text-sm border-[#E3B577]  input-warning "
                type="text"
                name="name"
                id="name"
                placeholder="Enter Coffee Name"
              />
            </div>
            <div className=" space-y-2 md:space-y-1">
              <h2 className="font-semibold">Chef</h2>
              <input
                className=" px-3 w-full md:w-[420px] py-2 text-sm border-[#E3B577]  input-warning "
                type="text"
                name="chef"
                id="chef"
                placeholder="Enter Chef Name"
              />
            </div>
          </div>
          <div className="md:flex justify-between space-y-2 md:space-y-0 border-[#E3B577]  input-warning ">
            <div className="space-y-1">
              <h2 className="font-semibold">Supplier</h2>
              <input
                className=" px-3 w-full md:w-[420px] py-2 text-sm border-[#E3B577]  input-warning "
                type="text"
                name="supplier"
                id="supplier"
                placeholder="Enter Coffee Supplier"
              />
            </div>
            <div className="space-y-1">
              <h2 className="font-semibold">Taste</h2>
              <input
                className=" px-3 w-full md:w-[420px] border-[#E3B577]  input-warning  py-2 text-sm"
                type="text"
                name="taste"
                id="taste"
                placeholder="Enter Coffee Taste"
              />
            </div>
          </div>
          <div className="md:flex justify-between space-y-2 md:space-y-0">
            <div className="space-y-1">
              <h2 className="font-semibold">Category</h2>
              <input
                className=" px-3 w-full md:w-[420px] py-2 text-sm border-[#E3B577]  input-warning "
                type="text"
                name="category"
                id="category"
                placeholder="Enter Coffee Category"
              />
            </div>
            <div className="space-y-1">
              <h2 className="font-semibold">Details</h2>
              <input
                className=" px-3 w-full md:w-[420px] py-2 text-sm border-[#E3B577]  input-warning "
                type="text"
                name="details"
                id="details"
                placeholder="Enter Coffee Details"
              />
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="font-semibold">Photo</h2>
            <input
              className=" w-full px-3 py-2 text-sm border-[#E3B577]  input-warning "
              type="url"
              name="url"
              id="url"
              placeholder="Enter photo URL"
              required
            />
          </div>
          <div className="border px-3 py-1 bg-[#E3B577] hover:text-black text-rancho text-lg text-center">
            <input type="submit" value="Add Coffee" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
