import { Data, Errors } from "../interface";

export const ValidationCorreo = (data: Data) => {
  let errors: Errors = {};

  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!data.correo.trim()) {
    errors.correo = "Correo electrónico es requerido";
  } else if (!regexEmail.test(data.correo)) {
    errors.correo = "El correo electrónico invalido";
  }

  return errors;
};
