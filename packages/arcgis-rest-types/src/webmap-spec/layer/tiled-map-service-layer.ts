/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import {
  IIsReferenceMixin,
  IItemIdMixin,
  ILayerBase,
  IPopupInfoMixin,
  IRefreshIntervalMixin,
  IShowLegendMixin,
  IUrlMixin
} from "./util";
import { IExtent } from "../../common-data-types/index";

/**
 * An ArcGIS Tiled Map Service layer displays map content from
 * an ArcGIS Server Map service that has been cached (tiled).
 *
 * @export
 * @interface ITiledMapServiceLayer
 * @extends {ILayerBase}
 * @extends {IIsReferenceMixin}
 * @extends {IItemIdMixin}
 * @extends {IRefreshIntervalMixin}
 * @extends {IShowLegendMixin}
 * @extends {IUrlMixin}
 */
export interface ITiledMapServiceLayer
  extends ILayerBase,
    IIsReferenceMixin,
    IItemIdMixin,
    IRefreshIntervalMixin,
    IShowLegendMixin,
    IUrlMixin {
  layerType: "ArcGISTiledMapServiceLayer";
  /**
   * NOTE: Applicable if used as a baseMapLayer. Integer value(s)
   * indicating the display levels of the basemap layer. Only
   * applicable for TiledMapService layers. All tiled map service
   * layers should share the same tiling scheme. This property
   * cannot be set via the Map Viewer UI.
   */
  displayLevels?: number | number[];
  /**
   * NOTE: Applicable if used as a baseMapLayer. An array of
   * exclusionArea objects defining the layer exclusions.
   */
  exclusionAreas?: IExclusionArea[];
  /**
   * An array of layer objects defining a URL for queries and the
   * popup window content.
   */
  layers?: ITiledMapServiceChildLayer[];
  /**
   * URL to the ArcGIS Server tiled Map Service
   */
  url?: string;
}

/**
 * A layer object may allow overrides on popup content and drawing
 * behavior for individual layers of a web service.
 *
 * @export
 * @interface ITiledMapServiceChildLayer
 * @see https://developers.arcgis.com/web-map-specification/objects/tiledMapServiceLayer/#layers-properties
 */
export interface ITiledMapServiceChildLayer
  extends IPopupInfoMixin,
    IShowLegendMixin {
  /**
   * Indicates whether to allow a client to ignore the popups
   * defined on the layer. The popupInfo object could be saved in
   * the map or item.
   */
  disablePopup?: boolean;
  /**
   * The layer id, as a numeric value.
   */
  id?: number;
  /**
   * The associated query layer's itemId. Only available when there
   * is a layerUrl. You will see this if popups are configured on it.
   */
  layerItemId?: string;
  /**
   * A URL to a service that should be used for all queries against
   * the layer.
   */
  layerUrl?: string;
}

/**
 * Exclusion areas define extent areas where no data will be
 * fetched for a layer.
 *
 * @export
 * @interface IExclusionArea
 * @see https://developers.arcgis.com/web-map-specification/objects/exclusionArea/
 */
export interface IExclusionArea {
  /**
   * The geometry defining the area where no data will be fetched.
   * Only extent is supported.
   */
  geometry?: IExtent;
  /**
   * The zoom level where the exclusion ends.
   */
  maxScale?: number;
  /**
   * The zoom level where the exclusion ends.
   */
  maxZoom?: number;
  /**
   * The zoom level where the exclusion starts.
   */
  minScale?: number;
  /**
   * The zoom level where the exclusion starts.
   */
  minZoom?: number;
}
