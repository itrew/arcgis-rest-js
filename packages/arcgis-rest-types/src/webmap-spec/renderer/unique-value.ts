/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { IAuthoringInfo } from "./authoring-info";
import { ILegendOptions } from "./legend-options";
import { VisualVariable } from "./visual-variable";
import { EsriSymbol } from "./util";
import { ISimpleFillSymbol } from "../../common-data-types/index";

/**
 * This renderer symbolizes features based on one or more matching string
 * attributes.
 *
 * @export
 * @interface IUniqueValueRenderer
 * @see https://developers.arcgis.com/web-map-specification/objects/uniqueValueRenderer/
 */
export interface IUniqueValueRenderer {
  /**
   * An object containing metadata about the authoring process for
   * creating a renderer object. This allows the authoring clients to
   * save specific overridable settings so that next time it is accessed
   * via the UI, their selections are remembered. Non-authoring clients
   * can ignore it.
   */
  authoringInfo?: IAuthoringInfo;
  /**
   * A symbol used for polygon features as a background if the renderer
   * uses point symbols, e.g. for bivariate types & size rendering. Only
   * applicable to polygon layers. PictureFillSymbols can also be used
   * outside of the Map Viewer for Size and Predominance and Size
   * renderers.
   */
  backgroundFillSymbol?: ISimpleFillSymbol;
  /**
   * Label for the default symbol used to draw unspecified values.
   */
  defaultLabel?: string;
  /**
   * Symbol used when a value cannot be classified.
   */
  defaultSymbol?: EsriSymbol;
  /**
   * Attribute field renderer uses to match values.
   */
  field1: string;
  /**
   * If needed, specify an additional attribute field the renderer
   * uses to match values.
   */
  field2?: string;
  /**
   * If needed, specify an additional attribute field the renderer
   * uses to match values.
   */
  field3?: string;
  /**
   * String inserted between the values if multiple attribute fields
   * are specified.
   */
  fieldDelimiter?: string;
  /**
   * A legend containing one title, which is a string describing the
   * renderer in the legend.
   */
  legendOptions?: ILegendOptions;
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
   * Specifies the type of renderer used. Value of this property must
   * be uniqueValue
   */
  type: "uniqueValue";
  /**
   * An array of uniqueValueInfo objects.
   */
  uniqueValueInfos: IUniqueValueInfo[];
  /**
   * An Arcade expression evaluating to either a string or a number.
   */
  valueExpression?: string;
  /**
   * The title identifying and describing the associated Arcade
   * expression as defined in the valueExpression property.
   */
  valueExpressionTitle?: string;
  /**
   * An array of objects used to set rendering properties.
   */
  visualVariables?: VisualVariable[];
}

/**
 * The following is a list of properties found on the uniqueValueInfo object,
 * which is one of the properties on the renderer object. The uniqueValueInfo
 * object contains the symbology for each uniquely drawn value in the
 * renderer.
 *
 * @export
 * @interface IUniqueValueInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/uniqueValueInfo/
 */
export interface IUniqueValueInfo {
  /**
   * String value used to describe the drawn symbol.
   */
  description?: string;
  /**
   * String value used to label the drawn symbol.
   */
  label?: string;
  /**
   * An object used to display the value.
   */
  symbol: EsriSymbol;
  /**
   * String value indicating the unique value.
   */
  value: string;
}
