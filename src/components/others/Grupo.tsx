//*Context React
import { useFormulario } from "@/contexts/FormContext";

//*Data
import { group } from "@/data";

//* Material UI
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

export const Grupo = () => {
  const { data, handleChange } = useFormulario();
  const { grupo } = data;
  return (
    <Grid item xs={12} sm={6}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel>Indique el grupo al que pertenece</InputLabel>
        <Select
          //error={Boolean(errors.group)}
          name="grupo"
          value={grupo}
          label="Indique el grupo al que pertenece"
          onChange={handleChange}
        >
          <MenuItem value={0}>Seleccionar...</MenuItem>
          {Array.from(group).map((item) => (
            <MenuItem key={item.id} value={item.description}>
              {item.description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* {errors.group && <div style={{ color: "red" }}>{errors.group}</div>} */}
    </Grid>
  );
};
