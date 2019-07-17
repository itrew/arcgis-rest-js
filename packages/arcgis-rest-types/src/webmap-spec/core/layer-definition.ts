/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { IDefinitionEditor } from "./definition-editor";
import { IDrawingInfo } from "./drawing-info";
import { IPopupInfo } from "./popup-info";
import { Source } from "./source";
import { IFeature, IField, Domain } from "./util";
import {
  IExtent,
  GeometryType,
  SpatialReference
} from "../../common-data-types/index";

/**
 * An object that defines the attribute schema and drawing information
 * for a layer drawn using client-side graphics.
 *
 * `ILayerDefinition` can also be imported from the following packages:
 *
 * ```js
 * import { ILayerDefinition } from "@esri/arcgis-rest-service-admin";
 * import { ILayerDefinition } from "@esri/arcgis-rest-feature-layer";
 * ```
 *
 * @export
 * @interface ILayerDefinition
 * @see https://developers.arcgis.com/web-map-specification/objects/layerDefinition/
 */
export interface ILayerDefinition {
  /**
   * Boolean value indicating whether the geometry of the features in
   * the layer can be edited.
   */
  allowGeometryUpdates?: boolean;
  /**
   * A comma separated list of supported capabilities,
   * e.g. Query,Editing.
   */
  capabilities?: string;
  /**
   * String value for the copyright text information for the layer.
   */
  copyrightText?: string;
  /**
   * Numeric value indicating the server version of the layer.
   */
  currentVersion?: number;
  /**
   * Boolean value indicating whether the layer's visibility is turned on.
   */
  defaultVisibility?: boolean;
  /**
   * Stores interactive filters.
   */
  definitionEditor?: IDefinitionEditor;
  /**
   * SQL-based definition expression string that narrows the data to be
   * displayed in the layer.
   */
  definitionExpression?: string;
  /**
   * String value of the layer as defined in the map service.
   */
  description?: string;
  /**
   * A string value that summarizes the feature.
   */
  displayField?: string;
  /**
   * Contains drawing, labeling, and transparency information.
   */
  drawingInfo?: IDrawingInfo;
  /**
   * An object defining the rectangular area.
   */
  extent?: IExtent | null;
  /**
   * Feature reductions declutter the screen by hiding features that would
   * otherwise intersect with other features on screen.
   */
  featureReduction?: IFeatureReduction;
  /**
   * An array of field objects containing information about the attribute
   * fields for the feature collection or layer.
   */
  fields?: IField[];
  /**
   * A string defining the type of geometry. Possible geometry types are:
   * esriGeometryPoint, esriGeometryMultipoint, esriGeometryPolyline,
   * esriGeometryPolygon, and esriGeometryEnvelope.
   */
  geometryType?: GeometryType;
  /**
   * The unique identifier for a feature or table row within a
   * geodatabase.
   */
  globalIdField?: string;
  /**
   * Indicates whether attachments should be loaded for the layer.
   */
  hasAttachments?: boolean;
  /**
   * Boolean value indicating whether layer has M values.
   */
  hasM?: boolean;
  /**
   * Boolean value indicating whether data changes. True if it does not.
   */
  hasStaticData?: boolean;
  /**
   * Boolean value indicating whether layer has Z values.
   */
  hasZ?: boolean;
  /**
   * String value indicating the HTML popup type.
   */
  htmlPopupType?:
    | "esriServerHTMLPopupTypeNone"
    | "esriServerHTMLPopupTypeAsURL"
    | "esriServerHTMLPopupTypeAsHTMLText";

