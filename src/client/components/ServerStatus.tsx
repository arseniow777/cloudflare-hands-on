import { useEffect, useState } from "react";

export const ServerStatus = () => {
  const [status, setStatus] = useState("");
  useEffect(() => {
    console.log("effect jalan");
    fetch("/api/healty")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // jalan dulu
        setStatus(data); // baru set state
      });
  });

  return (
    <div>
      <h1>api status</h1>
      <p>{status}</p>
    </div>
  );
};
