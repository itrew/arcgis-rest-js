/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { BaseMapLayer } from "./layer/index";

/**
 * A basemap layer is a layer that provides geographic context to the map.
 * A web map always contains a basemap. The basemap has a title and is the
 * combination of each baseMapLayer. It is required that a baseMap be saved
 * within the web map.
 *
 * @export
 * @interface IBasemap
 * @see https://developers.arcgis.com/web-map-specification/objects/baseMap/
 */
export interface IBasemap {
  /**
   * An array of baseMapLayer objects defining the basemaps used in the
   * web map.
   */
  baseMapLayers: BaseMapLayer[];
  /**
   * Required string title for the basemap that can be used in a table of
   * contents. It takes the title of the first baseMapLayer in the array.
   */
  title: string;
}
