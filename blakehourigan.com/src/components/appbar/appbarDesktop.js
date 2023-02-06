import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Container } from "@mui/system";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";

export default function AppbarDesktop({matches}){
    return (
        <AppbarContainer>
            <AppbarHeader>

                Blake Hourigan
            </AppbarHeader>
            <MyList type = "row">
                <ListItemText primary = "home"/>
                <ListItemText primary = "categories"/>
                <ListItemText primary = "products"/>
                <ListItemText primary = "contact us"/>
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon/>
                    </ListItemIcon>
                </ListItemButton>

            </MyList>

        </AppbarContainer>
    );
}