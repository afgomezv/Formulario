//*Context React
import { useFormulario } from "@/contexts/FormContext";

//*Material UI
import { TextField, Grid } from "@mui/material";

export const Entidad = () => {
  const { data, handleChangeInput } = useFormulario();
  const { entidad } = data;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <TextField
        type="text"
        label="Entidad"
        name="entidad"
        value={entidad}
        variant="outlined"
        fullWidth
        onChange={handleChangeInput}
      />
    </Grid>
  );
};
