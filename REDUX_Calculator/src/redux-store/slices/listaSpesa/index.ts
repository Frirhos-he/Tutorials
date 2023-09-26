import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "./listaSpesa.selectors";
import { addSpesaAction, ListaSpesaState } from "./listaSpesa.interfaces";
import * as extraActions from "../../extra-actions";
import * as sagas from "./listaSpesa.sagas";

const initialState: ListaSpesaState = {
  spesa: [],
};

export const listaSpesaStore = createSlice({
  name: "listaSpesa",
  initialState,
  reducers: {
    addSpesa: (state, action: addSpesaAction) => {
      state.spesa = state.spesa ?? [];
      state.spesa.push(action.payload);
    },
    resetSpesa: (state, action) => {
      state.spesa = [];
    },
  },
});

export { selectors, sagas };
