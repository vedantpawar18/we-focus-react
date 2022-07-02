import { useEffect, useRef } from "react";

function Focus() {
  const ref = useRef(null); // HTMLRef

  useEffect(() => {
    handleFocus();
  },[]);

  const handleFocus= () => {
    ref.current.focus();
  };

  return (
    <div>
      <input placeholder="type something" ref={ref} />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}

export default Focus; 