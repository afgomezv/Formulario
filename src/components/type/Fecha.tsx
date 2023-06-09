//*Context React
import { useFormulario } from "@/contexts/FormContext";

//*Material UI
import { TextField, Grid } from "@mui/material";

export const Fecha = () => {
  const { data } = useFormulario();
  const { fecha } = data;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <TextField
        type="text"
        label="Fecha"
        name="fecha"
        value={fecha}
        variant="outlined"
        fullWidth
      />
    </Grid>
  );
};
