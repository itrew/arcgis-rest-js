/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { IApplicationProperties } from "./application-properties";
import { IBasemap } from "./basemap";
import { IBookmark } from "./bookmark";
import { OperationalLayer } from "./layer/index";
import { IPresentation } from "./presentation";
import { ITable } from "./table";
import { IWidgets } from "./widgets";

import { Color, SpatialReference } from "../common-data-types/index";

/**
 * The web map data lists the basemap, operational layers, and bookmarks to
 * be used in the web map. It also contains information about popup windows
 * and layer styling overrides to be used in the web map. A version property
 * allows you to supply the version of the web map JSON format being used.
 *
 * @export
 * @interface IWebmap
 */
export interface IWebmap {
  /**
   * Viewing and editing properties of the webmap
   */
  applicationProperties?: IApplicationProperties;
  /**
   * String value indicating the application which authored the webmap
   */
  authoringApp?: string;
  /**
   * String value indicating the authoring App's version number
   */
  authoringAppVersion?: string;
  /**
   * Defines the appearance for the background of the map.
   */
  background?: IBackground;
  /**
   * Basemaps give the web map a geographic context
   */
  baseMap: IBasemap;
  /**
   * A bookmark is a saved geographic extent that allows end users to
   * quickly navigate to a particular area of interest
   */
  bookmarks?: IBookmark[];
  /**
   * Map Range Information
   */
  mapRangeInfo?: IMapRangeInfo;
  /**
   * Operational layers contain business data which are used to make
   * thematic maps
   */
  operationalLayers?: OperationalLayer[];
  /**
   * A presentation consists of multiple slides. Each slide has a
   * different title, extent, basemap, layers etc
   */
  presentation?: IPresentation;
  /**
   * An object used to specify the spatial reference of
   * the given geometry.
   */
  spatialReference: SpatialReference;
  /**
   * Root element in the web map specifying an array of table
   * objects. (optional)
   */
  tables?: ITable[];
  /**
   * Root element in the web map specifying a string
   * value indicating the web map version.
   */
  version: string;
  /**
   * The widgets object contains widgets that should be exposed to
   * the user
   */
  widgets?: IWidgets;
}

/**
 * Defines the appearance for the background of the map.
 *
 * @export
 * @interface IBackground
 * @see https://developers.arcgis.com/web-map-specification/objects/background/
 */
export interface IBackground {
  /**
   * To define the color of the background of the map (which is
   * shown when no data is shown).
   */
  color: Color;
}

/**
 * Map range information.
 *
 * @export
 * @interface IMapRangeInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/mapRangeInfo/
 */
export interface IMapRangeInfo {
  /**
   * Active range ID that slider/picker acts upon.
   */
  activeRangeName?: string;
  /**
   * Current range for the active range.
   */
  currentRangeExtent?: [number, number];
  /**
   * Full range extent for the active range to be presented in
   * the UI.
   */
  fullRangeExtent?: [number, number];
}
