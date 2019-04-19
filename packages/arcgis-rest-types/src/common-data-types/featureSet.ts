/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 *
 * Information for these types came from
 *  https://developers.arcgis.com/documentation/common-data-types/feature-object.htm
 *  https://developers.arcgis.com/documentation/common-data-types/featureset-object.htm
 *
 */

import {
  IZDisabled,
  IZEnabled,
  IMDisabled,
  IMEnabled,
  SpatialReference
} from "./core";
import { IFeature, IFeatureAttributes, IFeatureBase, IField } from "./feature";
import {
  GeometryAny,
  Geometry,
  GeometryZ,
  GeometryM,
  GeometryZM,
  PointAny,
  MultipointAny,
  PolylineAny,
  PolygonAny,
  EnvelopeAny
} from "./geometry";

/**
 * A conditional type check that makes sure the correct geometry type identifier
 * is matched up to the provided geometry type.
 *
 * @param T The geometry type that is associated with the geometry type identifier.
 */
export type ConditionalGeometryType<
  T extends GeometryAny = GeometryAny
> = T extends PointAny
  ? "esriGeometryPoint"
  : T extends MultipointAny
  ? "esriGeometryMultipoint"
  : T extends PolylineAny
  ? "esriGeometryPolyline"
  : T extends PolygonAny
  ? "esriGeometryPolygon"
  : T extends EnvelopeAny
  ? "esriGeometryEnvelope"
  : undefined;

/**
 * Contains a collection of features that have the same geometry type and set
 * of attributes.
 *
 * @param FA The shape of the feature's attribute dictionary.
 */
export interface IFeatureSetBase<
  FA extends IFeatureAttributes = IFeatureAttributes
> {
  /**
   * An array of field definitions that describe the features' attributes.
   */
  fields: Array<IField<FA>>;
  /**
   * The set of features that belong to the feature set.
   */
  features: Array<IFeatureBase<FA>>;
  /**
   * The name of the field that contains the feature's ObjectID.
   */
  objectIdFieldName?: keyof FA;
  /**
   * The name of the field that contains the feature's GlobalID.
   */
  globalIdFieldName?: keyof FA;
  /**
   * The name of the field used to identify a record for display purposes.
   */
  displayFieldName?: keyof FA;
}

/**
 * A feature set containing features with a common geometry type.
 *
 * @param FA The shape of the feature's attribute dictionary.
 * @param SR The spatial reference of the feature set.
 * @param G The type of geometry the feature has.
 */
export interface ISpatialFeatureSet<
  FA extends IFeatureAttributes = IFeatureAttributes,
  SR extends SpatialReference = SpatialReference,
  G extends GeometryAny<SR> = GeometryAny<SR>
> extends IFeatureSetBase<FA> {
  features: Array<IFeature<FA, G>>;
  geometryType: ConditionalGeometryType<G>;
  spatialReference: SR;
}

/**
 * A feature set containing features with 2-dimensional geometries.
 *
 * @param FA The shape of the feature's attribute dictionary.
 * @param SR The spatial reference of the feature set.
 * @param G The type of geometry the feature has.
 */
export interface IFeatureSet<
  FA extends IFeatureAttributes = IFeatureAttributes,
  SR extends SpatialReference = SpatialReference,
  G extends Geometry<SR> = Geometry<SR>
> extends ISpatialFeatureSet<FA, SR, G>, IZDisabled, IMDisabled {}

/**
 * A feature set containing features with 3-dimensional geometries.
 *
 * @param FA The shape of the feature's attribute dictionary.
 * @param SR The spatial reference of the feature set.
 * @param G The type of geometry the feature has.
 */
export interface IFeatureSetZ<
  FA extends IFeatureAttributes = IFeatureAttributes,
  SR extends SpatialReference = SpatialReference,
  G extends GeometryZ<SR> = GeometryZ<SR>
> extends ISpatialFeatureSet<FA, SR, G>, IZEnabled, IMDisabled {}

/**
 * A feature set containing features with 2-dimensional geometries with M values.
 *
 * @param FA The shape of the feature's attribute dictionary.
 * @param SR The spatial reference of the feature set.
 * @param G The type of geometry the feature has.
 */
export interface IFeatureSetM<
  FA extends IFeatureAttributes = IFeatureAttributes,
  SR extends SpatialReference = SpatialReference,
  G extends GeometryM<SR> = GeometryM<SR>
> extends ISpatialFeatureSet<FA, SR, G>, IZDisabled, IMEnabled {}

/**
 * A feature set containing features with 3-dimensional geometries with M values.
 *
 * @param FA The shape of the feature's attribute dictionary.
 * @param SR The spatial reference of the feature set.
 * @param G The type of geometry the feature has.
 */
export interface IFeatureSetZM<
  FA extends IFeatureAttributes = IFeatureAttributes,
  SR extends SpatialReference = SpatialReference,
  G extends GeometryZM<SR> = GeometryZM<SR>
> extends ISpatialFeatureSet<FA, SR, G>, IZEnabled, IMEnabled {}

/**
 * A generic feature set type without a specified geometry type.
 *
 * @param FA The shape of the feature's attribute dictionary.
 * @param SR The spatial reference of the feature set.
 *
 * ```js
 * import { IFeatureSet } from "@esri/arcgis-rest-feature-layer";
 * ```
 */
export type FeatureSetAny<
  FA extends IFeatureAttributes = IFeatureAttributes,
  SR extends SpatialReference = SpatialReference
> =
  | IFeatureSetBase<FA>
  | IFeatureSet<FA, SR>
  | IFeatureSetZ<FA, SR>
  | IFeatureSetM<FA, SR>
  | IFeatureSetZM<FA, SR>;
