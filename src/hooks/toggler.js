import { useState } from "react";

const useToggler = () => {
  const [state, setState] = useState(false)

  const toggle = () => {
    setState(!state)
  }

  return [state, toggle]
}

export default useToggler
