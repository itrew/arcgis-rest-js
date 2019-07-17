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

/**
 * An ArcGIS Tiled Image Service layer displays map content from an
 * ArcGIS Server Image service that has been cached (tiled).
 *
 * @export
 * @interface ITiledImageServiceLayer
 * @extends {ILayerBase}
 * @extends {IIsReferenceMixin}
 * @extends {IItemIdMixin}
 * @extends {IRefreshIntervalMixin}
 * @extends {IShowLegendMixin}
 * @extends {IUrlMixin}
 * @see https://developers.arcgis.com/web-map-specification/objects/tiledImageServiceLayer/
 */
export interface ITiledImageServiceLayer
  extends ILayerBase,
    IIsReferenceMixin,
    IItemIdMixin,
    IRefreshIntervalMixin,
    IShowLegendMixin,
    IUrlMixin {
  layerType: "ArcGISTiledImageServiceLayer";
  /**
   * 	URL to the ArcGIS Server Image Service.
   */
  url?: string;
}
