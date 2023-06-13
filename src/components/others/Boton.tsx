import { Button, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const Boton = () => {
  return (
    <Grid mt={4} container direction="row" spacing={3} justifyContent="center">
      <Button
        type="submit"
        variant="contained"
        size="large"
        style={{ backgroundColor: "#00821d" }}
        endIcon={<SendIcon />}
      >
        Enviar
      </Button>
    </Grid>
  );
};
