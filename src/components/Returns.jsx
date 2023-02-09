import React from "react";

function Returns() {

  const calcAvg = (event) => {

    let shares = parseInt(document.getElementById("totalShares").value);
    let returns = parseFloat(document.getElementById("returns").value);

    console.log(shares);
    console.log(returns);

    document.getElementById("avgBox").innerHTML = returns.toFixed(2);

    event.preventDefault();
  };

  return (
    <>
      <form>
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
              id="marketVal"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Enter Market value of single share"
              autoComplete="off"
            />
          </label>
        </div>

        <div className="my-4">
          <label className="block">
            <input
              type="text"
              id="avgVal"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Enter Average value of the shares bought"
              autoComplete="off"
            />
          </label>
        </div>

        <button
          className="p-2 my-8 flex w-full justify-center bg-green-400 hover:bg-green-500 text-white font-medium rounded"
          onClick={calcAvg}>
          Average Price : <div id="avgBox"></div>
        </button>
      </form>
    </>
  );
}

export default Returns;
