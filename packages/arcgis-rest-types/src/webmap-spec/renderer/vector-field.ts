/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { VisualVariable } from "./visual-variable";

/**
 * A vector field renderer is a renderer that uses symbolizes a U-V or
 * Magnitude-Direction data.
 *
 * @export
 * @interface IVectorFieldRenderer
 * @see https://developers.arcgis.com/web-map-specification/objects/vectorFieldRenderer/
 */
export interface IVectorFieldRenderer {
  /**
   * Name of the feature attribute field that contains the data value.
   */
  attributeField?: string;
  /**
   * Sets the flow direction of the data.
   */
  flowRepresentation?: "flow_from" | "flow_to";
  /**
   * A string property which controls the origin and direction of
   * rotation. If the rotationType is defined as arithmetic, the
   * symbol is rotated from East in a counter-clockwise direction
   * where East is the 0 degree axis. If the rotationType is defined
   * as geographic, the symbol is rotated from North in a clockwise
   * direction where North is the 0 degree axis.
   */
  rotationType?: "arithmetic" | "geographic";
  /**
   * A predefined style.
   */
  style?:
    | "wind_speed"
    | "single_arrow"
    | "classified_arrow"
    | "beaufort_kn"
    | "beaufort_m"
    | "beaufort_mi"
    | "beaufort_ft"
    | "beaufort_km"
    | "ocean_current_m"
    | "ocean_current_kn"
    | "simple_scalar";
  /**
   * Specifies the type of renderer used. Value of this property must
   * be vectorField
   */
  type: "vectorField";
  /**
   * An array of objects used to set rendering properties.
   */
  visualVariables?: VisualVariable[];
}
