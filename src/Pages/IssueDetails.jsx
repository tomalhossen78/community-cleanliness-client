import React, { use, useEffect, useState } from "react";
import Container from "../Componets/Container";
import { useParams } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../Componets/Loading";

const IssueDetails = () => {
  const [details, setdetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { image, title, cat, location, date, amount, description } = details;
  useEffect(() => {
    fetch(`http://localhost:3000/issues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setdetails(data);
        // console.log(data);
        setLoading(false);
      });
  }, [id]);
  const formattedDate = new Date(date).toLocaleString("en-US", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="bg-base-200 py-16 min-h-[90vh]">
      <Container className="flex bg-base-100 shadow-2xl p-8 rounded-2xl gap-8 items-center">
        <div className="flex-1">
          <img className="rounded-xl" src={image} alt="" />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-blue-700">{title}</h1>
          <p className="text-red-600">{cat}</p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-base-300 p-2">
              <FaLocationDot color="blue" size={20} />
              <p className="text-blue-700 text-lg font-medium">{location}</p>
            </div>
            <div className="flex items-center text-green-600 gap-2 p-2 bg-base-300">
              <IoIosTime size={20} />

              <p className="text-lg font-medium">{formattedDate}</p>
            </div>
          </div>
          <div className="font-semibold text-2xl text-pink-500">$ {amount}</div>
          <div className="bg-blue-100 px-4 py-6 rounded-xl my-4">
            {description}
          </div>
          <div className="flex gap-4">
            <button className="btn flex-1 btn-md text-left bg-linear-to-r from-green-500 to-green-700 text-white">
              Pay Clean-Up Contribution
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IssueDetails;
