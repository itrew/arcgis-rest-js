/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { IBingLayer } from "./bing-layer";
import { ICsvLayer } from "./csv-layer";
import { IFeatureLayer } from "./feature-layer";
import { IGeoRssLayer } from "./geo-rss-layer";
import {
  IImageServiceLayer,
  IImageServiceVectorLayer
} from "./image-service-layer";
import { IKmlLayer } from "./kml-layer";
import { IMapServiceLayer } from "./map-service-layer";
import { IArcGisStreamLayer } from "./arcgis-stream-layer";
import { IOpenStreetMapLayer } from "./open-street-map-layer";
import { ITiledImageServiceLayer } from "./tiled-image-service-layer";
import { ITiledMapServiceLayer } from "./tiled-map-service-layer";
import { IVectorTileLayer } from "./vector-tiled-layer";
import { IWebTiledLayer } from "./web-tiled-layer";
import { IWebFeatureServiceLayer } from "./wfs-layer";
import { IWebMapServiceLayer } from "./wms-layer";

/**
 * A basemap layer is a layer that provides geographic context to the map.
 * A web map always contains a basemap.
 *
 * @type
 * @see https://developers.arcgis.com/web-map-specification/objects/baseMapLayer/
 */
export type BaseMapLayer =
  | IBingLayer
  | IImageServiceLayer
  | IImageServiceVectorLayer
  | IMapServiceLayer
  | IOpenStreetMapLayer
  | ITiledImageServiceLayer
  | ITiledMapServiceLayer
  | IVectorTileLayer
  | IWebTiledLayer
  | IWebMapServiceLayer;

/**
 * Operational layers contain your business data. They are used to make
 * thematic maps. Usually, a basemap sits beneath your operational layers
 * to give them geographic context.
 *
 * @type
 * @see https://developers.arcgis.com/web-map-specification/objects/operationalLayers/
 */
export type OperationalLayer =
  | ICsvLayer
  | IFeatureLayer
  | IGeoRssLayer
  | IImageServiceLayer
  | IImageServiceVectorLayer
  | IKmlLayer
  | IMapServiceLayer
  | IArcGisStreamLayer
  | ITiledImageServiceLayer
  | ITiledMapServiceLayer
  | IVectorTileLayer
  | IWebTiledLayer
  | IWebFeatureServiceLayer
  | IWebMapServiceLayer;
