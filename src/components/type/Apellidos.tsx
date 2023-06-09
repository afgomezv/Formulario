//*Context React
import { useFormulario } from "@/contexts/FormContext";

//* Material UI
import { Grid, TextField } from "@mui/material";

export const Apellidos = () => {
  const { data, handleChange } = useFormulario();
  const { apellidos } = data;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <TextField
        //error={Boolean(errors.lastComplete)}
        label="Apellidos Completos *"
        type="text"
        name="lastComplete"
        value={apellidos}
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />
      {/* {errors.lastComplete && (
        <div style={{ color: "red" }}>{errors.lastComplete}</div>
      )} */}
    </Grid>
  );
};
