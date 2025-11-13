import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import React from "react";

const DownlaodPdf = ({ contributions }) => {
  const downlaodReport = () => {
    const doc = new jsPDF();
    const columns = ["Title", "Category", "Date", "Amount($)", "Location"];
    const rows = contributions.map((contribute) => [
      contribute.title,
      contribute.category,
      contribute.date,
      contribute.amount,
      contribute.address,
    ]);
    autoTable(doc, { head: [columns], body: rows });
    doc.save("Contribution-Report.pdf");
  };
  return (
    <div>
      <button
        onClick={downlaodReport}
        className="btn w-full bg-primary text-white font-bold text-md rounded-md shadow-md hover:bg-accent transition-transform hover:scale-105 mt-4 col-span-2"
      >
        Download report
      </button>
    </div>
  );
};

export default DownlaodPdf;
