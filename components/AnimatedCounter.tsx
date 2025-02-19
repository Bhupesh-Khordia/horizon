"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        duration={0.9}
        decimals={2}
        decimal="."
        prefix="$"
        end={amount}
      />
    </div>
  );
};

export default AnimatedCounter;
