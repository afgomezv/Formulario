//*Context React
import { useFormulario } from "@/contexts/FormContext";

//*Material UI
import { TextField, Grid } from "@mui/material";

export const Texto = () => {
  const { data, errors, handleChangeInput } = useFormulario();
  const { texto } = data;
  return (
    <Grid item xs={12}>
      <TextField
        error={Boolean(errors.texto)}
        label="Realice una breve descripción de su Petición, Queja, Reclamo, Solicitud o Denuncia *"
        multiline={true}
        rows={3}
        name="texto"
        value={texto}
        onChange={handleChangeInput}
        variant="outlined"
        style={{ width: "100%" }}
      />
      {errors.texto && <div style={{ color: "red" }}>{errors.texto}</div>}
    </Grid>
  );
};
