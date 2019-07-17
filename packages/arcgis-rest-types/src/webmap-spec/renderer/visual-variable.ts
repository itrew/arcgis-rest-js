/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { ILegendOptions } from "./legend-options";
import { Color } from "../../common-data-types/index";

/**
 * The colorInfo visual variable defines how a continuous color ramp is
 * applied to features based on the values of a numeric field attribute.
 *
 * @export
 * @interface IColorInfoVisualVariable
 * @see https://developers.arcgis.com/web-map-specification/objects/colorInfo_visualVariable/
 */
export interface IColorInfoVisualVariable {
  /**
   * Attribute field used for color rendering if no valueExpression is
   * provided.
   */
  field: string;
  /**
   * Options available for the legend.
   */
  legendOptions?: ILegendOptions;
  /**
   * Attribute field used to normalize the data.
   */
  normalizationField?: string;
  /**
   * An array of stop objects.
   */
  stops?: IColorStop[];
  /**
   * Specifies the type of visual variable. Value of this property
   * must be colorInfo
   */
  type: "colorInfo";
  /**
   * An Arcade expression that computes a value in lieu of a value
   * provided by an attribute field.
   */
  valueExpression?: string;
  /**
   * The title identifying and describing the associated Arcade
   * expression as defined in the valueExpression property.
   */
  valueExpressionTitle?: string;
}

/**
 * A colorStop object describes the renderer's color ramp with more
 * specificity than just colors.
 *
 * @export
 * @interface IColorStop
 * @see https://developers.arcgis.com/web-map-specification/objects/colorStop/
 */
export interface IColorStop {
  /**
   * A CSS color string or an array of rbga values. The color to place\
   * at the stop indicated by either a ratio or value.
   */
  color: Color;
  /**
   * Value if a label is needed on the legend for a stop.
   */
  label?: string;
  /**
   * The pixel intensity value. Describes the pixel intensity value that
   * the color should be associated with. Just like in colorInfo, using
   * value will ignore maxPixelIntensity and minPixelIntensity properties.
   * It will actually set those properties to maximum and minimum values
   * you set in the colorStops array. The hard values are converted to
   * ratios to create the color gradient that is used in the heatmap
   * calculations. Setting minPixelIntensity or maxPixelIntensity, after
   * setting colorStops with values, removes the hard link between the
   * color ramp and the pixel intensity values that were used to create it.
   */
  value: number;
}

/**
 * The rotation visual variable defines how features rendered with marker
 * symbols are rotated. The rotation value is determined by a value in a
 * field or an Arcade expression calculating a value. Use either the field
 * property or valueExpression when specifying rotation values.
 *
 * @export
 * @interface IRotationInfoVisualVariable
 * @see https://developers.arcgis.com/web-map-specification/objects/rotationInfo_visualVariable/
 */
export interface IRotationInfoVisualVariable {
  /**
   * Attribute field used for setting the rotation of a symbol if no
   * valueExpression is provided.
   */
  field: string;
  /**
   * Options available for the legend.
   */
  legendOptions?: ILegendOptions;
  /**
   * Defines the origin and direction of rotation depending on how the angle
   * of rotation was measured. Possible values are geographic which rotates
   * the symbol from the north in a clockwise direction and arithmetic which
   * rotates the symbol from the east in a counter-clockwise direction.
   */
  rotationType: "geographic" | "arithmetic";
  /**
   * Specifies the type of visual variable. Value of this property
   * must be rotationInfo
   */
  type: "rotationInfo";
  /**
   * 	An Arcade expression evaluating to a number.
   */
  valueExpression?: string;
  /**
   * The title identifying and describing the associated Arcade
   * expression as defined in the valueExpression property.
   */
  valueExpressionTitle?: string;
}

/**
 * The sizeInfo visual variable defines how size is applied to features
 * based on the values of a numeric field attribute. The minimum and
 * maximum values of the data should be indicated along with their
 * respective size values. You must specify minSize and maxSize or stops
 * to construct the size ramp. All features with values falling in
 * between the specified min and max data values (or stops) will be
 * scaled proportionally between the provided min and max sizes.
 *
 * @export
 * @interface SizeInfoVisualVariable
 * @see https://developers.arcgis.com/web-map-specification/objects/sizeInfo_visualVariable/
 */
