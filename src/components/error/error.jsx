import React, { useRef, useEffect, useState } from "react";

import { Card, CardMedia, Typography } from "@mui/material";

import { useNavigate } from "react-router";

export default function Error() {
    const navigate = useNavigate();
  const [num, setNum] = useState(10);

  let intervalRef = useRef();

  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);
    setTimeout(() => {
        navigate("/");
    }, 10000);

    return () => clearInterval(intervalRef.current);
  }, [navigate]);


  return (
    <>
      <Typography variant="h4" align="center">
      Redirigiendo a Menu en: {num}
      </Typography>
      <Card sx={{ maxWidth: "50%", margin:"auto" }}>
        <CardMedia
          sx={{ display: { xs: "none", md: "flex" } }}
          component="img"
          height="640"
          image={
            "https://media2.giphy.com/media/QCCxowOcim5o3UFqpe/giphy.gif?cid=ecf05e47c7poxx1svbpff55wbn45dqkkfajjf99fvpuq0jep&rid=giphy.gif&ct=ts"
          }
          alt="green iguana"
        />
      </Card>
      <Card sx={{ maxWidth: "100%", marginTop: "2%" }}>
        <CardMedia
          sx={{ display: { xs: "flex", md: "none" } }}
          component="img"
          height="240"
          image={
            "https://media2.giphy.com/media/QCCxowOcim5o3UFqpe/giphy.gif?cid=ecf05e47c7poxx1svbpff55wbn45dqkkfajjf99fvpuq0jep&rid=giphy.gif&ct=ts"
          }
          alt="green iguana"
        />
      </Card>
    </>
  );
}
