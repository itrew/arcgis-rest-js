/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { IExtent } from "../common-data-types/index";

/**
 * Predefined bookmarks for use by the application. A bookmark is a saved
 * map extent that allows end users to quickly navigate to a particular
 * area of interest.
 *
 * @export
 * @interface IBookmark
 * @see https://developers.arcgis.com/web-map-specification/objects/bookmark/
 */
export interface IBookmark {
  /** An extent object containing a spatial reference, a lower left
   * coordinate, and an upper right coordinate defining the rectangular
   * area of the bookmark. The spatial reference must be the same as the
   * map spatial reference. Documentation for the envelope is in the
   * Geometry Objects topic of the ArcGIS REST API help.
   */
  extent: IExtent;
  /** A string name for the bookmark. */
  name: string;
  /** Object containing a thumbnail image. */
  thumbnail?: IThumbnail;
}

/**
 * Object containing a thumbnail image.
 *
 * @export
 * @interface IThumbnail
 * @see https://developers.arcgis.com/web-map-specification/objects/thumbnail/
 */
export interface IThumbnail {
  /**
   * The URI pointing to the thumbnail image. Can be a URL or a
   * base64-encoded image.
   */
  url: string;
}
