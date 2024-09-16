import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    fetch(`https://london-brew-co-server.vercel.app/users/${id}`, {
      method: "DELETE",
    });
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
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        const remainingUsers = users.filter((user) => user._id !== id);
        setUsers(remainingUsers);
      }
    });

    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.deletedCount > 0) {
    //       Swal.fire({
    //         title: "Deleted!",
    //         text: "Your coffee has been deleted.",
    //         icon: "success",
    //       });
    //       console.log("deleted successfully");
    //       const remainingUsers = users.filter((user) => user._id !== id);
    //       setUsers(remainingUsers);
    //     }
    //   });
  };
  return (
    <div>
      <h2 className="text-2xl text-center text-rancho mt-4">User Details</h2>
      <div className="overflow-x-auto">
        <table className="table border max-w-6xl mx-auto my-10">
          {/* head */}
          <thead>
            <tr>
              <th className="border">Name</th>
              <th className="border">Email</th>
              <th className="border">Created At</th>
              <th>Last Logged In</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                {/* <th>1</th> */}
                <th className="border">{user.name}</th>
                <td className="border">{user.email}</td>
                <td className="border">{user.createdAt}</td>
                <td>{user.lastLoggedAt}</td>
                <td>
                  <button
                    className="px-3 py-1 bg-[#E3B577] hover:text-black text-white text-rancho text-lg text-center"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
