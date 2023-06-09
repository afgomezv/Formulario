//*REACT
import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

//*Interface
import { Data, Direction } from "@/interface";
import { SelectChangeEvent } from "@mui/material";

export interface FormProps {
  data: Data;
  direction: Direction;
  setDirection: Dispatch<
    SetStateAction<{
      viaPrincipal: string;
      numeroPrincipal: string;
      letraPrincipal: string;
      direccionPrincipal: string;
      numeroSecundario: string;
      letraSecundaria: string;
      direccionSecundaria: string;
      placa: string;
      complemento: string;
    }>
  >;
  handleChange: any;
}

//*UseContext
export const FormContext = createContext<FormProps>({} as FormProps);

export const FormProvider = ({ children }: any) => {
  const [data, setData] = useState({
    fecha: "",
    solicitud: "",
    persona: "",
    documento: "",
    identificacion: "",
    nombres: "",
    apellidos: "",
    entidad: "",
    respuesta: "",
    correo: "",
    direccion: "",
    telefono: "",
    grupo: "",
    texto: "",
  });

  const [direction, setDirection] = useState({
    viaPrincipal: "",
    numeroPrincipal: "",
    letraPrincipal: "",
    direccionPrincipal: "",
    numeroSecundario: "",
    letraSecundaria: "",
    direccionSecundaria: "",
    placa: "",
    complemento: "",
  });

  const handleChange = (
    event:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <FormContext.Provider
      value={{ data, direction, setDirection, handleChange }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormulario = () => {
  const formularioContext = useContext(FormContext);
  if (!formularioContext) {
    throw new Error("UseFormulario debe estar dentro FormProvider");
  }
  return formularioContext;
};
