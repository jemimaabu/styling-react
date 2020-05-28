import React, { useEffect, useState } from "react";

interface InlineProps {
  bgColor: string;
}

export const Inline: React.FC<InlineProps> = ({ bgColor = "white" }) => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const paddingWithBorder = {
    padding: "10px",
    border: "1px solid",
    backgroundColor: bgColor,
  };

  return (
    <>
      <div style={paddingWithBorder}>
        <p className="app-content" style={{ color: "red", fontSize: 20 }}>
          This is an inline style
        </p>
      </div>
      <main style={{ display: isActive ? "block" : "none" }}>
        Displays after 5 seconds
      </main>
    </>
  );
};
