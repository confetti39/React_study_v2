import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const {
    isLoading,
    error,
    data: products, //data를 products 변수명으로 사용하기 위함
  } = useQuery(
    ["products", checked],
    async () => {
      console.log("fetching...");
      return fetch(`data/${checked ? "sale_" : ""}products.json`).then((res) =>
        res.json()
      );
    },
    {
      staleTime: 1000 * 60 * 5, // 5분동안 fresh 상태를 유지, 밀리초 단위
    }
  );
  const handleChange = () => setChecked((prev) => !prev);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Show Only 🔥 Sale
      </label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
