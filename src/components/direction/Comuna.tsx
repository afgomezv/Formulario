//*Context React
import { useFormulario } from "@/contexts/FormContext";

//* Datos
import { comunaInput } from "@/data";

//* Material UI
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

export const Comuna = () => {
  const { data, errorsLoc, handleChangeSelect } = useFormulario();
  const { comuna } = data;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel>Comuna</InputLabel>
        <Select
          error={Boolean(errorsLoc.comuna)}
          name="comuna"
          value={comuna}
          label="Comuna"
          onChange={handleChangeSelect}
        >
          <MenuItem value={""}>Seleccionar...</MenuItem>
          {Array.from(comunaInput).map((item) => (
            <MenuItem key={item.id} value={item.nombre}>
              {item.nombre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {errorsLoc.comuna && (
        <div style={{ color: "red" }}>{errorsLoc.comuna}</div>
      )}
    </Grid>
  );
};
