//*React Context
import { useFormulario } from "@/contexts/FormContext";

//* Material UI
import { Grid, TextField } from "@mui/material";

export const Nombres = () => {
  const { data, handleChange } = useFormulario();
  const { nombres } = data;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <TextField
        //error={Boolean(errors.nameComplete)}
        label="Nombres Completos *"
        type="text"
        name="nameComplete"
        value={nombres}
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
