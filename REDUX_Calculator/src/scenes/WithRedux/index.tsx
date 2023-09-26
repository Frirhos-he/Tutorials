import React, { memo } from "react";
import { useWithRedux } from "./index.hooks";
import { Button } from "@mui/material";

type WithReduxProps = {};

export const WithRedux = memo(({}: WithReduxProps) => {
  const {
    styles,
    classes,
    atomicStyles,
    spesa,
    handleItemChange,
    newItem,
    onSubmit,
    handleMedia,
    onRemove,
  } = useWithRedux();

  return (
    <div>
      Lista della spesa:
      <input
        name="expense"
        placeholder="Quanti paperoni hai speso..."
        onChange={handleItemChange}
      />
      <div> Hai inserito: {newItem}</div>
      <Button onClick={onSubmit}>Aggiungi</Button>
      <Button onClick={onRemove}>Rimuovi spesa</Button>
      <div> La media della tua spesa e' {handleMedia}</div>
      {spesa.map((amount, index) => (
        <div key={index}>...{amount?.toFixed(2)?.replace(".", ",")}....</div>
      ))}
    </div>
  );
});
