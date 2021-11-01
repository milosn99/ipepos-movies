import React from "react";
import { useHistory } from "react-router";
import "../Login.css";

export default function Login(props) {
  const history = useHistory();
  const handleSubmit = (e) => {
    history.push("/movies");
  };

  return (
    <div className="wrapper">
      <div className="login">
        <form className="forma" onSubmit={handleSubmit}>
          <button type="submit">Check out the movies</button>
        </form>
      </div>
    </div>
  );
}
