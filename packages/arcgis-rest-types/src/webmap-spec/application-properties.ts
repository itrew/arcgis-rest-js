/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { FieldType } from "../common-data-types/index";

/**
 * The applicationProperties object is one of the objects at the top level
 * of the JSON web map JSON schema. This is responsible for containing the
 * viewing and editing properties of the web map. There are specific objects
 * within this object that are applicable only to Collector and are
 * explained within the property descriptions.
 *
 * @export
 * @interface IApplicationProperties
 * @see https://developers.arcgis.com/web-map-specification/objects/applicationProperties/
 */
export interface IApplicationProperties {
  /**
   * If locationTracking is set and enabled, the Collector application
   * will update the feature service at the defined interval with the
   * current location of the user logged into the Collector app.
   */
  editing?: IEditingProperties;
  /** Use if working with offline maps. */
  offline?: IOfflineInfo;
  /**
   * An object containing all the viewing properties of the web map. If
   * this is null or not defined, the client should assume a logical default.
   */
  viewing?: IViewingInfo;
}

/**
 * An object containing all the editing properties within the web map.
 *
 * @export
 * @interface IEditingProperties
 * @see https://developers.arcgis.com/web-map-specification/objects/editing/
 */
export interface IEditingProperties {
  /**
   * If locationTracking is set and enabled, the collector app will update
   * the feature service at the defined interval with the current location
   * of the user logged into the collector application.
   */
  locationTracking: ILocationTracking;
}

/**
 * If locationTracking is set and enabled, the collector app will update
 * the feature service at the defined interval with the current location
 * of the user logged into the collector application.
 *
 * @export
 * @interface ILocationTracking
 * @see https://developers.arcgis.com/web-map-specification/objects/locationTracking/
 */
export interface ILocationTracking {
  /**
   * A boolean value indicating whether or not location tracking is enabled
   * on the webmap.
   */
  enabled: boolean;
  /**
   * An object of additional information specifying layer and update
   * interval time.
   */
  info: ILocationTrackingInfo;
}

/**
 * An object containing additional information specifying layer and update
 * interval time used in the locationTracking object.
 *
 * @export
 * @interface ILocationTrackingInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/info/
 */
export interface ILocationTrackingInfo {
  /**
   * A string value indicating the given layer id specified in the
   * webmap.
   */
  layerId: string;
  /**
   * A numeric value indicating the time interval used to update the
   * feature service. Default value is 300 seconds.
   */
  updateInterval: number;
}

/**
 * Use if working with offline maps.
 *
 * @export
 * @interface IOfflineInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/offline/
 */
export interface IOfflineInfo {
  /** Object detailing the available offline editing options. */
  editableLayers: IEditableLayers;
  /** Object detailing offline basemap options. */
  offlinebasemap: IOfflineBasemap;
  /** Object indicating what to do with attachments in read-only layers. */
  readonlyLayers: IReadOnlyLayers;
}

/**
 * Object detailing the available offline editing options.
 *
 * @export
 * @interface IEditableLayers
 * @see https://developers.arcgis.com/web-map-specification/objects/editableLayers/
 */
export interface IEditableLayers {
  /**
   * When editing layers, the edits are always sent to the server. This
   * string value indicates which data is retrieved. For example, none
   * indicates that only the schema is written since neither the features
   * nor attachments are retrieved. For a full sync without downloading
   * attachments, indicate features. Lastly, the default behavior is to
   * have a full sync using featuresAndAttachments where both features
   * and attachments are retrieved.
   */
  download: "none" | "featuresAndAttachments" | "features";
  /** This string value indicates how the data is synced. */
  sync:
    | "uploadFeaturesAndAttachments"
    | "syncFeaturesAndAttachments"
    | "syncFeaturesUploadAttachments";
}

/**
 * Object detailing offline basemap options.
 *
 * @export
 * @interface IOfflineBasemap
 * @see https://developers.arcgis.com/web-map-specification/objects/offlinebasemap/
 */
