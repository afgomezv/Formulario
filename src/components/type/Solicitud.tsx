//*Context React
import { useFormulario } from "@/contexts/FormContext";

//* Datos
import { request } from "@/data";

//* Material UI
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

export const Solicitud = () => {
  const { data, errors, handleChangeSelect } = useFormulario();
  const { solicitud } = data;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel>Tipo de solicitud * </InputLabel>
        <Select
          error={Boolean(errors.solicitud)}
          name="solicitud"
          value={solicitud}
          label="Tipo de solicitud"
          onChange={handleChangeSelect}
        >
          <MenuItem value={" "}>Seleccionar...</MenuItem>
          {Array.from(request).map((item) => (
            <MenuItem key={item.id} value={item.description}>
              {item.description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {errors.solicitud && (
        <div style={{ color: "red" }}>{errors.solicitud}</div>
      )}
    </Grid>
  );
};
