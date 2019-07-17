/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import {
  IDefinitionEditorMixin,
  IDisablePopupMixin,
  IItemIdMixin,
  ILayerBase,
  ILayerDefinitionMixin,
  IPopupInfoMixin,
  IRefreshIntervalMixin,
  IShowLegendMixin,
  ITimeAnimationMixin,
  IUrlMixin
} from "./util";
import {
  IDefinitionEditor,
  IFeature,
  ILayerDefinition,
  IPopupInfo
} from "../core/index";
import { GeometryType } from "../../common-data-types/index";

/**
 * Feature layers can be created by referencing a layer from either a map
 * service or a feature service or by specifying a feature collection
 * object. Use a map service if you just want to retrieve geometries and
 * attributes from the server and symbolize them yourself. Use a feature
 * service if you want to take advantage of symbols from the service's
 * source map document. Also, use a feature service if you plan on doing
 * editing with the feature layer. Feature layers honor any feature
 * templates configured in the source map document. Feature collection
 * objects are used to create a feature layer based on the supplied
 * definition.
 *
 * @export
 * @interface IFeatureLayer
 * @extends {IItemIdMixin}
 * @extends {ILayerBase}
 * @extends {IPopupInfoMixin}
 * @extends {IRefreshIntervalMixin}
 * @extends {IShowLegendMixin}
 * @extends {ITimeAnimationMixin}
 * @see https://developers.arcgis.com/web-map-specification/objects/featureLayer/
 */
export interface IFeatureLayer
  extends ILayerBase,
    IDefinitionEditorMixin,
    IDisablePopupMixin,
    IItemIdMixin,
    ILayerDefinitionMixin,
    IPopupInfoMixin,
    IRefreshIntervalMixin,
    IShowLegendMixin,
    ITimeAnimationMixin,
    IUrlMixin {
  layerType: "ArcGISFeatureLayer";
  /**
   * A comma-separated string listing which editing operations are allowed
   * on an editable feature service.
   */
  capabilities?: string;
  /**
   * A featureCollection object defining a layer of features whose geometry
   * and attributes are either stored directly within the web map or with
   * an item. Feature Collections can be created from CSVs, shapefiles,
   * GPX, or map notes.
   */
  featureCollection?: IFeatureCollection;
  /**
   * Indicates the type of features in the feature collection. If
   * featureCollectionType is missing, it means the feature collection is
   * a regular single-layer or multi-layer feature collection.
   */
  featureCollectionType?: "markup" | "notes" | "route";
  /**
   * 0 is snapshot mode. 1 is on-demand mode. 2 is selection-only
   * mode. Used with ArcGIS feature services and individual layers in
   * ArcGIS map services.
   */
  mode?: 0 | 1 | 2;
  /**
   * Labels will display if this property is set to true and the layer
   * also has a labelingInfo property associated with it. This property
   * can get stored in the web map config and in the item/data.
   */
  showLabels?: true;
  /**
   * The URL to the layer. If the layer is not from a web service but
   * rather a feature collection, then the url property is omitted.
   */
  url?: string;
  /**
   * An array of sublayer ids that should appear visible. Used with
   * feature layers that are based on feature collections.
   */
  visibleLayers?: number[];
}

export interface IFeatureCollection {
  /**
   * The name of the attribute field of features in the feature collection
   * that contains group identifier. The identifier will be one of those
   * specified in groups.
   */
  groupIdField?: string;
  /**
   * Specifies the type of groups available in the feature collection.
   */
  groups?: IGroup[];
  /**
   * An array of layer objects defining the styling, geometry, and attribute
   * information for the features.
   */
  layer?: IFeatureCollectionLayer[];
  /**
   * A Boolean indicating if the layers in this feature collection should be
   * shown in the legend in client applications.
   */
  showLegend?: boolean;
}

/**
 * Specifies the type of groups available in the feature collection.
 *
 * @export
 * @interface IGroup
 * @see https://developers.arcgis.com/web-map-specification/objects/group/
 */
export interface IGroup {
  /**
   * A number that uniquely identifies a specific type of group
   */
  groupId?: number;
  /**
   * Type of group in the feature collection.
   */
  groupType?: "pointSymbolCallout";
}

/**
 * Object defining the styling, geometry, and attribute information for
 * the features.
 *
 * @export
 * @interface IFeatureCollectionLayer
 * @see https://developers.arcgis.com/web-map-specification/objects/featureCollection/#layers-properties
 */
export interface IFeatureCollectionLayer {
  /**
   * A featureSet object containing the geometry and attributes of the
   * features in the layer.
   */
  featureSet?: IFeatureSet;
  /**
   * The layerDefinition object defines the attribute schema and drawing
   * information for the layer.
   */
  layerDefinition?: ILayerDefinition;
  /**
   * Iterates within a feature set. Number objectId value is incremented 1
   * based on last Object ID defined for the feature in a feature set.
   * Used with feature collections.
   */
  nextObjectId?: number;
  /**
   * A popupInfo object defining the popup window content for the layer.
   */
  popupInfo?: IPopupInfo;
  /**
   * A Boolean indicating if the layer should be shown in the legend in
   * client applications.
   */
  showLegend?: boolean;
}

/**
 * A featureSet object contains the geometry and attributes of features in
 * a layer. This object is used with feature collections only.
 *
 * Slightly different than common-data-types FeatureSet.
 *
 * @export
 * @interface IFeatureSet
 * @see https://developers.arcgis.com/web-map-specification/objects/featureSet/
 */
export interface IFeatureSet {
  /**
   * An array of feature objects containing geometry and a set of
   * attributes.
   */
  features?: IFeature[];
  /**
   * The type of geometry.
   */
  geometryType?: GeometryType;
}
