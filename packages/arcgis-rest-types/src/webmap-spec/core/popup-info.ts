/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { IFormat } from "./util";

/**
 * Defines the look and feel of popup windows when a user clicks or queries
 * a feature.
 *
 * @export
 * @interface IPopupInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/popupInfo/
 */
export interface IPopupInfo {
  /**
   * A string that appears in the body of the popup window as a description.
   * It is also possible to specify the description as HTML-formatted content.
   */
  description?: string | null;
  /**
   * List of Arcade expressions added to the pop-up.
   */
  expressionInfos?: IPopupExpressionInfo[];
  /**
   * Array of fieldInfo information properties. This information is provided
   * by the service layer definition. When the description uses name/value
   * pairs, the order of the array is how the fields display in the editable
   * Map Viewer popup and the resulting popup. It is also possible to
   * specify HTML-formatted content.
   */
  fieldInfos?: IFieldInfo[];
  /**
   * Additional options that can be defined for the popup layer.
   */
  layerOptions?: IPopupLayerOptions;
  /**
   * Array of various mediaInfo to display. Can be of type image, piechart,
   * barchart, columnchart, or linechart. The order given is the order in
   * which is displays.
   */
  mediaInfos?: IMediaInfo[];
  /**
   * An array of popupElement objects that represent an ordered list of
   * popup elements.
   */
  popupElements?: IPopupElement[];
  /**
   * Indicates whether to enable related records if they exist on a layer.
   */
  relatedRecordsInfo?: IRelatedRecordsInfo;
  /**
   * Indicates whether attachments will be loaded for feature layers that
   * have attachments.
   */
  showAttachments?: boolean;
  /**
   * Indicates whether popup will display information about when and who
   * last edited the feature. Applicable only to layers that have been
   * configured to keep track of such information.
   */
  showLastEditInfo?: boolean;
  /**
   * A string that appears at the top of the popup window as a title.
   */
  title?: string;
}

/**
 * Arcade expression added to the pop-up.
 *
 * @export
 * @interface IPopupExpressionInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/popupExpressionInfo/
 */
export interface IPopupExpressionInfo {
  /**
   * The Arcade expression.
   */
  expression?: string;
  /**
   * Unique identifier for the expression.
   */
  name?: string;
  /**
   * Return type of the Arcade expression, can be number or string. Defaults
   * to string value. Number values are assumed to be double. This can be
   * determined by the authoring client by executing the expression using
   * a sample feature(s), although it can be corrected by the user. Knowing
   * the returnType allows the authoring client to present fields in
   * relevant contexts. For example, numeric fields in numeric contexts such
   * as charts.
   */
  returnType?: "number" | "string";
  /**
   * Title of the expression.
   */
  title?: string;
}

/**
 * Defines how a field in the dataset participates (or does not participate)
 * in a popup window.
 *
 * @export
 * @interface IFieldInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/fieldInfo/
 */
export interface IFieldInfo {
  /**
   * A string containing the field name as defined by the service. Anywhere
   * that a fieldname is referenced as {field-name} in popupInfo, an Arcade
   * expression can also be referenced as{expression/}`.
   */
  fieldName?: string;
  /**
   * A format object used with numerical or date fields to provide more
   * detail about how the value should be displayed in a web map popup
   * window.
   */
  format?: IFormat;
  /**
   * A Boolean determining whether users can edit this field. Not
   * applicable to Arcade expressions.
   */
  isEditable?: boolean;
  /**
   * A string containing the field alias. This can be overridden by the
   * web map author. Not applicable to Arcade expressions as title is
   * used instead.
   */
  label?: string;
  /**
   * Used in a 1:many or many:many relationship to compute the statistics
   * on the field to show in the popup.
   */
  statisticType?: "avg" | "count" | "max" | "min" | "stddev" | "sum" | "var";
  /**
   * A string determining what type of input box editors see when editing
   * the field. Applies only to string fields. Not applicable to Arcade
   * expressions.
   */
  stringFieldOption?: "textbox" | "textarea" | "richtext";
  /**
   * A string providing an editing hint for editors of the field. Not
   * applicable to Arcade expressions.
   */
  tooltip?: string;
  /**
   * A Boolean determining whether the field is visible in the popup
   * window.
   */
  visible?: boolean;
}

/**
 * Additional options available for the popup layer.
 *
 * @export
 * @interface IPopupLayerOptions
 * @see https://developers.arcgis.com/web-map-specification/objects/popupLayerOptions/
 */
export interface IPopupLayerOptions {
  /**
   * Indicates whether or not the NoData records should be displayed.
   */
  showNoDataRecords?: boolean;
}

/**
 * Defines an image or a chart to be displayed in a popup window.
 *
 * @export
 * @interface IMediaInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/mediaInfo/
 */
