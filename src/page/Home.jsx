import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const HandleJoin = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={HandleJoin}>Join</button>
      </div>
    </div>
  );
};

export default Home;
