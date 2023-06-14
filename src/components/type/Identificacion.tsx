//* Context React
import { useFormulario } from "@/contexts/FormContext";

//*Material UI
import { TextField, Grid } from "@mui/material";

export const Identificacion = () => {
  const { data, errors, handleChangeInput } = useFormulario();
  const { identificacion } = data;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <TextField
        error={Boolean(errors.identificacion)}
        label="Numero de Identificación *"
        type="text"
        name="identificacion"
        value={identificacion}
        onChange={handleChangeInput}
        fullWidth
        variant="outlined"
      />
      {errors.identificacion && (
        <div style={{ color: "red" }}>{errors.identificacion}</div>
      )}
    </Grid>
  );
};
