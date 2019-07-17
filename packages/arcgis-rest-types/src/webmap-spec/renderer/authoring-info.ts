/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { Color } from "../../common-data-types/index";

/**
 * The authoringInfo is an object containing metadata about the authoring
 * process for creating a renderer object. This allows the authoring
 * clients to save specific overridable settings so that next time it is
 * accessed via an authoring client, their selections are remembered.
 * Non-authoring clients can ignore it. Properties for color/size/
 * transparency sliders, theme selection, classification information, and
 * additional properties are saved within this object.
 *
 * The authoringInfo object is not required with a renderer. It is only
 * used if rendering was generated using some authoring clients rendering
 * tools. All snippets provided below show a portion of what is contained
 * within authoringInfo. Please refer to the sample snippets in the
 * authoringInfo visual variable object for additional help.
 *
 * @export
 * @interface IAuthoringInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/authoringInfo/
 */
export interface IAuthoringInfo {
  /**
   * Used for classed color or size. The default value is
   * esriClassifyManual.
   */
  classificationMethod?:
    | "classificationMethod: "
    | "esriClassifyNaturalBreaks"
    | "esriClassifyEqualInterval"
    | "esriClassifyQuantile"
    | "esriClassifyStandardDeviation"
    | "esriClassifyManual";
  /**
   * A colorRamp object is used to specify a range of colors that are
   * applied to a group of symbols.
   */
  colorRamp?: IAlgorithmicColorRamp | IMultipartColorRamp;
  /**
   * Contains information about an attribute field relating to
   * Relationship renderers.
   */
  field1?: IAuthoringInfoField;
  /**
   * Contains information about an attribute field relating to
   * Relationship renderers.
   */
  field2?: IAuthoringInfoField;
  /**
   * An array of string values representing field names used for
   * creating predominance renderers.
   */
  fields?: string[];
  /**
   * Optional. Used for Relationship renderer. If not set, the
   * legend will default to being square.
   */
  focus?: "HH" | "HL" | "LH" | "LL";
  /**
   * Number of classes to be associated with the relationship.
   * Used for Relationship renderer.
   */
  numClasses?: number;
  /**
   * Use this property if the classificationMethod is
   * esriClassifyStandardDeviation.
   */
  standardDeviationInterval?: 1 | 0.5 | 0.33 | 0.25;
  /**
   * Type:String.
   */
  type?: "classedSize" | "classedColor" | "predominance" | "relationship";
  /**
   * An array of visualVariable objects containing additional
   * information needed when authoring the renderer.
   */
  visualVariables: IAuthoringInfoVisualVariable[];
}

/**
 * A colorRamp object is used to specify a range of colors that
 * are applied to a group of symbols.
 *
 * @export
 * @interface IAlgorithmicColorRamp
 * @see https://developers.arcgis.com/web-map-specification/objects/colorRamp/
 */
export interface IAlgorithmicColorRamp {
  /**
   * Algorithm used for calculating the ramp.
   */
  algorithm: "esriHSVAlgorithm" | "esriCIELabAlgorithm" | "esriLabLChAlgorithm";
  /**
   * Array representing the initial color to start the ramp from.
   */
  fromColor: Color;
  /**
   * Array representing the final color to end the ramp with.
   */
  toColor: Color;
  /**
   * Value indicating the type of colorRamp.
   */
  type: "algorithmic";
}

/**
 * A colorRamp object is used to specify a range of colors that
 * are applied to a group of symbols.
 *
 * @export
 * @interface IMultipartColorRamp
 * @see https://developers.arcgis.com/web-map-specification/objects/colorRamp/
 */
export interface IMultipartColorRamp {
  /**
   * A multipart color ramp is defined by a list of constituent color
   * ramps.
   */
  colorRamps: IAlgorithmicColorRamp[];
  /**
   * Value indicating the type of colorRamp.
   */
  type: "multipart";
}

/**
 * Contains information about an attribute field relating to Relationship
 * renderers.
 *
 * @export
 * @interface IAuthoringInfoField
 * @see https://developers.arcgis.com/web-map-specification/objects/field_authoringInfo/
 */
export interface IAuthoringInfoField {
  /**
   * An array of class break infos.
   */
  classBreakInfos: IAuthoringInfoClassBreakInfo[];
  /**
   * Attribute field used for renderer.
   */
  field: string;
  /**
   * Attribute field used to normalize the data.
   */
  normalizationField?: string;
}

/**
 * The classBreaksInfo object provides information about the class breaks
 * associated with the Relationship renderer.
 *
 * @export
 * @interface IAuthoringInfoClassBreakInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/classBreakInfo_authoringInfo/
 */
export interface IAuthoringInfoClassBreakInfo {
  /**
   * A numeric value used to specify the maximum value for a break.
   */
  maxValue: number;
  /**
   * A numeric value used to specify the minimum value for a break.
   */
  minValue: number;
}

/**
 * This visual variable pertains specifically to authoringInfo and is
 * different from visual variables directly on the renderer.
 *
 * @export
 * @interface IAuthoringInfoVisualVariable
 * @see https://developers.arcgis.com/web-map-specification/objects/authoringInfo_visualVariable/
 */
export interface IAuthoringInfoVisualVariable {
  /**
   * A Unix stamp. Both startTime or endTime can be fields. If this
   * is the case, their names must be different.
   */
  endTime?: number;
  /**
   * The attribute field the user chose in the Smart Mapping gallery.
   * Must be the same as in either startTime or endTime.
   */
  field?: string;
  /**
   * A numeric value indicating the maximum value displayed.
   */
  maxSliderValue: number;
  /**
   * A numeric value indicating the minimum value displayed.
   */
  minSliderValue: number;
  /**
   * A Unix time stamp. Both startTime or endTime can be fields. If
   * this is the case, their names must be different.
   */
  startTime?: number;
  /**
   * It is used to map the ratio between two numbers. It is possible
   * to express that relationship as percentages, simple ratios, or
   * an overall percentage.
   */
  style?: "percent" | "ratio" | "percentTotal";
  /**
   * Theme to be used only when working with visual variables of
   * type colorInfo. Default is high-to-low.
   */
  theme?: "high-to-low" | "above-and-below" | "centered-on" | "extremes";
  /**
   * A string value specifying the type of renderer's visual
   * variable.
   */
  type: "colorInfo" | "sizeInfo" | "transparencyInfo" | "rotationInfo";
  /**
   * Units for startTime and endTime.
   */
  units?: "seconds" | "minutes" | "hours" | "days" | "months" | "years";
}
