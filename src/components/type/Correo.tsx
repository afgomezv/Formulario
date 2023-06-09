//*React Context
import { useFormulario } from "@/contexts/FormContext";

//* Material UI
import { Grid, TextField } from "@mui/material";

export const Correo = () => {
  const { data, handleChange } = useFormulario();
  const { correo } = data;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <TextField
        //error={Boolean(errors.nameComplete)}
        label="Correo electronico *"
        type="text"
        name="nameComplete"
        value={correo}
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />
      {/* {errors.nameComplete && (
      <div style={{ color: "red" }}>{errors.nameComplete}</div>
    )} */}
    </Grid>
  );
};
