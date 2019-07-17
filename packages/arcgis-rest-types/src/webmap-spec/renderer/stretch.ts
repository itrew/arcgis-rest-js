/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { IAlgorithmicColorRamp, IMultipartColorRamp } from "./authoring-info";

/**
 * This renderer displays continuous raster cell values across a gradual
 * ramp of colors. Use this renderer to draw a single band of continuous
 * data. This renderer works well when you have a large range of values
 * to display, such as with imagery or scientific data.
 *
 * @export
 * @interface IStretchRenderer
 * @see https://developers.arcgis.com/web-map-specification/objects/stretchRenderer/
 */
export interface IStretchRenderer {
  /**
   * A colorRamp object is used to specify a range of colors that are
   * applied to a group of symbols.
   */
  colorRamp?: IAlgorithmicColorRamp | IMultipartColorRamp;
  /**
   * Indicates if gamma values should be computed by default.
   */
  computeGamma?: boolean;
  /**
   * Indicates if Dynamic Range Adjustment should be applied.
   */
  dra?: boolean;
  /**
   * The list of Gamma value(s).
   */
  gamma?: number[];
  /**
   * The current maximum output value.
   */
  max?: number;
  /**
   * The current maximum percent value.
   */
  maxPercent?: number;
  /**
   * The current minimum output value.
   */
  min?: number;
  /**
   * The current minimum percent value.
   */
  minPercent?: number;
  /**
   * The number of standard deviations for standard deviation stretch.
   */
  numberOfStandardDeviations?: number;
  /**
   * Set this from (1 to 6) to adjust the curvature of Sigmoid curve used
   * in color stretch.
   */
  sigmoidStrengthLevel?: number;
  /**
   * The custom raster stretch statistics.
   */
  statistics?: Statistics[];
  /**
   * The stretch types for stretch raster function.
   */
  stretchType?:
    | "none"
    | "standardDeviation"
    | "histogramEqualization"
    | "minMax"
    | "percentClip"
    | "sigmoid";
  /**
   * Specifies the type of renderer used. If property is present, value
   * of this property must be rasterStretch
   */
  type: "rasterStretch";
  /**
   * 	Indicates if the renderer applies Gamma stretch.
   */
  useGamma?: boolean;
}

/**
 * Custom raster statistics
 * [min, max, mean, standard deviation]
 */
export type Statistics = [number, number, number, number];
