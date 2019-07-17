/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import {
  IDefinitionEditorMixin,
  IIsReferenceMixin,
  IItemIdMixin,
  ILayerBase,
  ILayerDefinitionMixin,
  IPopupInfoMixin,
  IRefreshIntervalMixin,
  IShowLegendMixin,
  ITimeAnimationMixin,
  IUrlMixin
} from "./util";

export interface IMapServiceLayer
  extends ILayerBase,
    IIsReferenceMixin,
    IItemIdMixin,
    IRefreshIntervalMixin,
    IShowLegendMixin,
    ITimeAnimationMixin,
    IUrlMixin {
  layerType: "ArcGISMapServiceLayer";
  /**
   * An array of layer objects defining the styling, geometry, and
   * attribute information for the features.
   */
  layers: IMapServiceChildLayer[];
  /**
   * (Optional) A thematicGroup object used in
   * ArcGISMapServiceLayer layers.
   */
  thematicGroup?: IThematicGroup;
  /**
   * An array of sub-layer ids that should appear visible. Used with
   * map service layers that are not tiled.
   */
  visibleLayers?: number[];
}

/**
 * A layer object may allow overrides on popup content and drawing
 * behavior for individual layers of a web service.
 *
 * @export
 * @interface IMapServiceChildLayer
 * @see https://developers.arcgis.com/web-map-specification/objects/mapServiceLayer/#layers-properties
 */
export interface IMapServiceChildLayer
  extends IDefinitionEditorMixin,
    ILayerDefinitionMixin,
    IPopupInfoMixin,
    IShowLegendMixin {
  /**
   * Default visibility of the layers in the map service.
   */
  defaultVisibility?: boolean;
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
  /**
   * A number representing the maximum scale at which the layer will be
   * visible. The number is the scale's denominator.
   */
  maxScale?: number;
  /**
   * A number representing the minimum scale at which the layer will be
   * visible. The number is the scale's denominator.
   */
  minScale?: number;
  /**
   * The name of the layer.
   */
  name?: string;
  /**
   * If working with nested layers, this is the numeric value indicating
   * the layer id of the next layer (parent) directly above the current
   * referenced layer.
   */
  parentLayerId?: number;
  /**
   * If the layer is a parent layer, it will have one or more sub
   * layers included in an array.
   */
  subLayerIds?: number[];
}

/**
 * ThematicGroup is specifically for working with ArcGISMapServiceLayer
 * layer types that reference ESRI's demographic services. Since these
 * services have multiple fields and layers, the thematicGroup provides
 * a subset to use.
 *
 * @export
 * @interface IThematicGroup
 * @see https://developers.arcgis.com/web-map-specification/objects/thematicGroup/
 */
export interface IThematicGroup {
  /**
   * An array of string values indicating all the fields used within
   * the webmap. All other fields can be disregarded and should not
   * display in any field selection list.
   */
  fieldNames?: string[];
  /**
   * A zero-based array of integers indicating the layers to be used
   * in the webmap. NOTE: All other layers should not be added to the
   * TOC and may or may not be visible on the map as reference layers.
   */
  layerIds?: number[];
  /**
   * String property indicating the name for the thematic grouping
   * of layers.
   */
  name?: string;
}
