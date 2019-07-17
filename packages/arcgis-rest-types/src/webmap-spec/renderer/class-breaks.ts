/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { IAuthoringInfo } from "./authoring-info";
import { ILegendOptions } from "./legend-options";
import { EsriSymbol } from "./util";
import { VisualVariable } from "./visual-variable";
import { ISimpleFillSymbol } from "../../common-data-types/index";

/**
 * A class breaks renderer symbolizes based on the value of some numeric
 * attribute. The classBreakInfo define the values at which the
 * symbology changes.
 *
 * @export
 * @interface IClassBreaksRenderer
 * @see https://developers.arcgis.com/web-map-specification/objects/classBreaksRenderer/
 */
export interface IClassBreaksRenderer {
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
   * Array of classBreakInfo objects.
   */
  classBreakInfos: IClassBreakInfo[];
  /**
   * Determines the classification method that was used to generate class
   * breaks. This has been replaced by authoringInfo.
   */
  classificationMethod?:
    | "esriClassifyDefinedInterval"
    | "esriClassifyEqualInterval"
    | "esriClassifyGeometricalInterval"
    | "esriClassifyNaturalBreaks"
    | "esriClassifyQuantile"
    | "esriClassifyStandardDeviation"
    | "esriClassifyManual";
  /**
   * Label for the default symbol used to draw unspecified values.
   */
  defaultLabel?: string;
  /**
   * Symbol used when a value cannot be classified.
   */
  defaultSymbol?: EsriSymbol;
  /**
   * Attribute field used for renderer.
   */
  field: string;
  /**
   * A legend containing one title, which is a string describing the
   * renderer in the legend.
   */
  legendOptions?: ILegendOptions;
  /**
   * The minimum numeric data value needed to begin class breaks.
   */
  minValue?: number;
  /**
   * Used when normalizationType is field. The string value indicating
   * the attribute field by which the data value is normalized.
   */
  normalizationField?: string;
  /**
   * Used when normalizationType is percent-of-total, this number
   * property contains the total of all data values.
   */
  normalizationTotal?: number;
  /**
   * Determine how the data was normalized.
   */
  normalizationType?:
    | "esriNormalizeByField"
    | "esriNormalizeByLog"
    | "esriNormalizeByPercentOfTotal";
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
   * be classBreaks
   */
  type: "classBreaks";
  /**
   * An Arcade expression evaluating to a number.
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
 * The classBreaksInfo object provides information about the class breaks
 * associated with the renderer.
 *
 * @export
 * @interface IClassBreakInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/classBreakInfo/
 */
export interface IClassBreakInfo {
  /**
   * A numeric value used to specify the maximum value for a break.
   */
  classMaxValue: number;
  /**
   * A numeric value used to specify discontinuous class breaks. If
   * this value is null or is missing, the map server will calculate the
   * minimum value based on the preceding class' maximum value.
   */
  classMinValue?: number;
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
}
