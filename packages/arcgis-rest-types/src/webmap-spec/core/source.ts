/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { IField } from "./util";
import { GeometryType, SpatialReference } from "../../common-data-types/index";

/**
 * Contains dynamicDataLayer object and dynamicMapLayer object. If the
 * service supports dynamic layers, the layerDefinition's source property
 * must be specified.
 *
 * @type Source
 * @see https://developers.arcgis.com/web-map-specification/objects/source/
 */
export type Source = IDynamicDataLayerSource | IDynamicMapLayerSource;

/**
 * A dynamic data layer derived from a registered workspace. More information
 * on this can be found in the ArcGIS REST API help.
 *
 * @export
 * @interface IDynamicDataLayerSource
 * @see https://developers.arcgis.com/web-map-specification/objects/dynamicDataLayer_source/
 */
export interface IDynamicDataLayerSource {
  /**
   * The layer's data source.
   */
  dataSource?: DataSource;
  /**
   * An array of objects specifying information about an attribute field.
   */
  fields?: IField[];
  /**
   * A string value indicating the type. Value of this property must be
   * dataLayer.
   */
  type?: "dataLayer";
}

/**
 * A dynamic map layer refers to a layer in the current map service. More
 * information on this can be found in the ArcGIS REST API help.
 *
 * @export
 * @interface IDynamicMapLayerSource
 * @see https://developers.arcgis.com/web-map-specification/objects/dynamicMapLayer_source/
 */
export interface IDynamicMapLayerSource {
  /**
   * If applicable, specify this to use an alternate geodatabase version.
   */
  gdbVersion?: string;
  /**
   * The current map layer's id.
   */
  mapLayerId?: number;
  /**
   * A string value indicating the type. Value of this property must be
   * mapLayer.
   */
  type?: "mapLayer";
}

/**
 * This object applies if the layerDefinition source is set to DynamicDataLayer.
 *
 * @type DataSource
 * @see https://developers.arcgis.com/web-map-specification/objects/dataSource/
 */
type DataSource =
  | IJoinTableDataSource
  | IQueryTableDataSource
  | IRasterDataSource
  | ITableDataSource;

/**
 * Join Table data source is the result of a join operation. Nested joins are
 * supported. To use nested joins, set either leftTableSource or
 * rightTableSource to be a joinTable.
 *
 * @export
 * @interface IJoinTableDataSource
 * @see https://developers.arcgis.com/web-map-specification/objects/joinTableDataSource/
 */
export interface IJoinTableDataSource {
  /**
   * The type of join (left outer or left inner).
   */
  joinType?: "esriLeftOuterJoin" | "esriLeftInnerJoin";
  /**
   * Field name from the left table.
   */
  leftTableKey?: string;
  /**
   * The left source. If the leftTableSource is a table, the resulting
   * joinTable is a table. If the leftTableSource is a layer, the
   * resulting joinTable is a layer.
   */
  leftTableSource?: Source;
  /**
   * Field name from the right table.
   */
  rightTableKey?: string;
  /**
   * The right table source.
   */
  rightTableSource?: Source;
  /**
   * String value indicating the type for the dataSource. Value of this
   * property must be joinTable
   */
  type?: "joinTable";
}

/**
 * Query table data source is a layer/table that is defined by a SQL query.
 *
 * @export
 * @interface IQueryTableDataSource
 * @see https://developers.arcgis.com/web-map-specification/objects/queryTableDataSource/
 */
export interface IQueryTableDataSource {
  /**
   * The geometry type. When querying a table that does not have a
   * geometry column, do not include geometryType.
   */
  geometryType: GeometryType;
  /**
   * Comma separated list of identifier fields. There are only certain
   * field types that can be used as a unique identifier. These field
   * types include integer, string, GUID, and date. If a single integer
   * field is specified, map server uses the values in that field
   * directly to uniquely identify all features and rows returned from
   * a queryTable. However, if a single string field or a group of
   * fields is used as the unique identifier, map server maps those
   * unique values to an integer.
   */
  oidFields?: string;
  /**
   * The SQL query.
   */
  query?: string;
  /**
   * The spatial reference of the geometry column. When querying a
   * table that does not have a geometry column, do not include
   * spatialReference.
   */
  spatialReference?: SpatialReference;
  /**
   * String value indicating the type for the dataSource.
   */
  type?: "queryTable";
  /**
   * The unique string value used to identify the data source's
   * workspace.
   */
  workspaceId?: string;
}

/**
 * Raster data source is a file-based raster that resides in a
 * registered raster workspace.
 *
 * @export
 * @interface IRasterDataSource
 * @see https://developers.arcgis.com/web-map-specification/objects/rasterDataSource/
 */
export interface IRasterDataSource {
  /**
   * The raster data source's name.
   */
  dataSourceName?: string;
  /**
   * String value indicating the type for the dataSource.
   */
  type?: "raster";
  /**
   * The unique string value used to identify the data source's
   * workspace.
   */
  workspaceId?: string;
}

/**
 * Table data source is a table, feature class, or raster that resides
 * in a registered workspace (either a folder or geodatabase). In the
 * case of a geodatabase, if versioned, use version to switch to an
 * alternate geodatabase version. If version is empty or missing, the
 * registered geodatabase version will be used.
 *
 * @export
 * @interface ITableDataSource
 * @see https://developers.arcgis.com/web-map-specification/objects/tableDataSource/
 */
export interface ITableDataSource {
  /**
   * The fully-qualified string value used to specify where the
   * dataSource is derived.
   */
  dataSourceName?: string;
  /**
   * If applicable, the value indicating the version of the
   * geodatabase.
   */
  gdbVersion?: string;
  /**
   * String value indicating the type for the dataSource.
   */
  type?: "table";
  /**
   * The unique string value used to identify the data source's
   * workspace.
   */
  workspaceId?: string;
}
