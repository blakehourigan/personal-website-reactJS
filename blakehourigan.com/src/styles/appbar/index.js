import { List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import "@fontsource/source-sans-pro";
import {Box} from "@mui/system"

export const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    algnItems: 'center',
    padding: '2px 8px'
}));

export const AppbarHeader = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '4em',
    fontFamily: '"sans-pro"',
    fontStyle: "italic",
    color: Colors.secondary,
}));

export const MyList = styled(List)(({type}) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3, 
    justifyContent: 'center',
    alignItems: 'center'
}));