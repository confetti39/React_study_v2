import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const handleChange = () => setChecked((check) => !check);

  useEffect(() => {
    setLoading(true);
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥 데이터를 네트워크에서 받아옴");
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setError(true));
    return () => {
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
  }, [checked]);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>error...</p>
      ) : (
        <>
          <input
            id="checkbox"
            type="checkbox"
            value={checked}
            onChange={handleChange}
          />
          <label htmlFor="checkbox">Show Only 🔥 Sale</label>
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
      )}
    </>
  );
}
