import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import DrawerMenu from "../DrawerMenu";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <DrawerMenu />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hospital Modelo
          </Typography>

          <div className="headerNavIcons">
            <StarBorderIcon />
            <NotificationsNoneIcon />
            <CalendarTodayIcon />

            <div className="headerUsuario">
              <Divider orientation="vertical" flexItem />
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
              </IconButton>

              <div>
                <p>Bruno Araujo</p>
                <p>Relacionamento Médico</p>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
