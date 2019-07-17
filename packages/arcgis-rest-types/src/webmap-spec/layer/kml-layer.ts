/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import {
  IItemIdMixin,
  ILayerBase,
  IRefreshIntervalMixin,
  IShowLegendMixin,
  IUrlMixin
} from "./util";

/**
 * Keyhole Markup Language (KML) is an XML-based format for storing
 * geographic data and associated content and is an official Open
 * Geospatial Consortium (OGC) standard. KML is a common format for
 * sharing geographic data with non-GIS users as it can be easily
 * delivered on the Internet.
 *
 * @export
 * @interface IKmlLayer
 * @extends {IItemIdMixin}
 * @extends {ILayerBase}
 * @extends {IRefreshIntervalMixin}
 * @extends {IShowLegendMixin}
 * @extends {IUrlMixin}
 * @see https://developers.arcgis.com/web-map-specification/objects/kmlLayer/
 */
export interface IKmlLayer
  extends IItemIdMixin,
    ILayerBase,
    IRefreshIntervalMixin,
    IShowLegendMixin,
    IUrlMixin {
  layerType: "KML";
  /**
   * @deprecated
   * Use layerType instead.
   */
  type?: "KML";
  /**
   * Array of numeric IDs of folders that will be made visible.
   */
  visibleFolders?: number[];
}
