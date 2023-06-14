//*React Context
import { useFormulario } from "@/contexts/FormContext";

//* Material UI
import { Grid, TextField } from "@mui/material";

export const Nombres = () => {
  const { data, errors, handleChangeInput } = useFormulario();
  const { nombres } = data;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <TextField
        error={Boolean(errors.nombres)}
        label="Nombres Completos *"
        type="text"
        name="nombres"
        value={nombres}
        onChange={handleChangeInput}
        fullWidth
        variant="outlined"
      />
      {errors.nombres && <div style={{ color: "red" }}>{errors.nombres}</div>}
    </Grid>
  );
};
