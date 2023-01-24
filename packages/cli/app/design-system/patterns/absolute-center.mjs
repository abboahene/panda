import { mapObject } from '../helpers.mjs';
import { css } from '../css/index.mjs';

const config = {transform(props, { map }) {
  const { axis = "both", ...rest } = props;
  return {
    position: "absolute",
    top: map(axis, (v) => v === "x" ? "auto" : "50%"),
    left: map(axis, (v) => v === "y" ? "auto" : "50%"),
    transform: map(
      axis,
      (v) => v === "both" ? "translate(-50%, -50%)" : v === "x" ? "translateX(-50%)" : "translateY(-50%)"
    ),
    ...rest
  };
}}

export const getAbsoluteCenterStyle = (styles) => config.transform(styles, { map: mapObject })

export const absoluteCenter = (styles) => css(getAbsoluteCenterStyle(styles))