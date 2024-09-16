import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const createdAt = console.log(email, name, password);
    createUser(email, password)
      .then((result) => {
        console.log(result);
        const createdAt = result.user?.metadata?.creationTime;
        const lastLoggedAt = result.user?.metadata?.lastSignInTime;
        const user = { email, name, password, createdAt, lastLoggedAt };
        fetch("https://london-brew-co-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        Swal.fire({
          title: "Success!",
          text: "User Created Successfully!",
          icon: "success",
          confirmButtonText: "Done!",
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 my-10">
      <h2 className="text-3xl font-bold mb-4 text-center text-rancho">
        Sign Up
      </h2>

      <form onSubmit={handleSubmit} className="text-raleway">
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-[#E3B577]  input-warning"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-[#E3B577]  input-warning"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border border-[#E3B577]  input-warning"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#E3B577]  input-warning text-white hover:text-black py-2 "
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
