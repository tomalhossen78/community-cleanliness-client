import React from "react";
import Banner from "../Componets/Banner";
import RecentComplaints from "../Componets/RecentComplaints";
import CategorySection from "../Componets/CategorySection";
import CommunityStats from "../Componets/CommunityStats ";

const Home = () => {
  return (
    <div>
      <Banner />
      <RecentComplaints />
      <CategorySection />
      <CommunityStats />
    </div>
  );
};

export default Home;
