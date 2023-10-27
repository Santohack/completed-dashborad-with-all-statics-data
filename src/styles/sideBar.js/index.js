import { Box, List, styled } from "@mui/material";

export const NavContainer = styled(Box)(()=>({
    width: "100%",
    height: "98vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
   
}))

export const MyList = styled(List)(({type})=>({
    width: "100%",
    height: "100%",
    display: type === 'row'? 'flex':'block',
    alignItems: "center",
    justifyContent: "center",
    flexGrow:1,
  
    
}))