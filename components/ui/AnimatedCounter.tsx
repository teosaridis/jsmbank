'use client';

import CountUp from "react-countup";

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div className="w-full">
        <CountUp end={ amount} 
            duration={3}
            decimal="."
            decimals={2}
            suffix=" €"
        />
    </div>
  )
}

export default AnimatedCounter