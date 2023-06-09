import { Data, Errors } from "@/interface";

export const ValidationLocation = (data: Data) => {
  let errors: Errors = {};

  if (!data.barrio.trim()) {
    errors.barrio = "El barrio es requerido";
  }

  if (!data.comuna.trim()) {
    errors.comuna = "La comuna es requerida";
  }

  return errors;
};
