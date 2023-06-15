//*Context React
import { useFormulario } from "@/contexts/FormContext";

//* Datos
import { comunaInput } from "@/data";

//* Material UI
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

export const Barrio = () => {
  const { data, errorsLoc, handleChangeSelect } = useFormulario();
  const { barrio } = data;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel>Barrio</InputLabel>
        <Select
          error={Boolean(errorsLoc.comuna)}
          name="barrio"
          value={barrio}
          label="Barrio"
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
