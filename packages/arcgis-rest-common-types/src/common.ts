/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

/**
 * A base object that indicates whether or not a z coordinate is stored with the vertices.
 */
export interface IHasZ {
  /**
   * Indicates whether or not the vertices of the geometry contain Z values (typically a
   * vertical coordinate).
   */
  hasZ?: boolean;
}

/**
 * A base object that indicates whether or not a M value is stored with the vertices.
 */
export interface IHasM {
  /**
   * Indicates whether or not the vertices of the geometry contain M values (linear measures).
   */
  hasM?: boolean;
}

/**
 * Intersection type for both z and m value indicators.
 */
export type IHasZM = IHasZ & IHasM;

/**
 * A geometry that does not have vertical coordinates.
 */
export interface IZDisabled extends IHasZ {
  hasZ?: false;
}

/**
 * A geometry that has vertical coordinates.
 */
export interface IZEnabled extends IHasZ {
  hasZ: true;
}

/**
 * A geometry that does not have M values on its vertices.
 */
export interface IMDisabled extends IHasM {
  hasM?: false;
}

/**
 * A geometry that may have M values on its vertices.
 */
export interface IMEnabled extends IHasM {
  hasM: true;
}

/**
 * A spatial reference system identified by its well-known ID.
 */
export interface IWKIDSpatialReference {
  /**
   * The well-known ID for a given spatial reference.
   *
   * @see https://developers.arcgis.com/rest/services-reference/projected-coordinate-systems.htm
   * @see https://developers.arcgis.com/rest/services-reference/geographic-coordinate-systems.htm
   * @see https://developers.arcgis.com/rest/services-reference/vertical-coordinate-systems.htm
   */
  wkid: number;
  /**
   * The latest well-known ID for a given spatial reference.
   */
  latestWkid?: number;
  /**
   * The well-known ID for a given vertical coordinate system.
   * @see https://developers.arcgis.com/rest/services-reference/vertical-coordinate-systems.htm
   */
  vcsWkid?: number;
  /**
   * The latest well-known ID for a given vertical coordinate system.
   */
  latestVcsWkid?: number;
}

/**
 * A spatial reference system defined following the well-known text format.
 */
export interface IWKTSpatialReference {
  /**
   * A string following the well-known text format for defining spatial references.
   *
   * @see https://en.wikipedia.org/wiki/Well-known_text
   */
  wkt: string;
}

/**
 * A spatial reference system that defines mathematical transformations and coordinate systems
 * for displaying spatial information in 2D and 3D.
 */
export type SpatialReference = IWKIDSpatialReference | IWKTSpatialReference;

/**
 * A rectangle defined by a range of coordinates. Almost identical to the envelope geometry, but
 * kept for clarity as it's a commonly used/known type. This interface should not have z
 * coordinates or M values associated with it either.
 *
 * @param SR The spatial reference for the point.
 */
export interface IExtent<SR extends SpatialReference = SpatialReference> {
  xmin: number;
  /**
   * The lower bound of the y coordinate range.
   */
  ymin: number;
  /**
   * The upper bound of the x coordinate range.
   */
  xmax: number;
  /**
   * The upper bound of the y coordinate range.
   */
  ymax: number;
  /**
   * The spatial reference of the extent.
   */
  spatialReference: SR;
}

/**
 * A list of well-known (ESRI) geometry type identifiers.
 */
export type EsriGeometryType =
  | "esriGeometryPoint"
  | "esriGeometryMultipoint"
  | "esriGeometryPolyline"
  | "esriGeometryPolygon"
  | "esriGeometryEnvelope";

/**
 * A list of well-known (ESRI) unit identifiers.
 */
export type EsriUnits =
  | "esriSRUnit_Meter"
  | "esriSRUnit_StatuteMile"
  | "esriSRUnit_Foot"
  | "esriSRUnit_Kilometer"
  | "esriSRUnit_NauticalMile"
  | "esriSRUnit_USNauticalMile";

/**
 * A list of well-known (ESRI) field type identifiers.
 */
export type EsriFieldType =
  | "esriFieldTypeBlob"
  | "esriFieldTypeDate"
  | "esriFieldTypeDouble"
  | "esriFieldTypeGeometry"
  | "esriFieldTypeGlobalID"
  | "esriFieldTypeGUID"
  | "esriFieldTypeInteger"
  | "esriFieldTypeOID"
  | "esriFieldTypeRaster"
  | "esriFieldTypeSingle"
  | "esriFieldTypeSmallInteger"
  | "esriFieldTypeString"
  | "esriFieldTypeXML";

/**
 * A list of well-known (ESRI) spatial relationship identifiers.
 */
export type SpatialRelationship =
  | "esriSpatialRelIntersects"
  | "esriSpatialRelContains"
  | "esriSpatialRelCrosses"
  | "esriSpatialRelEnvelopeIntersects"
  | "esriSpatialRelIndexIntersects"
  | "esriSpatialRelOverlaps"
  | "esriSpatialRelTouches"
  | "esriSpatialRelWithin";
