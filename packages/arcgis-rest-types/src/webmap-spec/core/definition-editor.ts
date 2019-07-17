/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { FieldType } from "../../common-data-types/index";

/**
 * The definitionEditor stores interactive filters at the same
 * level as layerDefinition.
 *
 * @export
 * @interface IDefinitionEditor
 * @see https://developers.arcgis.com/web-map-specification/objects/definitionEditor/
 */
export interface IDefinitionEditor {
  /** An array of input objects. */
  inputs?: IDefinitionInput[];
  /**
   * A string value representing the where clause for the interactive
   * filter.
   */
  parameterizedExpression?: string;
}

/**
 * The input objects specified by the definitionEditor.
 *
 * @export
 * @interface IDefinitionInput
 * @see https://developers.arcgis.com/web-map-specification/objects/input/
 */
export interface IDefinitionInput {
  /** A string value representing a hint for the input. */
  hint?: string;
  /** An array of parameter objects. */
  parameters?: IDefinitionParameter[];
  /** A string value representing the prompt for the input. */
  prompt?: string;
}

/**
 * Objects defined by a definitionEditor input.
 *
 * @export
 * @interface IDefinitionParameter
 * @see https://developers.arcgis.com/web-map-specification/objects/parameter/
 */
export interface IDefinitionParameter {
  /** The default value that is automatically given if nothing is provided. */
  defaultValue?: number | string;
  /** A string value representing the name of the field to query. */
  fieldName?: string;
  /** Number given to uniquely identify the specified parameter. */
  parameterId?: any;
  /** The field type for the specified field parameter. */
  type?: FieldType;
  /**
   * An integer value representing exact UNIX time used when defaultValue
   * is a date string.
   */
  utcValue?: number;
}
