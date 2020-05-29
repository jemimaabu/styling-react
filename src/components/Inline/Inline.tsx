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

  const styles = {
    header: {
      fontSize: "2em",
    },
    content: {
      fontSize: "1em",
    },
  };

  return (
    <>
      <div style={paddingWithBorder}>
        <h1 style={styles.header}>This is a header</h1>
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
