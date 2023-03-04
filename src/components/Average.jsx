import React, { useState } from "react";

function Average() {
  const [shares, setShares] = useState("");
  const [totalVal, setTotalVal] = useState("");
  const [sharesTrue, setSharesTrue] = useState("false");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setTotalVal(totalVal + "+");
    }
  };

  const validateSharesVal = () => {

    if(shares === "")
    {
      document.getElementById("sharesPrompt").innerHTML = "field is empty";
    }
    else if(shares < 1)
    {
      document.getElementById("sharesPrompt").innerHTML = "value is negative";
    }
    else
    {
      for(let i = 0; i < shares.length; i++){
        if(isNaN(shares.charAt(i))){
          document.getElementById("sharesPrompt").innerHTML = "value is too large";
          return;
        }
        else 
        {
          document.getElementById("sharesPrompt").innerHTML = "";
          setSharesTrue("true");
        }
      }

    }

  };

  const validateTotalVal = () => {

    validateSharesVal();

    if(totalVal === "")
    {
      document.getElementById("totalPrompt").innerHTML = "field is empty";
    }
    else if(eval(totalVal) < 1)
    {
      document.getElementById("totalPrompt").innerHTML = "value is negative";
    }
    else
    {
      for(let i = 0; i < totalVal.length; i++){
        if(Boolean(totalVal.charAt(i).match(/[a-zA-Z]/))){
          document.getElementById("totalPrompt").innerHTML = "enter valid value";
          return;
        }
        else 
        {
          document.getElementById("totalPrompt").innerHTML = "";

          if(sharesTrue === "true"){

            console.log("Shares true")
            calcAvg();
          }
        }
      }

    }

  };

  const calcAvg = () => {

    let avg = eval(totalVal) / shares;
    document.getElementById("avgBox").innerHTML = ": ₹" + avg.toFixed(2);
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

        <div id="sharesPrompt" className="text-sm mx-1 text-red-600"></div>

        <div className="my-4">
          <label className="block">
            <input
              type="text"
              id="stockVal"
              value={totalVal}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-slate-300 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Input price of one stock & press enter / + "
              autoComplete="off"
              onChange={(event) => setTotalVal(event.target.value)}
              onKeyDown={handleKeyDown}
            />
          </label>
        </div>

        <div id="totalPrompt" className="text-sm mx-1 text-red-600"></div>

        <div
          className="p-2 my-8 unselectable cursor-pointer flex w-full justify-center bg-green-400 hover:bg-green-500 text-white font-medium rounded"
          onClick={validateTotalVal}
        >
          Average Price<div id="avgBox"></div>
        </div>
      </div>
    </>
  );
}

export default Average;
