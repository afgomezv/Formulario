//*Context React
import { useFormulario } from "@/contexts/FormContext";

//*Material UI
import { Grid, TextField } from "@mui/material";

export const Telefono = () => {
  const { data, errors, handleChangeInput } = useFormulario();
  const { telefono } = data;
  return (
    <Grid item xs={12} sm={6}>
      <TextField
        error={Boolean(errors.telefono)}
        label="Teléfono fijo / Celular *"
        type="number"
        name="telefono"
        value={telefono}
        onChange={handleChangeInput}
        fullWidth
        variant="outlined"
      />
      {errors.telefono && <div style={{ color: "red" }}>{errors.telefono}</div>}
    </Grid>
  );
};
