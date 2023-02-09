import React from "react";

import { Link, Route, Routes } from "react-router-dom";
import Returns from "../components/Returns";
import Average from "../components/Average";

import "../App.css";

function Dashboard() {
  return (
    <div>
      
      <div className="flex h-screen bg-purple-400">
        <div className="m-auto bg-white rounded-md">
          <div className="grid grid-cols-1">
            
            <div className="p-10 mx-8">
              <div className="text-center my-6">
                <div className="secular-one text-slate-500 my-4 text-4xl">
                  Stock Market Assistant
                </div>
                <div className="text-zinc-400 font-thin">
                  <button className="rounded m-2 px-2 py-1 text-white font-bold bg-orange-400 hover:bg-orange-500">
                    <Link to="/">Average Price</Link>
                  </button>
                  <button className="rounded m-2 px-2 py-1 text-white font-bold bg-orange-400 hover:bg-orange-500">
                    <Link to="/returns">Returns</Link>
                  </button>
                </div>
              </div>

              <Routes>
                <Route path="/" element={<Average />} />
                <Route path="/returns" element={<Returns />} />
              </Routes>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
