import Button from "@mui/material/Button";

const ButtonSignUp = ({ onClick }) => {
  return (
    <Button
      color="inherit"
      sx={{
        marginRight: "50px",
        width: "90px",
        height: "40px",
        fontFamily: "Noto Sans",
        fontSize: "18px",
        textTransform: "unset",
      }}
      onClick={onClick}
    >
      Sign Up
    </Button>
  );
};

export default ButtonSignUp;
