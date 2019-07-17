/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { Color } from "../../common-data-types/index";

/**
 * The heatmap Renderer renders point data into a raster visualization that
 * emphasizes areas of higher density or weighted values.
 *
 * @export
 * @interface IHeatmapRenderer
 * @see https://developers.arcgis.com/web-map-specification/objects/heatmapRenderer/
 */
export interface IHeatmapRenderer {
  /**
   * The radius (in pixels) of the circle over which the majority of each
   * point's value is spread.
   */
  blurRadius?: number;
  /**
   * An array of colorStop objects describing the renderer's color ramp
   * with more specificity than just colors.
   */
  colorStops: IHeatmapColorStop[];
  /**
   * This is optional as this renderer can be created if no field is
   * specified. Each feature gets the same value/importance/weight or with
   * a field where each feature is weighted by the field's value.
   */
  field?: string;
  /**
   * The pixel intensity value which is assigned the final color in the
   * color ramp.
   */
  maxPixelIntensity?: number;
  /**
   * The pixel intensity value which is assigned the initial color in the
   * color ramp.
   */
  minPixelIntensity?: number;
  /**
   * Specifies the type of renderer used. Value of this property must
   * be heatmap
   */
  type: "heatmap";
}

/**
 * A colorStop object describes the renderer's color ramp with more specificity
 * than just colors.
 *
 * @export
 * @interface IHeatmapColorStop
 * @see https://developers.arcgis.com/web-map-specification/objects/heatmap_colorStop/
 */
export interface IHeatmapColorStop {
  /**
   * Color is represented as a four-element array.
   */
  color: Color;
  /**
   * A number between 0-1. Describes what portion along the gradient the
   * colorStop is added.
   */
  ratio: number;
}
