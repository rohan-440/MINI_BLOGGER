import { Box, Typography, styled } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlogger } from "@fortawesome/free-brands-svg-icons";

// Create a custom styled Typography component for the big heading
const BigHeading = styled(Typography)({
  fontSize: "3rem", // Adjust the font size as needed
  fontFamily: "cursive", // Set the font family to a fancy font
  marginBottom: "1rem", // Add some bottom margin
});

const Banner = () => {
  return (
    <Box textAlign="center">
      <BigHeading>Welcome to <FontAwesomeIcon icon={faBlogger} /> Blogger</BigHeading>
    </Box>
  );
};

export default Banner;