export interface IMediaInfo {
  /**
   * A string caption describing the media.
   */
  caption?: string;
  /**
   * Refresh interval of the layer in minutes. Non-zero value indicates
   * automatic layer refresh at the specified interval. Value of 0
   * indicates auto refresh is not enabled. If the property does not
   * exist, it's equivalent to having a value of 0. Only applicable
   * when type is set to image.
   */
  refreshInterval?: number;
  /**
   * A string title for the media.
   */
  title?: string;
  /**
   * A string defining the type of media.
   */
  type?: "image" | "barchart" | "columnchart" | "linechart" | "piechart";
  /**
   * A value object containing information about how the image should
   * be retrieved or how the chart should be constructed.
   */
  value?: IValue | null;
}

/**
 * The value object contains information for popup windows about how images should be retrieved or charts constructed.
 *
 * @export
 * @interface IValue
 * @see https://developers.arcgis.com/web-map-specification/objects/value/
 */
export interface IValue {
  /**
   * Used with charts. An array of strings, with each string containing
   * the name of a field to display in the chart.
   */
  fields?: string[];
  /**
   * Used with images. A string containing a URL to be launched in a
   * browser when a user clicks the image.
   */
  linkURL?: string;
  /**
   * Used with charts. An optional string containing the name of a
   * field. The values of all fields in the chart will be
   * normalized (divided) by the value of this field.
   */
  normalizeField?: string;
  /**
   * Used with images. A string containing the URL to the image.
   */
  sourceURL?: string;
  /**
   * String value indicating the tooltip for a chart specified from
   * another field. This field is needed when related records are not
   * used. It is used for showing tooltips from another field in the
   * same layer or related layer/table.
   */
  tooltipField?: string;
}

/**
 * Popup elements allow users to author popups, using multiple elements
 * such as tabular views, string description, media (charts and images),
 * and attachments of the attributes and control the order in which they
 * appear. Specifically, popupElements do the following: 1) provide the
 * ability to explicitly add a field/ value table in addition to a
 * description, 2) allow adding multiple description elements, and 3)
 * allow a user to author and consume elements of a popup in the order of
 * their choosing.
 *
 * @export
 * @interface IPopupElement
 * @see https://developers.arcgis.com/web-map-specification/objects/popupElement/
 */
export interface IPopupElement {
  /**
   * This property applies to elements of type attachments. A string value
   * indicating how to display the attachment. Possible values are, preview,
   * and list. If list is specified, attachments show as links.
   */
  displayType?: "preview" | "list";
  /**
   * This property applies to elements of type fields. It is an array of
   * popupInfo.fieldInfo objects representing a field/value pair displayed
   * as a table within the popupElement. If the fieldInfos property is not
   * provided, the popupElement will display whatever is specified directly
   * in the popupInfo.fieldInfos property.
   */
  fieldInfos?: IFieldInfo[];
  /**
   * This property applies to elements of type media. An array of
   * popupInfo.mediaInfo objects representing an image or chart for display.
   * If no mediaInfos property is provided, the popupElement will display
   * whatever is specified in the popupInfo.mediaInfo property.
   */
  mediaInfos?: IMediaInfo[];
  /**
   * This property applies to elements of type text. This is string value
   * indicating the text to be displayed within the popupElement. If no text
   * property is provided, the popupElement will display whatever is
   * specified in the popupInfo.description property.
   */
  text?: string;
  /**
   * String value indicating which elements to use.
   */
  type?: "text" | "fields" | "media" | "attachments";
}

/**
 * The sort in the popupInfo for the parent feature. This impacts the sorting
 * order for the returned child records.
 *
 * @export
 * @interface IRelatedRecordsInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/relatedRecordsInfo/
 */
export interface IRelatedRecordsInfo {
  /**
   * Array of orderByFields objects indicating the field display order for
   * the related records and whether they should be sorted in ascending 'asc'
   * or descending 'desc' order.
   */
  orderByFields?: IOrderByField[];
  /**
   * Required boolean value indicating whether to display related records.
   * If true, client should let the user navigate to the related records.
   * Defaults to true if the layer participates in a relationship AND the
   * related layer/table has already been added to the map (either as an
   * operationalLayer or as a table).
   */
  showRelatedRecords: boolean;
}

/**
 * Object indicating the field display order for the related records and
 * whether they should be sorted in ascending or descending order.
 *
 * @export
 * @interface IOrderByField
 * @see https://developers.arcgis.com/web-map-specification/objects/orderByFields/
 */
export interface IOrderByField {
  /**
   * The attribute value of the field selected that will drive the sorting
   * of related records.
   */
  field?: string;
  /**
   * Set the ascending or descending sort order of the returned related
   * records.
   */
  order?: "asc" | "desc";
}
