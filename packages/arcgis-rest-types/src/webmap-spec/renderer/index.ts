/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { IClassBreaksRenderer } from "./class-breaks";
import { IHeatmapRenderer } from "./heatmap";
import { IPredominanceRenderer } from "./predominance";
import { ISimpleRenderer } from "./simple";
import { IStretchRenderer } from "./stretch";
import { ITemporalRenderer } from "./temporal";
import { IUniqueValueRenderer } from "./unique-value";
import { IVectorFieldRenderer } from "./vector-field";

/**
 * The renderer object contains the drawing information for the
 * operationalLayer.
 *
 * @type
 * @see https://developers.arcgis.com/web-map-specification/objects/renderer/
 */
export type Renderer =
  | IClassBreaksRenderer
  | IHeatmapRenderer
  | IPredominanceRenderer
  | ISimpleRenderer
  | IStretchRenderer
  | ITemporalRenderer
  | IUniqueValueRenderer
  | IVectorFieldRenderer;

export * from "./authoring-info";
export * from "./class-breaks";
export * from "./heatmap";
export * from "./legend-options";
export * from "./predominance";
export * from "./simple";
export * from "./stretch";
export * from "./temporal";
export * from "./unique-value";
export * from "./vector-field";
export * from "./visual-variable";
