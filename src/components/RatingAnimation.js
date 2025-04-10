import { Rating } from "@mui/material";
import { useEffect, useState } from "react";

export default function AnimatedRating({ value, max = 10, delay = 100 }) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let timeout;
    if (currentValue < value) {
      timeout = setTimeout(() => {
        setCurrentValue((prev) => prev + 1);
      }, delay);
    }
    return () => clearTimeout(timeout);
  }, [currentValue, value, delay]);

  return (
    <Rating
      value={currentValue}
      max={max}
      readOnly
      sx={{
        "& .MuiRating-iconEmpty": {
          color: "#ccc",
        },
        "& .MuiRating-iconFilled": {
          color: "#FFD700",
        },
      }}
    />
  );
}
