//*Context React
import { useFormulario } from "@/contexts/FormContext";

//* Material UI
import { Grid, TextField } from "@mui/material";

export const Apellidos = () => {
  const { data, errors, handleChangeInput } = useFormulario();
  const { apellidos } = data;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <TextField
        error={Boolean(errors.apellidos)}
        label="Apellidos Completos *"
        type="text"
        name="apellidos"
        value={apellidos}
        onChange={handleChangeInput}
        fullWidth
        variant="outlined"
      />
      {errors.apellidos && (
        <div style={{ color: "red" }}>{errors.apellidos}</div>
      )}
    </Grid>
  );
};
