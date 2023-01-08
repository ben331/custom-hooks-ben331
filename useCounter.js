import { useState } from "react"

export const useCounter = ( initialValue = 0) => {
    const [counter, setCounter] = useState( initialValue )

    const add = () => setCounter(counter +1);
    const reset = () => setCounter(initialValue);
    const subs = () => { if(counter>0) setCounter( counter -1 )};

  return {
    counter,
    add,
    subs,
    reset
  }
}