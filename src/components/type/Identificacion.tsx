//* Context React
import { useFormulario } from "@/contexts/FormContext";

//*Material UI
import { TextField, Grid } from "@mui/material";

export const Identificacion = () => {
  const { data, handleChange } = useFormulario();
  const { identificacion } = data;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <TextField
        //error={Boolean(errors.company)}
        label="Numero de Identificación *"
        type="text"
        name="identificacion"
        value={identificacion}
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />
      {/* {errors.company && (
      <div style={{ color: "red" }}>{errors.company}</div>
    )} */}
    </Grid>
  );
};