export interface IOfflineBasemap {
  /**
   * The filename of a basemap that has been copied to a mobile device.
   * This can be used instead of the default basemap for the map to
   * reduce downloads.
   */
  referenceBasemapName: string;
}

/**
 * Read-only layers as the features are always retrieved from the server.
 *
 * @export
 * @interface IReadOnlyLayers
 * @see https://developers.arcgis.com/web-map-specification/objects/readonlyLayers/
 */
export interface IReadOnlyLayers {
  /** Indicates whether to include attachments with the read-only data. */
  downloadAttachments: boolean;
}

/**
 * An object containing all the viewing properties of the web map. If this
 * is null or not defined, the client should assume a logical default.
 *
 * @export
 * @interface IViewingInfo
 * @see https://developers.arcgis.com/web-map-specification/objects/viewing/
 */
export interface IViewingInfo {
  /**
   * The basemap tool which will use the basemap group defined in the
   * Portal.
   */
  basemapGallery?: IBasemapGallery;
  /** Measure tool. */
  measure?: IMeasure;
  /**
   * The route tool which will leverage the Portals defined route
   * service.
   */
  routing?: IRouting;
  /** An object specifying search parameters within the webmap. */
  search?: ISearch;
}

/**
 * This object displays a collection of basemaps. The basemaps are derived
 * from the organization's basemap group.
 *
 * @export
 * @interface IBasemapGallery
 * @see https://developers.arcgis.com/web-map-specification/objects/basemapGallery/
 */
export interface IBasemapGallery {
  /** Indicates whether to display the basemapGallery. */
  enabled: boolean;
}

/**
 * Measure tool setting for the application properties.
 *
 * @export
 * @interface IMeasure
 * @see https://developers.arcgis.com/web-map-specification/objects/measure/
 */
export interface IMeasure {
  /** Indicates if the measuring tool is enabled. */
  enabled: boolean;
}

/**
 * The routing setting for the applicationProperties that will leverage the
 * route service configured for your Portal.
 *
 * @export
 * @interface IRouting
 * @see https://developers.arcgis.com/web-map-specification/objects/routing/
 */
export interface IRouting {
  /** Indicates whether to set the route service. */
  enabled: boolean;
}

/**
 * An object specifying the search parameters set within the web map.
 *
 * @export
 * @interface ISearch
 * @see https://developers.arcgis.com/web-map-specification/objects/search/
 */
export interface ISearch {
  /**
   * A boolean value indicating whether or not to disable the place
   * finder.
   */
  disablePlaceFinder?: boolean;
  /**
   * A boolean value indicating whether search (find) functionality
   * is enabled in the web map.
   */
  enabled: boolean;
  /**
   * A string value used to indicate the hint provided with the search
   * dialog.
   */
  hintText?: string;
  /**
   * An array of layer objects defining the styling, geometry, and
   * attribute information for the features.
   */
  layers?: ISearchLayer[];
}

/**
 * Layer configuration for search.
 *
 * @export
 * @interface ISearchLayer
 * @see https://developers.arcgis.com/web-map-specification/objects/search_layer/
 */
export interface ISearchLayer {
  /** Contains information about an attribute field. */
  field: ISearchLayerFieldProperties;
  /** A string identifying the layer. */
  id: string;
  /** Optional index for a sub-layer */
  subLayer?: number;
}

/**
 * Contains information about an attribute field.
 *
 * @export
 * @interface ISearchLayerFieldProperties
 * @see https://developers.arcgis.com/web-map-specification/objects/search_layer/#field-properties
 */
export interface ISearchLayerFieldProperties {
  /** A Boolean defining whether or not the field is an exact match. */
  exactMatch: boolean;
  /** A string defining the field name. */
  name: string;
  /** A string defining the field type. */
  type?: FieldType;
}
