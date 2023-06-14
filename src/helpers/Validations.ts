import { Data, Errors } from "../interface";

export const onValidate = (data: Data) => {
  let errors: Errors = {};
  let regexString = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexMessage = /^.{1,1000}$/;
  //let regexNumberr = /^([0-9])*$/;
  //let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!data.solicitud.trim()) {
    errors.solicitud = "Tipo de solicitud es requerida";
  }

  if (!data.persona.trim()) {
    errors.persona = "Tipo de persona es requerida";
  }

  if (!data.documento.trim()) {
    errors.documento = "Tipo de documeto es requerido";
  }

  if (!data.identificacion.trim()) {
    errors.identificacion = "Numero identificación es requerido";
  }

  if (!data.nombres.trim()) {
    errors.nombres = "El nombre completo es requerido";
  } else if (!regexString.test(data.nombres)) {
    errors.nombres = "En el campo solo se permite letras";
  }

  if (!data.apellidos.trim()) {
    errors.apellidos = "Apellidos completos son requeridos";
  } else if (!regexString.test(data.apellidos)) {
    errors.apellidos = "En el campo solo se permite letras";
  }

  if (!data.respuesta.trim()) {
    errors.respuesta = "La respuesta es requerida";
  }

  // if (!data.correo.trim()) {
  //   errors.correo = "Correo electrónico es requerido";
  // } else if (!regexEmail.test(data.correo)) {
  //   errors.correo = "El correo electrónico invalido";
  // }

  if (!data.telefono.trim()) {
    errors.telefono = "Telefono / Celular es requerido";
  }

  if (!data.grupo.trim()) {
    errors.grupo = "El grupo que pertence es requerido";
  }

  if (!data.texto.trim()) {
    errors.texto = "La descripción es requerida";
  } else if (!regexMessage.test(data.texto)) {
    errors.texto = "Este campo solo se permite 1000 caracteres";
  }

  return errors;
};
