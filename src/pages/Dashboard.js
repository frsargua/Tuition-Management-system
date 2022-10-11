import Sidebar from "../components/Dashboard/Sidebard";
import Navbar from "../components/Dashboard/Navbar";
import { styled } from "@mui/material/styles";

const DashboardLayoutParent = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

const navbarWidth = "250px";

function Dashboard() {
  return (
    <>
      <Sidebar navbarWidth={navbarWidth} />
      <Navbar navbarWidth={navbarWidth} />
    </>
  );
}

export default Dashboard;
