/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { ISimpleRenderer } from "./simple";

/**
 * Temporal renderers provide time-based rendering of features in a
 * feature layer. It can be useful to visualize historic or real-time
 * data such as earthquake or hurricane occurrences. You can use a
 * temporal renderer to define how observations (regular, historic,
 * latest) and tracks are rendered. You can also show aging of features
 * with respect to the map's time extent.
 *
 * @export
 * @interface ITemporalRenderer
 * @see https://developers.arcgis.com/web-map-specification/objects/temporalRenderer/
 */
export interface ITemporalRenderer {
  /**
   * Simple renderer used to symbolize point geometries for the most
   * current observations.
   */
  latestObservationRenderer: ISimpleRenderer;
  /**
   * Simple renderer used to symbolize regular/historic observations.
   */
  observationalRenderer: ISimpleRenderer;
  /**
   * Simple renderer used to symbolize the tracks.
   */
  trackRenderer: ISimpleRenderer;
  /**
   * Specifies the type of renderer used. If property is present, value
   * of this property must be temporal
   */
  type: "temporal";
}
