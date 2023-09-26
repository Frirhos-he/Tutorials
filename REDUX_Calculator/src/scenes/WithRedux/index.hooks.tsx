import { useCallback, useMemo, useState } from "react";
import { useTheme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import { useAtomicStyles } from "styles";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux-store";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

export const useWithRedux = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const classes = useMemo(() => ({}), []);
  const atomicStyles = useAtomicStyles();
  const spesa = useSelector(selectors.getlistaSpesaspesa);
  const [newItem, setNewItem] = useState(0);
  const dispach = useDispatch();

  const onRemove = useCallback(() => {
    dispach(actions.resetSpesa(0));
  }, []);

  const onSubmit = useCallback(() => {
    const number = Number(newItem);
    console.log(number);
    console.log(spesa);
    if (!isNaN(number)) {
      dispach(actions.addSpesa(number));
      console.log("inisde");
    }
    setNewItem(0);
  }, [dispach, newItem]);

  const handleItemChange = useCallback((ev) => {
    setNewItem(ev.target.value);
  }, []);

  const handleMedia = useMemo(() => {
    const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length; // prev current, initial value

    const result = average(spesa);
    if (isNaN(result)) return 0;
    else return result.toFixed(2).replace(".", ",");
  }, []);

  return {
    styles,
    classes,
    atomicStyles,
    spesa,
    handleItemChange,
    newItem,
    onSubmit,
    handleMedia,
    onRemove,
  };
};
