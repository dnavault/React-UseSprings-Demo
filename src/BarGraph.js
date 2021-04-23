import React from "react";
import { useSprings, animated as a } from "react-spring";

const bars = [
  {
    key: "bar1",
    color: "green",
    from: {
      width: "0px"
    },
    to: {
      width: "100px"
    },
    config: {
      mass: 20
    }
  },
  {
    key: "bar2",
    color: "blue",
    from: {
      width: "0px"
    },
    to: {
      width: "250px"
    },
    config: {
      mass: 30
    }
  },
  {
    key: "bar3",
    color: "red",
    from: {
      width: "0px"
    },
    to: {
      width: "150px"
    },
    config: {
      mass: 13
    }
  }
];

const BarGraph = () => {
  const springs = useSprings(
    bars.length,
    bars.map(({ color, key, ...config }) => config)
  );

  return springs.map((spring, index) => (
    <a.div
      style={{
        ...spring,
        height: "20px",
        marginBottom: "10px",
        backgroundColor: bars[index].color
      }}
    />
  ));
};

export default BarGraph;
