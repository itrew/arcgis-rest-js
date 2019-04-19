/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 *
 * Information for these types came from
 *  https://developers.arcgis.com/documentation/common-data-types/feature-object.htm
 *  https://developers.arcgis.com/documentation/common-data-types/featureset-object.htm
 *
 */

import { FieldType } from "./core";
import { GeometryAny } from "./geometry";

/**
 * A dictionary of name-value pairs that make up the feature's attributes.
 */
export interface IFeatureAttributes {
  [key: string]: any;
}

/**
 * An individual feature.
 *
 * @param FA The shape of the feature's attributes dictionary.
 */
export interface IFeatureBase<
  FA extends IFeatureAttributes = IFeatureAttributes
> {
  /**
   * Any attributes associated with the feature.
   */
  attributes: FA;
}

/**
 * An individual feature with geometry.
 *
 * @param FA The shape of the feature's attributes dictionary.
 * @param G The type of geometry that the feature has.
 *
 * `IFeature` can also be imported from the following packages:
 *
 * ```js
 * import { IFeature } from "@esri/arcgis-rest-feature-layer";
 * import { IFeature } from "@esri/arcgis-rest-routing";
 * ```
 */
export interface IFeature<
  FA extends IFeatureAttributes = IFeatureAttributes,
  G extends GeometryAny = GeometryAny
> extends IFeatureBase<FA> {
  /**
   * The feature's geometry, applies to feature layers only.
   */
  geometry: G;
}

/**
 * Information about an attribute field.
 */
export interface IField<FA extends IFeatureAttributes = IFeatureAttributes> {
  /**
   * The name of the field.
   *
   * keyof ensures that it is the the feature attribute interface.
   */
  name: keyof FA;
  /**
   * The type of the field.
   */
  type: FieldType;
  /**
   * An optional alias of the field.
   */
  alias?: string;
  /**
   * A number defining how many characters are allowed in a string field.
   */
  length?: number;
}
