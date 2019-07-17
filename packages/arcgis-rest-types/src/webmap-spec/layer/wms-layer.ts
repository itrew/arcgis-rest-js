/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import {
  IIsReferenceMixin,
  IItemIdMixin,
  ILayerBase,
  IRefreshIntervalMixin,
  IShowLegendMixin,
  IUrlMixin
} from "./util";
import { Position } from "../../common-data-types/index";

/**
 * A layer consuming a Web Map Service (WMS). The WMS specification is
 * an international specification for serving and consuming dynamic
 * maps on the web.
 *
 * @export
 * @interface IWebMapServiceLayer
 * @extends {ILayerBase}
 * @extends {IIsReferenceMixin}
 * @extends {IItemIdMixin}
 * @extends {IRefreshIntervalMixin}
 * @extends {IShowLegendMixin}
 * @extends {IUrlMixin}
 * @see https://developers.arcgis.com/web-map-specification/objects/wmsLayer/
 */
export interface IWebMapServiceLayer
  extends ILayerBase,
    IIsReferenceMixin,
    IItemIdMixin,
    IRefreshIntervalMixin,
    IShowLegendMixin,
    IUrlMixin {
  layerType: "WMS";
  /**
   * A string containing copyright and access information for a WMS
   * layer. This is copied from the capabilities document exposed by
   * the WMS service.
   */
  copyright?: string;
  /**
   * A sequence of custom parameters to WMS layer requests. These
   * parameters are applied to GetMap and GetFeatureInfo requests.
   * The customLayerParameters property takes precedence if
   * customParameters is also present.
   */
  customLayerParameters?: {
    [key: string]: any;
  };
  /**
   * A sequence of custom parameters to all WMS requests. These
   * parameters are applied to GetCapabilities, GetMap, and
   * GetFeatureinfo requests. If used with the customLayerParameters
   * property, customParameters will not take precedence.
   */
  customParameters?: {
    [key: string]: any;
  };
  /**
   * The minimum bounding rectangle, in decimal degrees, of the area
   * covered by the layer as specified in the capabilities.
   */
  extent?: [Position, Position];
  /**
   * Format of the feature, e.g.text/plain
   */
  featureInfoFormat?: string;
  /**
   * The URL for the WMS GetFeatureInfo call.
   */
  featureInfoUrl?: string;
  /**
   * A string containing the image format to be requested from a
   * WMS service. Default is png.
   */
  format?: "bmp" | "gif" | "jpg" | "png" | "svg";
  /**
   * An array of layer objects from the WMS service.
   */
  layers?: IWebMapServiceChildLayer[];
  /**
   * A string containing the URL of the WMS map. When using a WMS
   * layer, you should also supply the url property. mapUrl is the URL
   * returned by the capabilities to be used for the getMap requests.
   */
  mapUrl?: string;
  /**
   * A number defining the maximum height, in pixels, that should be
   * requested from the service.
   */
  maxHeight?: number;
  /**
   * A number defining the maximum width, in pixels, that should be
   * requested from the service.
   */
  maxWidth?: number;
  /**
   * An array of numbers containing well-known IDs for spatial
   * references supported by the service.
   */
  spatialReferences?: [number];
  /**
   * The URL to the WMS service (getCapabilities URL).
   */
  url?: string;
  /**
   * A string containing the version number of the service.
   */
  version?: string;
  /**
   * An array of layers that should appear visible. The array
   * contains the names of the visible layers.
   */
  visibleLayers?: string[];
}

/**
 * A layer object may allow overrides on popup content and drawing
 * behavior for individual layers of a web service.
 *
 * @export
 * @interface IWebMapServiceChildLayer
 * @see https://developers.arcgis.com/web-map-specification/objects/wmsLayer_layer/
 */
export interface IWebMapServiceChildLayer {
  /**
   * A string URL to a legend graphic for the layer.
   */
  legendUrl?: string;
  /**
   * A string containing a unique name for the layer.
   */
  name?: string;
  /**
   * Boolean specifying whether a layer is queryable or not.
   */
  queryable?: boolean;
  /**
   * Boolean specifying whether to display popup or not.
   */
  showPopup?: boolean;
  /**
   * A user-friendly string title for the layer that can be
   * used in a table of contents.
   */
  title?: string;
}
