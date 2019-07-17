/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import {
  IDefinitionEditorMixin,
  IDisablePopupMixin,
  IItemIdMixin,
  ILayerBase,
  ILayerDefinitionMixin,
  IPopupInfoMixin,
  IShowLegendMixin,
  IUrlMixin
} from "./util";

/**
 * Properties specific to the ArcGISStreamLayer layer type.
 *
 * @export
 * @interface IArcGisStreamLayer
 * @extends {ILayerBase}
 * @extends {IDefinitionEditorMixin}
 * @extends {IDisablePopupMixin}
 * @extends {IItemIdMixin}
 * @extends {ILayerDefinitionMixin}
 * @extends {IPopupInfoMixin}
 * @extends {IShowLegendMixin}
 * @extends {IUrlMixin}
 * @see https://developers.arcgis.com/web-map-specification/objects/streamLayer/
 */
export interface IArcGisStreamLayer
  extends ILayerBase,
    IDefinitionEditorMixin,
    IDisablePopupMixin,
    IItemIdMixin,
    ILayerDefinitionMixin,
    IPopupInfoMixin,
    IShowLegendMixin,
    IUrlMixin {
  layerType: "ArcGISStreamLayer";
  /**
   * URL to the ArcGIS Server Stream Service.
   */
  url?: string;
}
