/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { EsriSymbol } from "../renderer/util";
import {
  ICodedValueDomain,
  IFeature as IFeatureBase,
  IField as IFieldBase,
  IInheritedDomain,
  IRangeDomain
} from "../../common-data-types/index";

/**
 * A string used with date fields to specify how the date should appear
 * in popup windows.
 */
type DateFormat =
  | "shortDate"
  | "shortDateLE"
  | "longMonthDayYear"
  | "longMonthDayYearShortTime"
  | "longMonthDayYearShortTime24"
  | "longMonthDayYearLongTime"
  | "longMonthDayYearLongTime24"
  | "dayShortMonthYear"
  | "dayShortMonthYearShortTime"
  | "dayShortMonthYearShortTime24"
  | "dayShortMonthYearLongTime"
  | "dayShortMonthYearLongTime24"
  | "longDate"
  | "longDateShortTime"
  | "longDateShortTime24"
  | "longDateLongTime"
  | "longDateLongTime24"
  | "shortDateShortTime"
  | "shortDateLEShortTime"
  | "shortDateShortTime24"
  | "shortDateLEShortTime24"
  | "shortDateLongTime"
  | "shortDateLELongTime"
  | "shortDateLongTime24"
  | "shortDateLELongTime24"
  | "longMonthYear"
  | "shortMonthYear"
  | "year";

/**
 * Domains specify the set of valid values for a field. The links below
 * are the available domains.
 *
 * @type Domain
 * @see https://developers.arcgis.com/web-map-specification/objects/domain/
 */
export type Domain = ICodedValueDomain | IInheritedDomain | IRangeDomain;

/**
 * Contains information about an attribute field and feature geometry.
 *
 * Potential to have symbol, which is not in common-data-types IFeature.
 *
 * @export
 * @interface IFeature
 * @extends {IFeatureBase} Alias for common-data-types IFeature.
 * @see https://developers.arcgis.com/web-map-specification/objects/feature/
 */
export interface IFeature extends IFeatureBase {
  /**
   * Symbol used for drawing the feature.
   */
  symbol?: EsriSymbol;
}

/**
 * Contains information about an attribute field.
 *
 * `IField` can also be imported from the following packages:
 *
 * ```js
 * import { IField } from "@esri/arcgis-rest-feature-layer";
 * ```
 *
 * @export
 * @interface IField
 * @extends {IFieldBase} Alias for common-data-types IField.
 * @see https://developers.arcgis.com/web-map-specification/objects/field/
 */
export interface IField extends IFieldBase {
  /**
   * The domain objects if applicable.
   */
  domain?: Domain;
  /**
   * A Boolean defining whether this field is editable.
   */
  editable?: boolean;
  /**
   * A Boolean defining whether or not the field is an exact match.
   */
  exactMatch?: boolean;
  /**
   * A Boolean defining whether this field can have a null value.
   */
  nullable?: boolean;
}

/**
 * The format object can be used with numerical or date fields to provide
 * more detail about how values should be displayed in popup windows.
 *
 * @export
 * @interface IFormat
 * @see https://developers.arcgis.com/web-map-specification/objects/format/
 */
export interface IFormat {
  /**
   * A string used with date fields to specify how the date should appear
   * in popup windows.
   */
  dateFormat?: DateFormat;
  /**
   * A Boolean used with numerical fields. A value of true allows the
   * number to have a digit (or thousands) separator when the value
   * appears in popup windows. Depending on the locale, this separator
   * is a decimal point or a comma. A value of false means that no
   * separator will be used.
   */
  digitSeparator?: boolean;
  /**
   * An integer used with numerical fields to specify the number of
   * supported decimal places that should appear in popup windows. Any
   * places beyond this value are rounded.
   */
  places?: number;
}
