import { useState } from "react";

const useInputChange = (sth) => {
  const [state, setState] = useState(sth)

  function handleChange(e) {
    setState(e.target.value)
  }

  function reset() {
    setState(' ')
  }

  return [state, handleChange, reset]

}
  
export default useInputChange