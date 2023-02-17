import React, {useState} from "react";

function Average() {

    const [totalVal, setTotalVal] = useState("");
    const [shares, setShares] = useState("");

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        setTotalVal(totalVal + "+");
      }
    };

    const calcAvg = (event) => {
    
      let avg = eval(totalVal) / shares;
      
      document.getElementById("avgBox").innerHTML = ": ₹" + avg.toFixed(2);
      
      event.preventDefault();
    };
    
  return (
    <>
      <div>

          <div className="my-4">
            <label className="block">
              <input
                type="number"
                id="totalShares"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-500 focus:outline-none focus:border-slate-300 focus:ring-slate-300 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Enter number of stocks"
                value={shares}
                onChange={(event) => setShares(event.target.value)}
              />
            </label>
          </div>
    
          <div className="my-4">
            <label className="block">
              <input
                type="text"
                id="stockVal"
                value={totalVal}
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-slate-300 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Enter price of every stock with + in between"
                autoComplete="off"
                onChange={(event) => setTotalVal(event.target.value)}
                onKeyDown={handleKeyDown}
              />
            </label>
          </div>

          <div
            className="p-2 my-8 unselectable cursor-pointer flex w-full justify-center bg-green-400 hover:bg-green-500 text-white font-medium rounded"
            onClick={calcAvg}>
            Average Price<div id="avgBox"></div>
          </div>

      </div>
    </>
  );
}

export default Average;
