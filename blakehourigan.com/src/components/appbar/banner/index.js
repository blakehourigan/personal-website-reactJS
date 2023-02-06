import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer,BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../../styles/banner";


export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    
    return (
        <BannerContainer>
                <BannerContent>
                    <BannerImage src="https://i.imgur.com/06otQtL.jpg"/>
                <Typography variant="h6">testing</Typography>
                <BannerTitle variant="h2">
                    testing v2
                </BannerTitle>
                <BannerDescription variant="subtitle">testing v3</BannerDescription>
            </BannerContent>
        </BannerContainer>
        
    );
}