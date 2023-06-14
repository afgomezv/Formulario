import { Direction, ErrorDirection } from "@/interface";

export const ValidationDirection = (direction: Direction) => {
  let errors: ErrorDirection = {};

  if (!direction.viaPrincipal.trim()) {
    errors.viaPrincipal = "Via principal es requerida";
  }

  if (!direction.numeroPrincipal.trim()) {
    errors.numeroPrincipal = "El número es requerido";
  }

  if (!direction.numeroSecundario.trim()) {
    errors.numeroSecundario = "El número es requerido";
  }

  return errors;
};
