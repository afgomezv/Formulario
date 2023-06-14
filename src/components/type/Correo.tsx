//*React Context
import { useFormulario } from "@/contexts/FormContext";

//* Material UI
import { Grid, TextField } from "@mui/material";

export const Correo = () => {
  const { data, handleChangeInput } = useFormulario();
  const { correo } = data;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <TextField
        //error={Boolean(errors.nameComplete)}
        label="Correo electronico *"
        type="text"
        name="correo"
        value={correo}
        onChange={handleChangeInput}
        fullWidth
        variant="outlined"
      />
      {/* {errors.nameComplete && (
      <div style={{ color: "red" }}>{errors.nameComplete}</div>
    )} */}
    </Grid>
  );
};
