import React from "react";

function Average() {

    const calcAvg = (event) => {
    
        let shares = parseInt(document.getElementById("totalShares").value);
        let average = document.getElementById("average").value;
    
        console.log("share price : ",shares);
        console.log("Sum : ", eval(average));

        let avg = eval(average) / shares;

        document.getElementById("avgBox").innerHTML = avg.toFixed(2);

        event.preventDefault();
      };
    
  return (
    <>
      <div className="">
        <form>
          <div className="my-4">
            <label className="block">
              <input
                type="number"
                id="totalShares"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-500 focus:outline-none focus:border-slate-300 focus:ring-slate-300 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Enter number of stocks"
              />
            </label>
          </div>
    
          <div className="my-4">
            <label className="block">
              <input
                type="text"
                id="average"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-slate-300 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Enter price of every stock with + in between"
                autoComplete="off"
              />
            </label>
          </div>

          <button
            className="p-2 my-8 flex w-full justify-center bg-green-400 hover:bg-green-500 text-white font-medium rounded" onClick={calcAvg}>
            Average Price : <div id="avgBox"></div>
          </button>

        </form>
      </div>
    </>
  );
}

export default Average;
