//*Context React
import { useFormulario } from "@/contexts/FormContext";

//*Datos
import { person } from "@/data";

//*Material UI
import { FormControl, Select, InputLabel, MenuItem, Grid } from "@mui/material";

export const Persona = () => {
  const { data, errors, handleChangeSelect } = useFormulario();
  const { persona } = data;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel>Tipo de persona * </InputLabel>
        <Select
          error={Boolean(errors.persona)}
          name="persona"
          value={persona}
          label="Tipo de persona *"
          onChange={handleChangeSelect}
        >
          <MenuItem value={" "}>Seleccionar...</MenuItem>
          {Array.from(person).map((item) => (
            <MenuItem key={item.id} value={item.description}>
              {item.description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {errors.persona && <div style={{ color: "red" }}>{errors.persona}</div>}
    </Grid>
  );
};
