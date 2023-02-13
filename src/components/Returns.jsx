import React from "react";

import './css/Components.css';

function Returns() {

  const calcReturns = (event) => {

    let shares = parseInt(document.getElementById("totalShares").value);
    let avgVal = parseFloat(document.getElementById("avgVal").value);
    let currentVal = parseFloat(document.getElementById("currentVal").value);

    let returns = (shares*currentVal) - (shares*avgVal);

    document.getElementById("returnsBox").innerHTML = ": ₹" + returns.toFixed(2);

    event.preventDefault();
  };

  return (
    <>
        <div className="my-4">
          <label className="block">
            <input
              type="number"
              id="totalShares"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Enter number of stocks"
            />
          </label>
        </div>

        <div className="my-4">
          <label className="block">
            <input
              type="text"
              id="avgVal"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Enter Average value of the stock"
              autoComplete="off"
              />
          </label>
        </div>

        <div className="my-4">
          <label className="block">
            <input
              type="text"
              id="currentVal"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Enter current Market Value of that stock"
              autoComplete="off"
              />
          </label>
        </div>

        <div
          className="p-2 my-8 unselectable cursor-pointer flex w-full justify-center bg-green-400 hover:bg-green-500 text-white font-medium rounded"
          onClick={calcReturns}>
          Returns<div id="returnsBox"></div>
        </div>
    </>
  );
}

export default Returns;
