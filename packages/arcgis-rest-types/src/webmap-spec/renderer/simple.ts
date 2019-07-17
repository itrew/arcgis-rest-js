/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { IAuthoringInfo } from "./authoring-info";
import { VisualVariable } from "./visual-variable";
import { EsriSymbol } from "./util";

/**
 * A simple renderer is a renderer that uses one symbol only.
 *
 * @export
 * @interface ISimpleRenderer
 * @see https://developers.arcgis.com/web-map-specification/objects/simpleRenderer/
 */
export interface ISimpleRenderer {
  /**
   * An object containing metadata about the authoring process for
   * creating a renderer object. This allows the authoring clients to
   * save specific overridable settings so that next time it is accessed
   * via the UI, their selections are remembered. Non-authoring clients
   * can ignore it.
   */
  authoringInfo?: IAuthoringInfo;
  /**
   * Description of the renderer.
   */
  description?: string;
  /**
   * The text string that is displayed in the table of contents.
   */
  label?: string;
  /**
   * A constant value or an expression that derives the angle of
   * rotation based on a feature attribute value. When an attribute
   * name is specified, it's enclosed in square brackets. Rotation is
   * set using a visual variable of type rotationInfo with a specified
   * field or valueExpression property.
   */
  rotationExpression?: string | number;
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
   * An object that represents how all features will be drawn.
   */
  symbol: EsriSymbol;
  /**
   * Specifies the type of renderer used. Value of this property
   * must be simple
   */
  type: "simple";
  /**
   * An array of objects used to set rendering properties.
   */
  visualVariables?: VisualVariable[];
}
