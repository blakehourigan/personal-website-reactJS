import { ListItemText } from "@mui/material";
import { Container } from "@mui/system";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";

export default function AppbarDesktop({matches}){
    return (
        <AppbarContainer>
            <AppbarHeader>

                my Bags 
            </AppbarHeader>
            <MyList type = "row">
                <ListItemText primary = "home"/>
                <ListItemText primary = "categories"/>
                <ListItemText primary = "products"/>
                <ListItemText primary = "contact us"/>

            </MyList>

        </AppbarContainer>
    );
}