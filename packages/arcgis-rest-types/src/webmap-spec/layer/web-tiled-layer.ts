/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import {
  IIsReferenceMixin,
  IItemIdMixin,
  ILayerBase,
  IRefreshIntervalMixin
} from "./util";
import {
  IExtent,
  PointAny,
  SpatialReference
} from "../../common-data-types/index";

export interface IWebTiledLayer
  extends ILayerBase,
    IIsReferenceMixin,
    IItemIdMixin,
    IRefreshIntervalMixin {
  layerType: "WebTiledLayer";
  /**
   * Attribution to the Web Tiled Layer provider. It is displayed in
   * the attribution on the web map. Input required by the user when
   * the layer is added to the web map.
   */
  copyright?: string;
  /**
   * An extent object representing the full extent envelope for the
   * layer.
   */
  fullExtent?: IExtent;
  /**
   * If subdomains are detected, they must be specified. The map
   * viewer detects if the Web Tiled Layer has subdomains by parsing
   * the templateURL value for {subDomain}.
   */
  subDomains?: string[];
  /**
   * URL to the Web Tiled Layer. Input required by the user when the
   * layer is added to the web map. The template URL contains a
   * parameterized URL. The URL can contain the following templated
   * parameters: 'level', 'col', 'row', and 'subDomain'.
   */
  templateUrl?: string;
  /**
   * Contains the spatial reference and the tiling scheme of the
   * layer. Typically retrieved from a WMTS OGC Web Service. If
   * missing the layer must be in the WGS 1984 Web Mercator
   * (Auxiliary Sphere) tiling scheme.
   */
  tileInfo?: ITileInfo;
  /**
   * Object containing information about the chosen WMTS service
   * layer and tiling schema.
   */
  wmtsInfo?: IWebMapTileServiceInfo;
}

/**
 * Tile information, returned from the WMTS OGC Web Service. The
 * tileInfo will contain the spatial reference of the layer. tileInfo
 * is the same json representation as the ArcGIS Map/Image service
 * tileInfo except that it may contain a levelValue on the lod objects
 * that should be used instead of the level in the templateUrl.
 *
 * @export
 * @interface ITileInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/tileInfo/
 */
export interface ITileInfo {
  /**
   * Requested tile's column.
   */
  cols?: number;
  /**
   * Compression quality of the tile.
   */
  compressionQuality?: number;
  /**
   * The dpi of the tiling scheme.
   */
  dpi?: number;
  /**
   * Image format of the cached tiles.
   */
  format?:
    | "jpg"
    | "png"
    | "png24"
    | "png32"
    | "png8"
    | "pdf"
    | "bmp"
    | "gif"
    | "svg"
    | "svgz"
    | "emf"
    | "ps"
    | "mixed"
    | "lerc";
  /**
   * An array of levels of detail that define the tiling scheme.
   */
  lods?: ILod[];
  /**
   * The tiling scheme origin.
   */
  origin?: PointAny;
  /**
   * Requested tile's row.
   */
  rows?: number;
  /**
   * The spatial reference of the tiling schema.
   */
  spatialReference?: SpatialReference;
}

/**
 * Level of detail.
 *
 * @export
 * @interface ILod
 * @see https://developers.arcgis.com/web-map-specification/objects/lod/
 */
export interface ILod {
  /**
   * ID for each level.
   */
  level?: number;
  /**
   * String to be used when constructing URL to access a tile from
   * this LOD.
   */
  levelValue?: string;
  /**
   * Resolution in map units of each pixel in a tile for each level.
   */
  resolution?: number;
  /**
   * Scale for each level.
   */
  scale?: number;
}

/**
 * Object defines and provides information about layers in a
 * WMTSLayer service.
 *
 * @export
 * @interface IWebMapTileServiceInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/wmtsInfo/
 */
export interface IWebMapTileServiceInfo {
  /**
   * A sequence of parameters used to append different custom
   * parameters to a WMTS tile request. These parameters are applied
   * to GetTile. The customLayerParameters property takes precedence
   * if customParameters is also present.
   */
  customLayerParameters?: {
    [key: string]: any;
  };
  /**
   * A sequence of parameters used to append custom parameters to
   * all WMTS requests. These parameters are applied to
   * GetCapabilities and GetTile. If used with the
   * customLayerParameters property, customParameters will not
   * take precedence.
   */
  customParameters?: {
    [key: string]: any;
  };
  /**
   * Identifier for the specific layer used in the WMTS service.
   * Required input by the user.
   */
  layerIdentifier: string;
  /**
   * Tiling schema, set by the WMTS service.
   */
  tileMatrixSet?: string;
  /**
   * URL to the WMTS web service. Required input by the user.
   */
  url: string;
}
