/* Copyright (c) 2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

/**
 * The valid values for domain types.
 */
export type DomainType = "range" | "codedValue" | "inherited";

/**
 * The base for all domain objects.
 *
 * @interface IDomainBase
 */
interface IDomainBase {
  /** The type of domain. */
  type: DomainType;
  /** The name of the domain. */
  name: string;
}

/**
 * A domain that restricts a number with an upper and lower bound.
 *
 * @export
 * @interface IRangeDomain
 * @extends {IDomainBase}
 * @see https://developers.arcgis.com/web-map-specification/objects/range_domain/
 */
export interface IRangeDomain extends IDomainBase {
  type: "range";
  /** The range of valid values ([<minvalue>,<maxvalue>]) */
  range: [number, number];
}

/**
 * A key:value pair for a coded value domain.
 *
 * @export
 * @interface ICodedValue
 * @see https://developers.arcgis.com/web-map-specification/objects/codedValue/
 */
export interface ICodedValue {
  /** The name of the coded value. */
  name: string;
  /** The unique code identifying the value. */
  code: number | string;
}

/**
 * A domain that limits the valid options to specified coded values.
 *
 * @export
 * @interface ICodedValueDomain
 * @extends {IDomainBase}
 * @see https://developers.arcgis.com/web-map-specification/objects/codedValue_domain/
 */
export interface ICodedValueDomain extends IDomainBase {
  type: "codedValue";
  /** And array of coded values. */
  codedValues: ICodedValue[];
}

/**
 * A domain that applies to subtypes. It implies that the domain for
 * a field at the subtype level is the same as the domain for the field
 * at the layer level.
 *
 * @export
 * @interface IInheritedDomain
 * @extends {IDomainBase}
 * @see https://developers.arcgis.com/web-map-specification/objects/inherited_domain/
 */
export interface IInheritedDomain extends IDomainBase {
  type: "inherited";
}
