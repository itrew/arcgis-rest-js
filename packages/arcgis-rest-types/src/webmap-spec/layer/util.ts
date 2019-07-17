/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { IDefinitionEditor, ILayerDefinition, IPopupInfo } from "../core/index";

/**
 * The base configuration of all layer types.
 *
 * @interface ILayerBase
 */
export interface ILayerBase {
  /**
   * A unique identifying string for the layer.
   */
  id: string | number;
  /**
   * String indicating the layer type.
   */
  layerType: string;
  /**
   * Integer property used to determine the maximum scale at which
   * the layer is displayed.
   */
  maxScale?: number;
  /**
   * Integer property used to determine the minimum scale at which
   * the layer is displayed.
   */
  minScale?: number;
  /**
   * The degree of transparency applied to the layer on the client side,
   * where 0 is full transparency and 1 is no transparency.
   */
  opacity: number;
  /**
   * A user-friendly string title for the layer that can be used in a
   * table of contents.
   */
  title: string;
  /**
   * Deprecated. Use layerType instead.
   *
   * @deprecated
   */
  type?: string;
  /**
   * Boolean property determining whether the layer is initially visible
   * in the web map.
   */
  visibility: boolean;
}

/** Mixins */

/**
 * Mixin for adding the definition editor.
 *
 * @interface IDefinitionEditorMixin
 */
export interface IDefinitionEditorMixin {
  /**
   * Stores interactive filters.
   */
  definitionEditor?: IDefinitionEditor;
}

/**
 * Mixin for disable popup property.
 *
 * @interface IDisablePopupMixin
 */
export interface IDisablePopupMixin {
  /**
   * Indicates whether to ignore popups defined by the service item.
   */
  disablePopup?: boolean;
}

/**
 * Mixin for determining whether the layer is a reference layer or not.
 *
 * @interface IIsReferenceMixin
 */
export interface IIsReferenceMixin {
  /**
   * This is applicable if used as a baseMapLayer. A boolean value
   * indicating whether or not the baseMapLayer draws on top (true)
   * of other layers, including operationalLayers , or below (false).
   */
  isReference?: boolean;
}

/**
 * Mixin for setting the layer's AGOL/Portal item id.
 *
 * @interface IItemIdMixin
 */
export interface IItemIdMixin {
  /**
   * Optional string containing the item ID of the service if it's
   * registered on ArcGIS Online or your organization's portal.
   */
  itemId?: string;
}

/**
 * Mixin for a layer definition property.
 *
 * @interface ILayerDefinitionMixin
 */
export interface ILayerDefinitionMixin {
  /**
   * An object that defines the attribute schema and drawing
   * information for a layer drawn using client-side graphics.
   */
  layerDefinition?: ILayerDefinition;
}

/**
 * Mixin for defining the popup of a layer.
 *
 * @export
 * @interface IPopupInfoMixin
 */
export interface IPopupInfoMixin {
  /**
   * 	A popupInfo object defining the content of popup windows when
   * you click or query a feature.
   */
  popupInfo?: IPopupInfo;
}

/**
 * Mixin for setting the refresh interval on a layer.
 *
 * @interface IRefreshIntervalMixin
 */
export interface IRefreshIntervalMixin {
  /**
   * Refresh interval of the layer in minutes. Non-zero value
   * indicates automatic layer refresh at the specified interval.
   * Value of 0 indicates auto refresh is not enabled.
   */
  refreshInterval?: number;
}

/**
 * Mixin for showing a legend.
 *
 * @interface IShowLegendMixin
 */
export interface IShowLegendMixin {
  /**
   * Indicates whether to allow map authors the ability to control
   * what layers should be shown in a client's legend control.
   */
  showLegend?: boolean;
}

/**
 * Mixin for time animation support.
 *
 * @interface ITimeAnimationMixin
 */
export interface ITimeAnimationMixin {
  /**
   * This property is applicable to layers that support time. If 'true',
   * timeAnimation is enabled.
   */
  timeAnimation?: boolean;
}

/**
 * Mixin for url.
 *
 * @interface IUrlMixin
 */
export interface IUrlMixin {
  /**
   * The URL to the layer.
   */
  url?: string;
}