export interface ISizeInfoVisualVariable {
  /**
   * Deprecated, please use valueExpression in its place. The value which
   * allows a size to be defined based on the map scale. Currently, the
   * only supported expression is, view.scale.
   *
   * @deprecated
   */
  expression?: string;
  /**
   * Attribute field used for size rendering if no valueExpression is
   * provided.
   */
  field: string;
  /**
   * Options available for the legend.
   */
  legendOptions?: ILegendOptions;
  /**
   * The maximum data value.
   */
  maxDataValue?: number;
  /**
   * Specifies the largest marker size to use at any given map scale.
   * Can be either a fixed number or object, depending on whether the user
   * chose a fixed range or not.
   */
  maxSize?: ISize | number;
  /**
   * 	The minimum data value.
   */
  minDataValue?: number;
  /**
   * Specifies the smallest marker size to use at any given map scale.
   * Can be either a fixed number or object, depending on whether the user
   * chose a fixed range or not.
   */
  minSize?: ISize | number;
  /**
   * Attribute field used to normalize the data.
   */
  normalizationField?: string;
  /**
   * An array of objects that defines the thematic size ramp in a sequence
   * of data or expression stops. At least two stops are required. The stops
   * must be listed in ascending order based on the value of the value
   * property in each stop. This property is required if minDataValue,
   * maxDataValue, minSize, and maxSize are not defined. This property is
   * also required when setting a size visual variable to the minSize or
   * maxSize properties based on expression (e.g. expression: 'view.scale').
   */
  stops: ISizeStop[];
  /**
   * Only used when sizeInfo is used for polygon outlines. If property is
   * present, value of this property must be outline
   */
  target?: "outline";
  /**
   * Specifies the type of visual variable. Value of this property must
   * be sizeInfo
   */
  type: "sizeInfo";
  /**
   * An Arcade expression evaluating to a number. New style is similar
   * to $view.scale. This is used in combination with the target outline
   * property where the outline looks thinner at smaller scales and thicker
   * at larger scales.
   */
  valueExpression?: string;
  /**
   * The title identifying and describing the associated Arcade
   * expression as defined in the valueExpression property.
   */
  valueExpressionTitle?: string;
  /**
   * A string value indicating the required unit of measurement.
   */
  valueUnit?: string;
}

/**
 * Specifies the marker size to use at any given map scale. This is
 * required if valueUnit is set to unknown.
 *
 * @export
 * @interface ISize
 * @see https://developers.arcgis.com/web-map-specification/objects/size/
 */
export interface ISize {
  /**
   * The value which allows a size to be defined based on the map scale.
   * Currently the only supported expression is view.scale.
   */
  expression?: string;
  /**
   * An array of objects that define the size of the symbol at various
   * values of the expression. Each object in the array has a numeric
   * size property and a numeric value property. If the value calculated
   * from the expression matches the value of a stop, then the size
   * corresponding to that stop is selected. For example, if
   * expression is set to view.scale, the value corresponds to
   * the map's scale. The size represents the symbol size (in points)
   * that corresponds to this scale. If the map scale matches the scale
   * value of a stop, the size corresponding to that stop value is used
   * as the symbol size for the features. If the map scale value falls
   * between two stops, the symbol size is interpolated between the sizes
   * of the two stops. The minSize and maxSize stop values are usually
   * the same, although it is possible to have different values depending
   * on how minSize is calculated versus the maxSize.
   */
  stops: ISizeStop[];
  /**
   * Value indicating the type of rendering. Value of this property
   * must be sizeInfo
   */
  type: "sizeInfo";
  /**
   * An Arcade expression evaluating to a number.
   */
  valueExpression?: string;
}

/**
 * A sizeStop object describes the size of the symbol at various
 * values of the expression.
 *
 * @export
 * @interface ISizeStop
 * @see https://developers.arcgis.com/web-map-specification/objects/sizeStop/
 */
export interface ISizeStop {
  /**
   * Specifies the marker size to use for the specified value.
   */
  size: number;
  /**
   * The value to be mapped to a size. Depending on how the visual variable
   * is defined, the value may represent the value of an attribute field or
   * the value returned by an expression.
   */
  value: number;
}

/**
 * The transparencyInfo visual variable defines the transparency, or
 * opacity, of each feature's symbol based on a numeric attribute
 * field value.
 *
 * @export
 * @interface TransparencyInfoVisualVariable
 * @see https://developers.arcgis.com/web-map-specification/objects/transparencyInfo_visualVariable/
 */
export interface ITransparencyInfoVisualVariable {
  /**
   * Attribute field used for setting the transparency of a feature if no
   * valueExpression is provided.
   */
  field: string;
  /**
   * Options available for the legend.
   */
  legendOptions?: ILegendOptions;
  /**
   * Attribute field used to normalize the data.
   */
  normalizationField?: string;
  /**
   * An array of transparencyStop objects.
   */
  stops?: ITransparencyStop[];
  /**
   * Specifies the type of visual variable. Value of this property
   * must be transparencyInfo
   */
  type: "transparencyInfo";
  /**
   * 	An Arcade expression evaluating to a number.
   */
  valueExpression?: string;
  /**
   * The title identifying and describing the associated Arcade
   * expression as defined in the valueExpression property.
   */
  valueExpressionTitle?: string;
}

/**
 * The transparencyStop object defines the thematic opacity ramp in a
 * sequence of stops. At least two stops are required. The stops must be
 * listed in ascending order based on the value of the value property in
 * each stop.
 *
 * @export
 * @interface ITransparencyStop
 * @see https://developers.arcgis.com/web-map-specification/objects/transparencyStop/
 */
export interface ITransparencyStop {
  /**
   * 	A string value used to label the stop in the legend.
   */
  label?: string;
  /**
   * A numeric transparency value for a stop ranging from 0-100, where
   * 0 is opaque and 100 is 100% transparent.
   */
  transparency: number;
  /**
   * The pixel intensity value. Describes the pixel intensity value
   * that the color should be associated with.
   */
  value: number;
}

/**
 * An object used to set rendering options. Please see the individual visual
 * variable for specific information on how it is used.
 *
 * @type VisualVariable
 * @see https://developers.arcgis.com/web-map-specification/objects/visualVariable/
 */
export type VisualVariable =
  | IColorInfoVisualVariable
  | IRotationInfoVisualVariable
  | ISizeInfoVisualVariable
  | ITransparencyInfoVisualVariable;
