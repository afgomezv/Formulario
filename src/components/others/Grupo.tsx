//*Context React
import { useFormulario } from "@/contexts/FormContext";

//*Data
import { group } from "@/data";

//* Material UI
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

export const Grupo = () => {
  const { data, errors, handleChangeSelect } = useFormulario();
  const { grupo } = data;
  return (
    <Grid item xs={12} sm={6}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel>Indique el grupo poblacional al que pertenece</InputLabel>
        <Select
          error={Boolean(errors.grupo)}
          name="grupo"
          value={grupo}
          label="Indique el grupo poblacional al que pertenece"
          onChange={handleChangeSelect}
        >
          <MenuItem value={0}>Seleccionar...</MenuItem>
          {Array.from(group).map((item) => (
            <MenuItem key={item.id} value={item.description}>
              {item.description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {errors.grupo && <div style={{ color: "red" }}>{errors.grupo}</div>}
    </Grid>
  );
};
