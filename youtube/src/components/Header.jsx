import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [keyword, setkeyword] = useState("");
  const handleChange = (e) => setkeyword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${keyword}`);
  };

  return (
    <>
      <h1 style={{ cursor: "pointer" }} onClick={() => navigate(`/`)}>
        Youtube
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="keyword"
          value={keyword}
          placeholder="Search ..."
          onChange={handleChange}
        />
        <button>search</button>
      </form>
    </>
  );
}
