//* Context React
import { useFormulario } from "@/contexts/FormContext";

//* Datos
import { response } from "@/data";

//* Material UI
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

export const Respuesta = () => {
  const { data, handleChange } = useFormulario();
  const { solicitud } = data;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel>Medio de respuesta * </InputLabel>
        <Select
          //error={Boolean(errors.request)}
          name="request"
          value={solicitud}
          label="Medio de respuesta"
          onChange={handleChange}
        >
          <MenuItem value={""}>Seleccionar...</MenuItem>
          {Array.from(response).map((item) => (
            <MenuItem key={item.id} value={item.description}>
              {item.description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* {errors.request && <div style={{ color: "red" }}>{errors.request}</div>} */}
    </Grid>
  );
};