  /**
   * The identifier assigned to the layer.
   */
  id?: number;
  /**
   * Boolean value indicating whether the data is versioned.
   */
  isDataVersioned?: boolean;
  /**
   * Numeric value indicating tbe maximum number of records that will
   * be returned at once for a query.
   */
  maxRecordCount?: number;
  /**
   * Represents the maximum scale at which the layer definition will
   * be applied. This does not apply to layers of type:
   * ArcGISMapServiceLayer, ImageServiceVectorLayer or
   * ImageServiceLayer.
   */
  maxScale?: number;
  /**
   * Represents the minimum scale at which the layer definition will
   * be applied. This does not apply to layers of type:
   * ArcGISMapServiceLayer, ImageServiceVectorLayer or
   * ImageServiceLayer.
   */
  minScale?: number;
  /**
   * Contains a unique name for the layer that can be displayed
   * in a legend.
   */
  name?: string;
  /**
   * Indicates the name of the object ID field in the dataset.
   */
  objectIdField?: string;
  /**
   * Dictates whether a client can support having an end user modify
   * symbols on individual features.
   */
  overrideSymbols?: boolean;
  /**
   * Indicates range information
   */
  rangeInfos?: IRangeInfo[];
  /**
   * An object indicating the layerDefinition's layer source.
   */
  source?: Source;
  /**
   * An object containing the WKID or WKT identifying the spatial
   * reference of the layer's geometry.
   */
  spatialReference?: SpatialReference;
  /**
   * String value indicating the output formats that are supported
   * in a query.
   */
  supportedQueryFormats?: string;
  /**
   * Boolean value indicating whether the layer supports
   * orderByFields in a query operation.
   */
  supportsAdvancedQueries?: boolean;
  /**
   * Boolean value indicating whether the layer supports uploading
   * attachments with the Uploads operation. This can then be used
   * in the Add Attachment and Update Attachment operations.
   */
  supportsAttachmentsByUploadId?: boolean;
  /**
   * Boolean value indicating whether the layer supports the
   * Calculate REST operation when updating features.
   */
  supportsCalculate?: boolean;
  /**
   * Boolean value indicating whether the layer supports rolling
   * back edits made on a feature layer if some of the edits fail.
   */
  supportsRollbackOnFailureParameter?: boolean;
  /**
   * Boolean value indicating whether feature layer query operations
   * support statistical functions.
   */
  supportsStatistics?: boolean;
  /**
   * Boolean value indicating whether the validateSQL operation is
   * supported across a feature service layer.
   */
  supportsValidateSql?: boolean;
  /**
   * A property of the layer definition when there are no types
   * defined; otherwise, templates are defined as properties of
   * the types.
   */
  templates?: ITemplate[];
  /**
   * The time info metadata of the layer. May be set for feature
   * layers inside a feature collection item.
   */
  timeInfo?: ILayerTimeInfo;
  /**
   * Indicates whether the layerDefinition applies to a Feature
   * Layer or a Table.
   */
  type?: "Feature Layer" | "Table";
  /**
   * Contains the name of the field holding the type ID for the
   * features.
   */
  typeIdField?: string;
  /**
   * Contains information about an attribute field.
   */
  types?: IType;
  /** String value indicating the attribute field that is used to
   * control the visibility of a feature. If applicable, when
   * rendering a feature the client should use this field to
   * control visibility. The field's values are 0 = do not display,
   * 1 = display.
   */
  visibilityField?: string;

  // relationships?: any[];
  // editFieldsInfo?: {
  //   creationDateField?: string;
  //   creatorField?: string;
  //   editDateField?: string;
  //   editorField?: string;
  // };
  // parentLayerId?: number;
  // ownershipBasedAccessControlForFeatures?: boolean;
  // syncCanReturnChanges?: boolean;
  // archivingInfo?: {
  //   supportsQueryWithHistoricMoment?: boolean;
  //   startArchivingMoment?: number;
  // };
  // supportsValidateSQL?: boolean;
  // advancedQueryCapabilities?: {
  //   supportsPagination?: boolean;
  //   supportsTrueCurve?: boolean;
  //   supportsQueryWithDistance?: boolean;
  //   supportsReturningQueryExtent?: boolean;
  //   supportsStatistics?: boolean;
  //   supportsOrderBy?: boolean;
  //   supportsDistinct?: boolean;
  //   supportsSqlExpression?: boolean;
  // };
  // allowTrueCurvesUpdates?: boolean;
  // onlyAllowTrueCurveUpdatesByTrueCurveClients?: boolean;
  // supportsApplyEditsWithGlobalIds?: boolean;
  // subtypeField?: string;
  // indexes?: any[];
  // dateFieldsTimeReference?: {
  //   timeZone?: string;
  //   respectsDaylightSaving?: boolean;
  // };
  // useStandardizedQueries?: boolean;
}

/**
 * Feature reductions declutter the screen by hiding features that
 * would otherwise intersect with other features on screen.
 *
 * @export
 * @interface IFeatureReduction
 * @see https://developers.arcgis.com/web-map-specification/objects/featureReduction_cluster/
 */
export interface IFeatureReduction {
  /**
   * Strength of clustering, in screen units (points).
   */
  clusterRadius: number;
  /**
   * Defines the look and feel of popup windows when a user clicks
   * or queries a feature.
   */
  popupInfo?: IPopupInfo;
  /**
   * Type of feature reduction. If property is present, value of this
   * property must be cluster
   */
  type?: "cluster";
}

/**
 * Range Information.
 *
 * @export
 * @interface IRangeInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/rangeInfo/
 */
export interface IRangeInfo {
  /**
   * Contains the min and max values within which the features are visible.
   */
  currentRangeExtent?: [number, number];
  /**
   * Field name to used for the range.
   */
  field?: string;
  /**
   * Contains the min and max values of all the features for this rangeInfo.
   */
  fullRangeExtent?: [number, number];
  /**
   * A unique name that can be referenced by webMap.activeRanges.
   */
  name?: string;
  /**
   * Type of range object. Value of this property must be rangeInfo
   */
  type: "rangeInfo";
}

/**
 * Templates describe features that can be created in a layer. They are
 * generally used with feature collections and editable web-based CSV layers.
 * Templates are not used with ArcGIS feature services as these already have
 * templates defined in the service. They are also defined as properties of
 * the layer definition when there are no defined types. Otherwise,
 * templates are defined as properties of the types.
 *
 * @export
 * @interface ITemplate
 * @see https://developers.arcgis.com/web-map-specification/objects/template/
 */
