import { Button, ListItem } from "@mui/material";
import { Box } from "@mui/system";

function NavItem(props) {
  const { title } = props;
  return (
    <ListItem disableGutters sx={{ display: "flex", mb: 0.5, py: 0, px: 2 }}>
      <Button
        sx={{
          width: "100%",
          textAlign: "left",
          borderRadius: 1,
          color: "white",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>{title}</Box>
      </Button>
    </ListItem>
  );
}

export default NavItem;
