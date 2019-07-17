/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import {
  IPictureFillSymbol,
  IPictureMarkerSymbol,
  ISimpleFillSymbol,
  ISimpleLineSymbol,
  ISimpleMarkerSymbol,
  ITextSymbol
} from "../../common-data-types/index";

/**
 * The symbol object contains the symbology information in the renderer
 * object. The following is a list of properties found on this object,
 * which is one of the properties on the drawingInfo object. The symbol
 * object can be found on each renderer: simple, unique value, and
 * class breaks.
 *
 * @type EsriSymbol
 * @see https://developers.arcgis.com/web-map-specification/objects/symbol/
 */
export type EsriSymbol =
  | IPictureFillSymbol
  | IPictureMarkerSymbol
  | ISimpleFillSymbol
  | ISimpleLineSymbol
  | ISimpleMarkerSymbol
  | ITextSymbol;
