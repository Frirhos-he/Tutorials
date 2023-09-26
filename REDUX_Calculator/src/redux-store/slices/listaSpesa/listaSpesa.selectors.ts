import { RootState } from "redux-store";
import { listaSpesaStore } from "./index";

export const getListaSpesa = (state: RootState) => state?.listaSpesa;
export const getlistaSpesaspesa = (state: RootState) =>
  state?.listaSpesa?.spesa ?? [];
