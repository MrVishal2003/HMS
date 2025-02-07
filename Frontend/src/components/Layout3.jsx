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
  {
    title: "WEDDING",
    image: img1,
    width: "40%",
  },
  {
    title: "BIRTHDAY",
    image: img2,
    width: "40%",
  },
  {
    title: "ANNIVERSARY",
    image: img3,
    width: "40%",
  },
  {
    title: "CULTURAL",
    image: img4,
    width: "40%",
  },
  {
    title: "FESTIVAL",
    image: img5,
    width: "40%",
  },
  {
    title: "GATHERING",
    image: img6,
    width: "40%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 400,

  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiTypography-root": {
      border: `4px solid ${theme.palette.common.white}`,
      visibility: "visible",
    },
    "& .bg-cover": {
      filter: "blur(4px)",
    },
  },
}));

export default function Layout3() {
  return (
    <Box>
      <div className="flex flex-wrap justify-around m-5">
        {images.map((image, index) => (
          <ImageButton
            key={image.title}
            style={{
              width: image.width,
              marginBottom: index < images.length - 1 ? "20px" : 0,
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity border border-maroon"
              style={{ backgroundImage: `url(${image.image})` }}
            ></div>
            <Typography
              component="span"
              className="p-2 pt-2 text-white relative invisible"
            >
              <NavLink to="/BookEvent">{image.title}</NavLink>
            </Typography>
          </ImageButton>
        ))}
      </div>
    </Box>
  );
}
