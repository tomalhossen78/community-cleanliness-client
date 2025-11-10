import React, { use, useEffect, useState } from "react";
import { DateFormat } from "../utility/DateFormat";
import { AuthContext } from "../Context/AuthContext";
import Container from "../Componets/Container";

const MyIssues = () => {
  const [issues, setIssues] = useState([]);
  const { user } = use(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:3000/my-issues?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIssues(data);
      });
  }, [user]);
  return (
    <Container>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Issue Title</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {issues.map((issue, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">{issue.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {issue.cat}
                  </span>
                </td>
                <td>${issue.amount}</td>
                <td>{DateFormat(issue.date)}</td>
                <th>
                  <button
                    className="btn btn-success text-white
                   btn-xs"
                  >
                    Update
                  </button>
                </th>
                <th>
                  <button
                    className="btn btn-warning text-white
                   btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default MyIssues;
