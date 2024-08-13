import { useState } from "react";

export default function Counter({}) {
  let [count,setCount] = useState(0);
  function incCount(){
    count=count+1;
    setCount(count);
    console.log(count);

  }

  return <button onClick={incCount}>Counter:{count}</button>;
}
