import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Container from "../Componets/Container";
import { DateFormat } from "../utility/DateFormat";
import Loading from "../Componets/Loading";

const MyContribution = () => {
  const { user } = use(AuthContext);
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:3000/my-contributions?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setContributions(data);
        setLoading(false);
      });
  }, [user]);
  if (loading) {
    return <Loading />;
  }
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
              <th>Paid Amount</th>
              <th>Date</th>
              <th>Download report</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {contributions.map((contribution, index) => (
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
                      <div className="font-semibold">{contribution.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {contribution.category}
                  </span>
                </td>
                <td>${contribution.amount}</td>
                <td>{DateFormat(contribution.date)}</td>
                <th>
                  <button className="btn btn-secondary btn-xs">Download</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default MyContribution;
