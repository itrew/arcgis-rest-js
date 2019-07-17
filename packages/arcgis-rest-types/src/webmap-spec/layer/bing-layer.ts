/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { ILayerBase } from "./util";

/**
 * Indicates if working with Microsoft Bing layers. There are three
 * layer types associated with Bing Layers: BingMapsAerial,
 * BingMapsRoad, and BingMapsHybrid.
 *
 * @export
 * @interface IBingLayer
 * @extends {ILayerBase}
 * @see https://developers.arcgis.com/web-map-specification/objects/bingLayer/
 */
export interface IBingLayer extends ILayerBase {
  layerType: "BingMapsAerial" | "BingMapsRoad" | "BingMapsHybrid";
  /**
   * A string value representing the URL to the Portal/organization
   * Self resource. Calls should be made to this property to retrieve
   * the Bing key. If the key is not made accessible to the public or
   * if canShareBingPublic is false, any web maps using Bing layers
   * will not work.
   */
  portalUrl: string;
  /**
   * Deprecated, use layerType instead.
   *
   * @deprecated
   */
  type?: string;
}
