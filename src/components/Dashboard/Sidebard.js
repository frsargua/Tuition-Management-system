import { Divider, Drawer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import NavItem from "./NavItem";

// const items = [
//   {
//     href: "/",
//     icon: <ChartBarIcon fontSize="small" />,
//     title: "Dashboard",
//   },
//   {
//     href: "/customers",
//     icon: <UsersIcon fontSize="small" />,
//     title: "Homework",
//   },
//   {
//     href: "/products",
//     icon: <ShoppingBagIcon fontSize="small" />,
//     title: "Schedule",
//   },
//   {
//     href: "/account",
//     icon: <UserIcon fontSize="small" />,
//     title: "Account",
//   },
//   {
//     href: "/settings",
//     icon: <CogIcon fontSize="small" />,
//     title: "Settings",
//   },
//   {
//     href: "/login",
//     icon: <LockIcon fontSize="small" />,
//     title: "Refer a friend",
//   },
//   {
//     href: "/register",
//     icon: <UserAddIcon fontSize="small" />,
//     title: "1-on-1",
//   },
// ];

const items = [
  {
    title: "Dashboard",
  },
  {
    title: "Homework",
  },
  {
    title: "Schedule",
  },
  {
    title: "Account",
  },
  {
    title: "Settings",
  },
  {
    title: "Refer a friend",
  },
  {
    title: "1-on-1",
  },
];

function Sidebar(props) {
  const { navbarWidth } = props;

  const content = (
    <>
      <Box sx={{ display: "flex", justifyContent: "start", p: 3 }}>
        <img style={{ width: "20%" }} src={require("../../icons/logo.png")} />
      </Box>
      <Box sx={{ px: 2 }}>
        <Box
          sx={{
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            px: 3,
            py: 1,
            borderRadius: 1,
          }}
        >
          <Typography color="inherit" variant="subtitle1">
            Student Name
          </Typography>
          <Typography color="neutral.400" variant="body2">
            User Type
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          borderColor: "rgba(255, 255, 255, 0.3)",
          my: 3,
        }}
      />
      <Box sx={{ flexGrow: 1 }}>
        {items.map((item) => (
          <NavItem title={item.title} />
        ))}
      </Box>
    </>
  );

  return (
    <>
      {" "}
      <Drawer
        sx={{
          width: navbarWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: navbarWidth,
            boxSizing: "border-box",
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: "blueviolet",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {content}
      </Drawer>
    </>
  );
}
export default Sidebar;
