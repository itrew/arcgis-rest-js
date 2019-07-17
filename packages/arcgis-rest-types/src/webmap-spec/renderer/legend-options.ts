/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

/**
 * Options available for the legend.
 *
 * @export
 * @interface ILegendOptions
 * @see https://developers.arcgis.com/web-map-specification/objects/legendOptions/
 */
export interface ILegendOptions {
  /**
   * Indicates the order in which the legend is displayed.
   */
  order?: "ascendingValues" | "descendingValues";
  /**
   * Indicates whether to show the color/size/opacity ramp in the legend.
   * This property is not available directly under uniqueValueRenderer
   * and/or classBreaksRenderer.
   */
  showLegend: boolean;
  /**
   * The title of the legend.
   */
  title?: string;
}
