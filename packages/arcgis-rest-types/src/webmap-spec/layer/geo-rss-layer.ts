/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import {
  ILayerBase,
  IRefreshIntervalMixin,
  IShowLegendMixin,
  IUrlMixin
} from "./util";
import {
  IPictureMarkerSymbol,
  ISimpleFillSymbol,
  ISimpleLineSymbol
} from "../../common-data-types/index";

/**
 * GeoRSS feeds may contain any combination of points, lines, and polygons.
 * Web clients use a GeoRSS to JSON request service. This service returns
 * one to many feature collections with different geometry types. The
 * returned JSON specifies the point, lines, and polygons symbols used to
 * display the features in that layer.
 *
 * @export
 * @interface IGeoRssLayer
 * @extends {ILayerBase}
 * @extends {IRefreshIntervalMixin}
 * @extends {IShowLegendMixin}
 * @extends {IUrlMixin}
 * @see https://developers.arcgis.com/web-map-specification/objects/geoRSSLayer/
 */
export interface IGeoRssLayer
  extends ILayerBase,
    IRefreshIntervalMixin,
    IShowLegendMixin,
    IUrlMixin {
  layerType: "GeoRSS";
  /**
   * Defined by the GeoRSS to JSON request service. If the GeoRSS feed
   * does not have lines, this property is not added to the layer JSON.
   */
  lineSymbol?: ISimpleLineSymbol;
  /**
   * Defined by the GeoRSS to JSON request service. If the GeoRSS feed
   * does not have points, this property is not added to the layer JSON.
   *
   * Only picture marker symbols are documented, but it may also allow
   * simple marker symbols.
   */
  pointSymbol?: IPictureMarkerSymbol;
  /**
   * Defined by the GeoRSS to JSON request service. If the GeoRSS feed
   * does not have polygons, this property is not added to the layer
   * JSON.
   */
  polygonSymbol?: ISimpleFillSymbol;
  /**
   * Deprecated, please use layerType.
   * @deprecated
   */
  type?: "GeoRSS";
}
