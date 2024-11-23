import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const DashboardPresentation = () => {
  return (
    <>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            secondary={"Secondary text"}
          />
        </ListItem>
      </List>
    </>
  );
};

export default DashboardPresentation;
