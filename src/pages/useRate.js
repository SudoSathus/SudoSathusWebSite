import { useState, useEffect, useRef } from "react";

const useRate = (value) => {
  const [rate, setrate] = useState(10);

  const mounted = useRef();
  const tm = useRef();
  const tmTwo = useRef();

  useEffect(() => {
    if (!mounted.current) {
      //componentDidMount
      setrate(value);
      mounted.current = true;
    } else {
      //componentDidUpdate
      if (rate > value) {
        if (tm.current) clearTimeout(tm.current);
        tmTwo.current = setTimeout(() => {
          setrate(rate - 1);
        }, 20);
      } else if (rate <value) {
        if (tmTwo.current) clearTimeout(tmTwo.current);
        tm.current = setTimeout(() => {
          setrate(rate + 1);
        }, 20);
      }
    }
  }, [value, rate]);
  return rate;
};

export default useRate;
