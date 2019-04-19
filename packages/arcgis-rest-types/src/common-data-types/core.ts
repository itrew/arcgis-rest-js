/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

/**
 * A base object that indicates whether or not a z coordinate is stored
 * with the vertices.
 */
export interface IHasZ {
  /**
   * Indicates whether or not the vertices of the geometry contain Z
   * values (typically a vertical coordinate).
   */
  hasZ?: boolean;
}

/**
 * A base object that indicates whether or not a M value is stored with
 * the vertices.
 */
export interface IHasM {
  /**
   * Indicates whether or not the vertices of the geometry contain M
   * values (linear measures).
   */
  hasM?: boolean;
}

/**
 * Intersection type for both z and m value indicators.
 *
 * `HasZM` can also be imported from the following packages:
 *
 * ```js
 * import { HasZM } from "@esri/arcgis-rest-feature-layer";
 * ```
 */
export type HasZM = IHasZ & IHasM;

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
 * A spatial reference system that defines mathematical transformations
 * and coordinate systems for displaying spatial information in 2D and 3D.
 *
 * @see https://developers.arcgis.com/documentation/common-data-types/geometry-objects.htm
 *
 * `SpatialReference` can also be imported from the following packages:
 *
 * ```js
 * import { SpatialReference } from "@esri/arcgis-rest-geocoding";
 * import { SpatialReference } from "@esri/arcgis-rest-routing";
 * import { SpatialReference } from "@esri/arcgis-rest-service-admin";
 * import { SpatialReference } from "@esri/arcgis-rest-feature-layer";
 * ```
 */
export type SpatialReference = IWKIDSpatialReference | IWKTSpatialReference;

/**
 * A rectangle defined by a range of coordinates. Almost identical to the
 * envelope geometry, but kept for clarity as it's a commonly used/known type.
 * This interface should not have z coordinates or M values associated with it
 * either.
 *
 * `IExtent` can also be imported from the following packages:
 *
 * ```js
 * import { IExtent } from "@esri/arcgis-rest-geocoding";
 * import { IExtent } from "@esri/arcgis-rest-service-admin";
 * import { IExtent } from "@esri/arcgis-rest-feature-layer";
 * ```
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
 *
 * `GeometryType` can also be imported from the following packages:
 *
 * ```js
 * import { GeometryType } from "@esri/arcgis-rest-feature-layer";
 * ```
 */
export type GeometryType =
  | "esriGeometryPoint"
  | "esriGeometryMultipoint"
  | "esriGeometryPolyline"
  | "esriGeometryPolygon"
  | "esriGeometryEnvelope";

/**
 * A list of well-known (ESRI) unit identifiers.
 *
 * `Units` can also be imported from the following packages:
 *
 * ```js
 * import { Units } from "@esri/arcgis-rest-feature-layer";
 * ```
 */
export type Units =
  | "esriSRUnit_Meter"
  | "esriSRUnit_StatuteMile"
  | "esriSRUnit_Foot"
  | "esriSRUnit_Kilometer"
  | "esriSRUnit_NauticalMile"
  | "esriSRUnit_USNauticalMile";

/**
 * A list of well-known (ESRI) field type identifiers.
 */
export type FieldType =
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
 *
 * `SpatialRelationship` can also be imported from the following packages:
 *
 * ```js
 * import { SpatialRelationship } from "@esri/arcgis-rest-feature-layer";
 * ```
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