export interface ITemplate {
  /**
   * A string value containing a detailed description of the template.
   */
  description?: string;
  /**
   * An optional string that can define a client-side drawing tool to be used
   * with this feature. For example, map notes used by the Online Map Viewer
   * use this to represent the viewer's different drawing tools.
   */
  drawingTool?:
    | "esriFeatureEditToolAutoCompletePolygon"
    | "esriFeatureEditToolPolygon"
    | "esriFeatureEditToolTriangle"
    | "esriFeatureEditToolRectangle"
    | "esriFeatureEditToolLeftArrow"
    | "esriFeatureEditToolRightArrow"
    | "esriFeatureEditToolEllipse"
    | "esriFeatureEditToolUpArrow"
    | "esriFeatureEditToolDownArrow"
    | "esriFeatureEditToolCircle"
    | "esriFeatureEditToolFreehand"
    | "esriFeatureEditToolLine"
    | "esriFeatureEditToolNone"
    | "esriFeatureEditToolText"
    | "esriFeatureEditToolPoint";
  /**
   * A string containing a user-friendly name for the template.
   */
  name?: string;
  /**
   * A feature object representing a prototypical feature for the template.
   */
  prototype?: IFeature;
}

/**
 * Time info if the layer/table supports querying and exporting maps based
 * on time.
 *
 * @export
 * @interface ILayerTimeInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/layerTimeInfo/
 */
export interface ILayerTimeInfo {
  /**
   * The name of the attribute field that contains the end time
   * information.
   */
  endTimeField?: string;
  /**
   * The default time-related export options for this layer.
   */
  exportOptions?: ITimeInfoExportOptions;
  /**
   * Indicates whether service has live data.
   */
  hasLiveData?: boolean;
  /**
   * The name of the attribute field that contains the start time
   * information.
   */
  startTimeField?: string;
  /**
   * The time extent for all the data in the layer.
   *
   * Official documentation lacking.
   */
  timeExtent?: any;
  /**
   * Time interval of the data in the layer. Typically used for the
   * TimeSlider when animating the layer.
   */
  timeInterval?: number;
  /**
   * Temporal unit in which the time interval is measured.
   */
  timeIntervalUnit?:
    | "esriTimeUnitsUnknown"
    | "esriTimeUnitsCenturies"
    | "esriTimeUnitsDays"
    | "esriTimeUnitsDecades"
    | "esriTimeUnitsHours"
    | "esriTimeUnitsMilliseconds"
    | "esriTimeUnitsMinutes"
    | "esriTimeUnitsMonths"
    | "esriTimeUnitsSeconds"
    | "esriTimeUnitsWeeks"
    | "esriTimeUnitsYears";
  /**
   * Information about how the time was measured.
   */
  timeReference?: ITimeReference;
  /**
   * The field that contains the trackId.
   */
  trackIdField?: string;
}

/**
 * The default time-related export options for a layer.
 *
 * @export
 * @interface ITimeInfoExportOptions
 * @see https://developers.arcgis.com/web-map-specification/objects/timeInfoExportOptions/
 */
export interface ITimeInfoExportOptions {
  /**
   * If true, draw all the features from the beginning of time for
   * that data.
   */
  timeDataCumulative?: boolean;
  /**
   * Time offset value for this layer so that it can be overlaid on
   * the top of a previous or future time period.
   */
  timeOffset?: number;
  /**
   * Temporal unit in which the time offset is measured.
   */
  timeOffsetUnits?:
    | "esriTimeUnitsUnknown"
    | "esriTimeUnitsCenturies"
    | "esriTimeUnitsDays"
    | "esriTimeUnitsDecades"
    | "esriTimeUnitsHours"
    | "esriTimeUnitsMilliseconds"
    | "esriTimeUnitsMinutes"
    | "esriTimeUnitsMonths"
    | "esriTimeUnitsSeconds"
    | "esriTimeUnitsWeeks"
    | "esriTimeUnitsYears";
  /**
   * If true, use the time extent specified by the time parameter.
   */
  useTime?: boolean;
}

/**
 * Defines information about daylight savings time and the time zone
 * in which data was collected.
 *
 * @export
 * @interface ITimeReference
 * @see https://developers.arcgis.com/web-map-specification/objects/timeReference/
 */
export interface ITimeReference {
  /**
   * 	Indicates whether the time reference takes into account daylight
   * savings time.
   */
  respectsDaylightSaving?: boolean;
  /**
   * The time zone in which the data was captured.
   */
  timeZone?: string;
}

/**
 * Contains information about an attribute field.
 *
 * @export
 * @interface IType
 * @see https://developers.arcgis.com/web-map-specification/objects/type/
 */
export interface IType {
  /**
   * A comma-delimited series of domain objects for each domain in the type.
   */
  domains?: string;
  /**
   * A unique string or numerical ID for the type.
   */
  id?: string | number;
  /**
   * 	A user-friendly name for the type.
   */
  name?: string;
  /**
   * Defined as a property of the layer definition when there are no types
   * defined; otherwise, templates are defined as properties of the types.
   */
  templates?: ITemplate[];
}
