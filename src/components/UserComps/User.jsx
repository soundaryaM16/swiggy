import React, { useState } from "react";

function MultiStateFunctional() {
  //   const [count1, setcount1] = useState(0);
  //   const [count2, setcount2] = useState(0);
  //   const [count3, setcount3] = useState(0);
  //   const [count4, setcount4] = useState(0);
  //   const [count5, setcount5] = useState(0);
  //   const [count6, setcount6] = useState(0);
  //   const [count7, setcount7] = useState(0);
  //   const [count8, setcount8] = useState(0);
  //   const [count9, setcount9] = useState(0);
  //   const [count10, setcount10] = useState(0);

  //   return (
  //     <div>
  //       <p>State 1: {count1}</p>
  //       <p>State 2: {count2}</p>
  //       <p>State 3: {count3}</p>
  //       <p>State 4: {count4}</p>
  //       <p>State 5: {count5}</p>
  //       <p>State 6: {count6}</p>
  //       <p>State 7: {count7}</p>
  //       <p>State 8: {count8}</p>
  //       <p>State 9: {count9}</p>
  //       <p>State 10: {count10}</p>

  //       <button onClick={() => setcount1(count1 + 1)}>Increment count 1</button>
  //       <button onClick={() => setcount2(count2 + 1)}>Increment count 2</button>
  //       <button onClick={() => setcount3(count3 + 1)}>Increment count 3</button>
  //       <button onClick={() => setcount4(count4 + 1)}>Increment count 4</button>
  //       <button onClick={() => setcount5(count5 + 1)}>Increment count 5</button>
  //       <button onClick={() => setcount6(count6 + 1)}>Increment count 6</button>
  //       <button onClick={() => setcount7(count7 + 1)}>Increment count 7</button>
  //       <button onClick={() => setcount8(count8 + 1)}>Increment count 8</button>
  //       <button onClick={() => setcount9(count9 + 1)}>Increment count 9</button>
  //       <button onClick={() => setcount10(count10 + 1)}>Increment count 10</button>
  //     </div>
  //   );
  // }

  const [counts, setCounts] = useState(Array(10).fill(0));

  const incrementCount = (index) => {
    setCounts(counts.map((count, i) => (i === index ? count + 1 : count)));
  };

  return (
    <div>
      {counts.map((count, index) => (
        <div key={index}>
          <p>
            State {index + 1}: {count}
          </p>
          <button onClick={() => incrementCount(index)}>
            Increment count {index + 1}
          </button>
        </div>
      ))}
    </div>
  );
}

export default MultiStateFunctional;
