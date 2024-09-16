import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = {
          email,
          lastLoggedAt: result.user?.metadata?.lastSignInTime,
        };
        //update last logged at in the database
        fetch("https://london-brew-co-server.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 my-10">
      <h2 className="text-3xl font-bold mb-4 text-center text-rancho">
        Sign In
      </h2>

      <form onSubmit={handleSubmit} className="text-raleway">
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
          className="w-full bg-[#E3B577]  input-warning text-white py-2 "
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
