import React, { useEffect, useState } from "react";
import Container from "./Container";
import Issue from "./issue";

const RecentComplaints = () => {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/recent-complaints")
      .then((res) => res.json())
      .then((data) => {
        setIssues(data);
        console.log(data);
      });
  }, []);
  return (
    <Container className="my-12">
      <h1 className="text-4xl font-semibold text-center mb-6">
        Recent Complaints
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {issues.map((issue) => (
          <Issue issue={issue} />
        ))}
      </div>
    </Container>
  );
};

export default RecentComplaints;
