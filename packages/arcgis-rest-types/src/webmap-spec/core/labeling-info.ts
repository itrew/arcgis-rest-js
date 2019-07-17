/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { IFormat } from "./util";
import { ITextSymbol } from "../../common-data-types/index";

/**
 * The labelingInfo object specifies the label definition for a layer.
 *
 * @export
 * @interface ILabelingInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/labelingInfo/
 */
export interface ILabelingInfo {
  /**
   * Specifies whether or not a label can overrun the geometry feature being
   * labeled. Only applicable to labels for lines or polygons.
   */
  allowOverrun?: boolean;
  /**
   * Specifies the approach to use for deconflicting labels with this class. The
   * option 'none' allows overlapping labels, the option 'static' treats
   * placement as fixed positions and will not move a label to allow other labels
   * to be places, and the option 'dynamic' allows for label movement from the
   * specified position to optimize the number of placed labels.
   */
  deconflictionStrategy?: "none" | "static" | "dynamic";
  /** An array of objects representing field information to label. */
  fieldInfos?: IFieldInfoProperties[];
  /**
   * This read-only web map property allows formatting of labels. Use
   * labelExpressionInfo instead.
   */
  labelExpression?: string;
  /**
   * This object allows label text to be read similar to that of the popupInfo's
   * description property.
   */
  labelExpressionInfo?: ILabelExpressionInfo;
  /**
   * This string property specifies the label placement with respect to that of
   * its feature. A list of label placement values categorized by feature
   * geometry types.
   */
  labelPlacement?:
    | "esriServerPointLabelPlacementAboveCenter"
    | "esriServerPointLabelPlacementBelowCenter"
    | "esriServerPointLabelPlacementCenterCenter"
    | "esriServerPointLabelPlacementAboveLeft"
    | "esriServerPointLabelPlacementBelowLeft"
    | "esriServerPointLabelPlacementCenterLeft"
    | "esriServerPointLabelPlacementAboveRight"
    | "esriServerPointLabelPlacementBelowRight"
    | "esriServerPointLabelPlacementCenterRight"
    | "esriServerLinePlacementAboveAfter"
    | "esriServerLinePlacementAboveStart"
    | "esriServerLinePlacementBelowAfter"
    | "esriServerLinePlacementBelowStart"
    | "esriServerLinePlacementCenterAfter"
    | "esriServerLinePlacementCenterStart"
    | "esriServerLinePlacementAboveAlong"
    | "esriServerLinePlacementAboveEnd"
    | "esriServerLinePlacementBelowAlong"
    | "esriServerLinePlacementBelowEnd"
    | "esriServerLinePlacementCenterAlong"
    | "esriServerLinePlacementCenterEnd"
    | "esriServerLinePlacementAboveBefore"
    | "esriServerLinePlacementBelowBefore"
    | "esriServerLinePlacementCenterBefore"
    | "esriServerPolygonPlacementAlwaysHorizontal";
  /**
   * Specifies the approach to use for connecting line labels with this class.
   * The option 'none' specifies that line connection should not be performed.
   * The option 'minimizeLabels' connects lines through intersections while
   * 'unambiguousLabels' allows for labels on sides of intersections to clarify
   * ambiguity with label and feature relationships.
   */
  lineConnection?: "none" | "unambiguousLabels" | "minimizeLabels";
  /**
   * Represents the maximum scale at which the layer definition will be applied.
   */
  maxScale?: number;
  /**
   * Represents the minimum scale at which the layer definition will be applied.
   */
  minScale?: number;
  /**
   * Specifies the approach to use for labeling parts and segments of
   * geometries.
   */
  multiPart?:
    | "labelPerSegment"
    | "labelPerPart"
    | "labelPerFeature"
    | "labelLargest";
  /** The name of the label class. */
  name?: string;
  /**
   * The priority of the label class relative to other label classes. Numbers
   * are positive with 0 being the most important and higher numbers being
   * less important.
   */
  priority?: number;
  /**
   * Specifies whether or not to remove duplicates and if removing duplicate
   * labels whether or not to do it within just this label class, within all
   * labels of that feature type (e.g. point layers) or across all layers.
   * The removeDuplicatesDistance is used when a value other than none is set.
   */
  removeDuplicates: "none" | "labelClass" | "featureType" | "all";
  /**
   * The screen distance in points to remove duplicates within. The value 0
   * is a special value and indicates to remove duplicates for the entire
   * extent.
   */
  removeDuplicatesDistance: number;
  /**
   * A boolean value indicating whether or not to repeat the label along the
   * feature. If true, the label will be repeated according to the
   * repeatLabelDistance.
   */
  repeatLabel: boolean;
  /**
   * The repeat label distance used when repeatLabel is true. It represents
   * a screen distance in points.
   */
  repeatLabelDistance: number;
  /**
   * This string property indicates whether or not to derive stacking from
   * the text symbol or have dynamic stacking based on the relative position
   * of the label to the feature.
   */
  stackAlignment: "textSymbol" | "dynamic";
  /**
   * Boolean value indicating whether or not to stack labels for this label
   * class.
   */
  stackLabel: boolean;
  /**
   * The text symbol used to label.
   */
  symbol: ITextSymbol;
  /**
   * Boolean value indicating whether to display the coded values for the
   * specified field name(s).
   */
  useCodedValues: boolean;
  /**
   * String template used to determine which features to label.
   */
  where: string;
}

/**
 * Properties about a field and how it's labeled.
 *
 * @interface IFieldInfoProperties
 * @see https://developers.arcgis.com/web-map-specification/objects/labelingInfo/#fieldinfos-properties
 */
interface IFieldInfoProperties {
  /**
   * A string containing the field name as defined by the service. Anywhere
   * that a field name is referenced as {field-name} in popupInfo, an Arcade
   * expression can also be referenced as{expression/}`.
   */
  fieldName: string;
  /**
   * A format object used with numerical or date fields to provide more detail
   * about how the value should be displayed in a web map popup window.
   */
  format: IFormat;
}

/**
 * The labelExpressionInfo allows label text to be read similar to that of
 * Popups's description property.
 *
 * @export
 * @interface ILabelExpressionInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/labelExpressionInfo/
 */
export interface ILabelExpressionInfo {
  /** An Arcade expression evaluating to either a string or a number. */
  expression: string;
  /**
   * Represents a simple templated string. This property is deprecated as of
   * version 2.7 of the web map in favor of expression.
   *
   * @deprecated
   */
  value: string;
}
