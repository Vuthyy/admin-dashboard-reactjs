import React from "react";
import "./dashboard.css";
import Cards from "./Cards";
import Reports from "./Reports";
import TopSelling from "./TopSelling";
import RecentActivity from "./RecentActivity";
import RecentSales from "./RecentSales";
import BudgetReport from "./BudgetReport";
import WebTraffic from "./WebTraffic";
import News from "./News";

const Dashboard = () => {
  return (
    <section className="dashboard section">
      <div className="row d-flex justify-content-between">
        <div className="col-lg-8 col-xl-9">
          <div className="row">
            <Cards />
            <div className="col-12">
              <Reports />
            </div>
            <div className="col-12">
              <RecentSales />
            </div>
            <div className="col-12">
              <TopSelling />
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <RecentActivity />
          <BudgetReport />
          <WebTraffic />
          <News />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
