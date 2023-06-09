//*Context React
import { useFormulario } from "@/contexts/FormContext";

//*Material UI
import { Grid, TextField } from "@mui/material";

export const Telefono = () => {
  const { data, handleChange } = useFormulario();
  const { telefono } = data;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <TextField
        //error={Boolean(errors.telephone)}
        label="Teléfono fijo / Celular *"
        type="number"
        name="telefono"
        value={telefono}
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />
      {/* {errors.telephone && (
        <div style={{ color: "red" }}>{errors.telephone}</div>
      )} */}
    </Grid>
  );
};
