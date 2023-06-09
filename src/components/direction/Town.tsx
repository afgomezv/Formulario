//*Context React
import { useFormulario } from "@/contexts/FormContext";

//* Datos
import { municipios } from "@/data";

//* Material UI
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

export const Town = () => {
  const { data, handleChange } = useFormulario();
  const { ciudad } = data;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel>Municipio</InputLabel>
        <Select
          //error={Boolean(errors.request)}
          name="ciudad"
          value={ciudad}
          label="Ciudad"
          onChange={handleChange}
        >
          <MenuItem value={""}>Seleccionar...</MenuItem>
          {municipios.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* {errors.request && <div style={{ color: "red" }}>{errors.request}</div>} */}
    </Grid>
  );
};
