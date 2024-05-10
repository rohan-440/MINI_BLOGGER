import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

// Create a custom styled Toolbar component to center its content
const CenteredToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});

// Create a custom styled Typography component with margins and font color
const StyledTypography = styled(Typography)({
  margin: "0 10px", // Adjust margins as needed
  color: "White", // Change the font color to your desired color
  fontWeight: "bold", // Make the typography bold
});

function Header(params) {
  return (
    <AppBar>
      <CenteredToolbar>
        <Link to="/"><StyledTypography>Home</StyledTypography></Link>
        <Link to="/"><StyledTypography>About</StyledTypography></Link>
        <Link to="/home"><StyledTypography>Contact</StyledTypography></Link>
        <Link to="/"><StyledTypography>LogOut</StyledTypography></Link>
      </CenteredToolbar>
    </AppBar>
  );
}

export default Header;
