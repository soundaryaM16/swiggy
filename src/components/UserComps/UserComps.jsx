import React, { Component } from "react";

class MultiStateClass extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //         count1: 0,
  //         count2: 0,
  //         count3: 0,
  //         count4: 0,
  //         count5: 0,
  //         count6: 0,
  //         count7: 0,
  //         count8: 0,
  //         count9: 0,
  //       count10: 0
  //     };
  //   }

  //   increment = (key) => {
  //     this.setState(m => ({
  //       [key]: m[key] + 1
  //     }));
  //   };

  //   render() {
  //     const { count1, count2, count3, count4, count5,count6,count7, count8, count9, count10 } = this.state;

  //     return (
  //       <div>
  //         <p>State 1: {count1}</p>
  //         <p>State 2: {count2}</p>
  //         <p>State 3: {count3}</p>
  //         <p>State 4: {count4}</p>
  //         <p>State 5: {count5}</p>
  //         <p>State 6: {count6}</p>
  //         <p>State 7: {count7}</p>
  //         <p>State 8: {count8}</p>
  //         <p>State 9: {count9}</p>
  //         <p>State 10: {count10}</p>

  //         <button onClick={() => this.increment('count1')}>Increment count 1</button>
  //         <button onClick={() => this.increment('count2')}>Increment count 2</button>
  //         <button onClick={() => this.increment('count3')}>Increment count 3</button>
  //         <button onClick={() => this.increment('count4')}>Increment count 4</button>
  //         <button onClick={() => this.increment('count5')}>Increment count 5</button>
  //         <button onClick={() => this.increment('count6')}>Increment count 6</button>
  //         <button onClick={() => this.increment('count7')}>Increment count 7</button>
  //         <button onClick={() => this.increment('count8')}>Increment count 8</button>
  //         <button onClick={() => this.increment('count9')}>Increment count 9</button>
  //         <button onClick={() => this.increment('count10')}>Increment count 10</button>
  //       </div>
  //     );
  //   }
  // }

  constructor(props) {
    super(props);
    this.state = {
      counts: Array(10).fill(0),
    };
  }

  increment = (index) => {
    this.setState((m) => {
      const newCounts = [...m.counts];

      newCounts[index] += 1;
      console.log(newCounts);
      return { counts: newCounts };
    });
  };

  render() {
    const { counts } = this.state;

    return (
      <div>
        {counts.map((count, index) => (
          <div key={index}>
            <p>
              State {index + 1}: {count}
            </p>
            <button onClick={() => this.increment(index)}>
              count {index + 1}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default MultiStateClass;
