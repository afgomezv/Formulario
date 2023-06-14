//*REACT
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

//*Interface
import {
  Data,
  Direction,
  ErrorDirection,
  ErrorLocation,
  Errors,
} from "@/interface";
import { SelectChangeEvent } from "@mui/material";
import {
  ValidationDirection,
  ValidationLocation,
  getDate,
  onValidate,
} from "@/helpers";

export interface FormProps {
  data: Data;
  direction: Direction;
  errors: Errors;
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
  handleChangeSelect: (
    event: SelectChangeEvent<string>,
    child: ReactNode
  ) => void;
  handleChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

//*UseContext
export const FormContext = createContext<FormProps>({} as FormProps);

export const FormProvider = ({ children }: any) => {
  const [errors, setErrors] = useState<Errors>({});
  const [errorsDir, setErrorsDir] = useState<ErrorDirection>({});
  const [errorsLoc, setErrorsLoc] = useState<ErrorLocation>({});
  const [data, setData] = useState<Data>({
    fecha: getDate(),
    solicitud: "",
    persona: "",
    documento: "",
    identificacion: "",
    nombres: "",
    apellidos: "",
    entidad: "",
    respuesta: "",
    correo: "",
    departamento: "",
    ciudad: "",
    comuna: "",
    barrio: "",
    direccion: "",
    telefono: "",
    grupo: "",
    texto: "",
  });

  const [direction, setDirection] = useState<Direction>({
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

  const handleChangeSelect = (
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(data);

    const errors = onValidate(data);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      if (data.respuesta === "Físico") {
        const errorsDir = ValidationDirection(direction);
        const errorsLoc = ValidationLocation(data);
        setErrorsDir(errorsDir);
        setErrorsLoc(errorsLoc);
        if (
          Object.keys(errorsDir).length === 0 &&
          Object.keys(errorsLoc).length === 0
        ) {
          console.log("Estoy Aquí");
        }
      }
    }
  };

  return (
    <FormContext.Provider
      value={{
        data,
        direction,
        errors,
        setDirection,
        handleChangeSelect,
        handleChangeInput,
        handleSubmit,
      }}
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
