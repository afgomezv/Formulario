//*Context React
import { useFormulario } from "@/contexts/FormContext";

//* Datos
import { departament } from "@/data";

//* Material UI
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

export const Departament = () => {
  const { data, handleChange } = useFormulario();
  const { departamento } = data;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel>Departamento</InputLabel>
        <Select
          //error={Boolean(errors.request)}
          name="departamento"
          value={departamento}
          label="Departamento"
          onChange={handleChange}
        >
          <MenuItem value={""}>Seleccionar...</MenuItem>
          {departament.map((item) => (
            <MenuItem key={item.id} value={item.departamento}>
              {item.departamento}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* {errors.request && <div style={{ color: "red" }}>{errors.request}</div>} */}
    </Grid>
  );
};
