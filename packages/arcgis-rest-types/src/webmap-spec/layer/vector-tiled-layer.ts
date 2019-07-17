/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { IItemIdMixin, ILayerBase } from "./util";

/**
 * A vector tile layer references a set of web-accessible vector tiles
 * and the corresponding style for how those tiles should be drawn.
 *
 * @export
 * @interface IVectorTileLayer
 * @extends {ILayerBase}
 * @extends {IItemIdMixin}
 * @see https://developers.arcgis.com/web-map-specification/objects/vectorTileLayer/
 */
export interface IVectorTileLayer extends ILayerBase, IItemIdMixin {
  layerType: "VectorTileLayer";
  /**
   * A url to a JSON file containing the stylesheet information used
   * to render the layer. You may also pass an object containing the
   * stylesheet information identical to the JSON file.
   */
  styleUrl?: string;
}
