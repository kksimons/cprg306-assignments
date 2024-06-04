import React from "react";

function Counter({ currentCount, incrementCountFunction }) {
  return (
    <div className="bg-slate-100 max-w-sm p-5">
      <h1 className="text-2xl p-1">Increment Counter</h1>
      <p className="text-lg p-1">Counter: {currentCount}</p>
      <button
        onClick={incrementCountFunction}
        className="bg-blue-400 active:bg-yellow-300 rounded text-white px-4 py-2"
      >
        Increment!
      </button>
    </div>
  );
}

export default Counter;
