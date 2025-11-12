import React from "react";
import Container from "../Componets/Container";
import { useNavigate } from "react-router";

const IssuesNotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <div className="flex flex-col justify-center items-center space-y-4 my-4">
          <img
            className="p-6 h-[400px]"
            src="https://i.ibb.co.com/fcj6myR/App-Error.png"
          />
          <h1 className="text-4xl text-[#001931] font-bold">
            Oops, Issues not found!
          </h1>
          <p className="text-[#627382]">
            The issues you are requesting is not found on our system. please try
            another issues.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="btn px-8 text-white bg-gradient-to-tl from-blue-700 to-blue-500"
          >
            Go Back
          </button>
        </div>
      </Container>
    </div>
  );
};

export default IssuesNotFoundPage;
