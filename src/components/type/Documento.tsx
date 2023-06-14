//* Context React
import { useFormulario } from "@/contexts/FormContext";

//*Datos
import { document } from "@/data";

//*Material UI
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

export const Documento = () => {
  const { data, errors, handleChangeSelect } = useFormulario();
  const { documento } = data;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel>Tipo de documento * </InputLabel>
        <Select
          error={Boolean(errors.documento)}
          name="documento"
          value={documento}
          label="Tipo de documento"
          onChange={handleChangeSelect}
        >
          <MenuItem value={""}>Seleccionar...</MenuItem>
          {Array.from(document).map((item) => (
            <MenuItem key={item.id} value={item.description}>
              {item.description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {errors.documento && (
        <div style={{ color: "red" }}>{errors.documento}</div>
      )}
    </Grid>
  );
};
