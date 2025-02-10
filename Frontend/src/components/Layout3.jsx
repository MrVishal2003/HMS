import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import img1 from "../Images/wedding.jpg";
import img2 from "../Images/birthday.jpg";
import img3 from "../Images/anniversary.jpg";
import img4 from "../Images/cultural.jpg";
import img5 from "../Images/festival.jpg";
import img6 from "../Images/gathering.jpg";
import { NavLink } from "react-router-dom";

const images = [
  { title: "WEDDING", image: img1 },
  { title: "BIRTHDAY", image: img2 },
  { title: "ANNIVERSARY", image: img3 },
  { title: "CULTURAL", image: img4 },
  { title: "FESTIVAL", image: img5 },
  { title: "GATHERING", image: img6 },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200, // Reduced height for better mobile display
  width: "100%", // Ensures full width on small screens

  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiTypography-root": {
      border: `2px solid ${theme.palette.common.white}`,
      visibility: "visible",
    },
    "& .bg-cover": {
      filter: "blur(2px)", // Softer blur effect
    },
  },
}));

export default function Layout3() {
  return (
    <Box>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-2 sm:p-4">
        {images.map((image, index) => (
          <ImageButton
            key={image.title}
            className="w-full sm:w-[48%] md:w-[30%] lg:w-[20%]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center border border-maroon transition-opacity rounded-lg"
              style={{ backgroundImage: `url(${image.image})` }}
            ></div>
            <Typography
              component="span"
              className="p-1 sm:p-2 text-white font-semibold text-sm sm:text-lg absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-maroon bg-opacity-70 px-3 py-1 sm:px-4 sm:py-1.5 rounded-md"
            >
              <NavLink to="/BookEvent">{image.title}</NavLink>
            </Typography>
          </ImageButton>
        ))}
      </div>
    </Box>
  );
}