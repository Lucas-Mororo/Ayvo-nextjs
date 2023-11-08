"use client";
import { Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/Home";
import PublicRouter from "./router";
import NavBar from "./Components/Core/NavBar";

export default function Home() {
  const [state, setState] = useState<any>(false);
  const [openDrawer, setOpenDrawer] = useState<any>(false);
  const styles = {
    navLink: {},
    main: {
      height: "100vh",
      width: "100%",
    },
    footer: {
      backgroundColor: "#333",
      color: "#fff",
      padding: "10px",
    },
  };

  return (
    <>
      <Router>
        <div style={{ display: "flex", flexDirection: "row", width: "100vw" }}>
          <NavBar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

          <div style={{ width: "100%" }}>
            <main style={styles.main}>
              <PublicRouter />
            </main>

            {/* <footer style={styles.footer}>&copy; 2023 Seu Nome</footer> */}
          </div>
        </div>
      </Router>
    </>
  );
}
