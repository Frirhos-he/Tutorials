import * as extraActions from "../extra-actions";
import * as ajax from "./ajax";
import * as feedback from "./feedback";
import * as listaSpesa from "./listaSpesa";

export const reducers = {
  ajax: ajax.ajaxStore.reducer,
  feedback: feedback.feedbackStore.reducer,
  listaSpesa: listaSpesa.listaSpesaStore.reducer,
};

export const actions = {
  ...extraActions,
  ...ajax.ajaxStore.actions,
  ...feedback.feedbackStore.actions,
  ...listaSpesa.listaSpesaStore.actions,
};

export const selectors = {
  ...ajax.selectors,
  ...feedback.selectors,
  ...listaSpesa.selectors,
};

export const sagas = [
  ...Object.values(ajax.sagas),
  ...Object.values(feedback.sagas),
  ...Object.values(listaSpesa.sagas),
];
