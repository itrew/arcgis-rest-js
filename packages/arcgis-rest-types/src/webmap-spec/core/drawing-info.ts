/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { ILabelingInfo } from "./labeling-info";
import { Renderer } from "../renderer/index";

/**
 * The drawingInfo object contains drawing information for a feature layer.
 *
 * @export
 * @interface IDrawingInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/drawingInfo/
 */
export interface IDrawingInfo {
  /**
   * Only used for feature collections with a renderer. The feature's
   * symbol is defined by the layer's renderer.
   */
  fixedSymbols?: any;
  /** An object defining the properties used for labeling the layer. */
  labelingInfo?: ILabelingInfo;
  /** An object defined which provides the symbology for the layer. */
  renderer?: Renderer;
  /**
   * Boolean property indicating whether symbols should stay the same
   * size in screen units as you zoom in. A value of true means the
   * symbols stay the same size in screen units regardless of the map
   * scale.
   */
  scaleSymbols?: boolean;
  /**
   * Defines whether labels should be shown or not. This is only
   * valid for sub-layers.
   */
  showLabels?: boolean;
  /**
   * Number value ranging between 0 (no transparency) to 100
   * (completely transparent).
   */
  transparency?: number;
}
