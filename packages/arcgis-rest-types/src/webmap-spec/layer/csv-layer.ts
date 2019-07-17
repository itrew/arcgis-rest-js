/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import {
  ILayerBase,
  ILayerDefinitionMixin,
  IPopupInfoMixin,
  IRefreshIntervalMixin,
  IShowLegendMixin,
  IUrlMixin
} from "./util";

/**
 * The CSV layer type references a CSV or TXT file from a
 * publicly-accessible web server. It then dynamically loads into the
 * map at run time. The CSV layer will maintain a reference to the
 * CSV resource.
 *
 * @export
 * @interface ICsvLayer
 * @extends {ILayerBase, IPopupInfoMixin, IRefreshIntervalMixin, IShowLegendMixin, IUrlMixin}
 * @see https://developers.arcgis.com/web-map-specification/objects/csvLayer/
 */
export interface ICsvLayer
  extends ILayerBase,
    ILayerDefinitionMixin,
    IPopupInfoMixin,
    IRefreshIntervalMixin,
    IShowLegendMixin,
    IUrlMixin {
  layerType: "CSV";
  /**
   * A string defining the character used to separate columns in a CSV
   * file.
   */
  columnDelimiter?: "," | " " | ";" | "|" | "\t";
  /**
   * A locationInfo object defining how location information will be
   * retrieved from a CSV file.
   */
  locationInfo?: ILocationInfo;
  /**
   * Deprecated, use layerType instead.
   *
   * @deprecated
   */
  type?: "CSV";
}

/**
 * Defines how location information will be retrieved from a CSV file
 * referenced through the web, ie. referenced by URL.
 *
 * @export
 * @interface ILocationInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/locationInfo/
 */
export interface ILocationInfo {
  /**
   * A string defining the field name that holds the latitude (Y)
   * coordinate.
   */
  latitudeFieldName?: string;
  /**
   * String value indicating location type.
   */
  locationType?: "coordinates";
  /**
   * A string defining the field name that holds the longitude (X)
   * coordinate.
   */
  longitudeFieldName?: string;
}
