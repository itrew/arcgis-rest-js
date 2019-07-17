/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import {
  IItemIdMixin,
  ILayerBase,
  ILayerDefinitionMixin,
  IPopupInfoMixin,
  IShowLegendMixin,
  IUrlMixin
} from "./util";

/**
 * OGC Web Feature Service (WFS) is a dynamic feature service that
 * follows the specifications of OGC.
 *
 * @export
 * @interface IWebFeatureServiceLayer
 * @extends {ILayerBase}
 * @extends {IItemIdMixin}
 * @extends {ILayerDefinitionMixin}
 * @extends {IPopupInfoMixin}
 * @extends {IShowLegendMixin}
 * @extends {IUrlMixin}
 * @see https://developers.arcgis.com/web-map-specification/objects/wfsLayer/
 */
export interface IWebFeatureServiceLayer
  extends ILayerBase,
    IItemIdMixin,
    ILayerDefinitionMixin,
    IPopupInfoMixin,
    IShowLegendMixin,
    IUrlMixin {
  layerType: "WFS";
  /**
   * Number where 0 means 'snapshot' and 1 means 'ondemand'.
   */
  mode?: 0 | 1;
  /**
   * The URL to the layer. If the layer is not from a web service but
   * rather a feature collection, than the url property is omitted.
   */
  url?: string;
  /**
   * Object that defines and provides information about layers in a
   * WFS service.
   */
  wfsInfo?: IWebFeatureServiceInfo;
}

/**
 * Object that defines and provides information about layers in a WFS
 * service.
 *
 * @export
 * @interface IWebFeatureServiceInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/wfsInfo/
 */
export interface IWebFeatureServiceInfo {
  /**
   * A sequence of parameters used to append custom parameters to all
   * WFS requests. These parameters are applied to GetCapabilities,
   * DescribeFeatureType, and GetFeatures.
   */
  customParameters?: {
    [key: string]: any;
  };
  /**
   * URL of the WFS service operation.
   */
  featureUrl?: string;
  /**
   * Set this to limit the number of requested features that a
   * GetFeature request presents.
   */
  maxFeatures?: number;
  /**
   * The name of the WFS layer. This is used to set layer visibility.
   */
  name?: string;
  /**
   * List of supported spatial reference IDs.
   */
  supportedSpatialReferences?: number[];
  /**
   * Boolean value indicating whether X and Y axis are flipped.
   */
  swapXY?: boolean;
  /**
   * Value indicating which version of the WFS specification is used.
   */
  version?: string;
  /**
   * String indicating namespace.
   */
  wfsNamespace?: string;
}
