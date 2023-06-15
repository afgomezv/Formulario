//*React Context
import { useFormulario } from "@/contexts/FormContext";

//* Material UI
import { Grid, TextField } from "@mui/material";

export const Correo = () => {
  const { data, errorsEmail, handleChangeInput } = useFormulario();
  const { correo } = data;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <TextField
        error={Boolean(errorsEmail.correo)}
        label="Correo electronico "
        type="text"
        name="correo"
        value={correo}
        onChange={handleChangeInput}
        fullWidth
        variant="outlined"
      />
      {errorsEmail.correo && (
        <div style={{ color: "red" }}>{errorsEmail.correo}</div>
      )}
    </Grid>
  );
};
