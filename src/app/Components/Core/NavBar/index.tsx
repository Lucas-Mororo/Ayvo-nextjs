"use client";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function NavBar({ openDrawer, setOpenDrawer }: any) {
  return (
    <>
      <header
        style={
          openDrawer === true
            ? {
                backgroundColor: "#333",
                color: "#fff",
                padding: "10px",
                width: "500px",
              }
            : { backgroundColor: "#333", color: "#fff", padding: "10px" }
        }
      >
        <Button
          onClick={() => {
            setOpenDrawer(!openDrawer);
          }}
        >
          Abra
        </Button>
        <nav style={{ display: "flex", flexDirection: "column" }}>
          <Link
            to="/"
            style={{
              display: "inline",
              marginRight: "20px",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            {openDrawer === true ? (
              <>
                <DashboardIcon />
                <span>Página Inicial</span>
              </>
            ) : (
              <DashboardIcon />
            )}
          </Link>
          <Link
            to="/home"
            style={{
              display: "inline",
              marginRight: "20px",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            {openDrawer === true ? (
              <>
                <ChatBubbleOutlineIcon />
                <span>Chat</span>
              </>
            ) : (
              <ChatBubbleOutlineIcon />
            )}
          </Link>
        </nav>
      </header>
    </>
  );
}
