/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { ILayerBase } from "./util";

/**
 * Allows use of OpenStreetMap data for use in basemaps only.
 *
 * @export
 * @interface IOpenStreetMapLayer
 * @extends {ILayerBase}
 * @see https://developers.arcgis.com/web-map-specification/objects/openStreetMapLayer/
 */
export interface IOpenStreetMapLayer extends ILayerBase {
  layerType: "OpenStreetMap";
}
