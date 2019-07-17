/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { IDefinitionEditor, ILayerDefinition, IPopupInfo } from "./core/index";

/**
 * Root element in the web map specifying an array of table objects.
 *
 * `ITable` can also be imported from the following packages:
 *
 * ```js
 * import { ITable } from "@esri-arcgis-rest-service-admin"
 * ```
 *
 * @export
 * @interface ITable
 * @see https://developers.arcgis.com/web-map-specification/objects/table/
 */
export interface ITable {
  /**
   * Table name
   * Not in official docs.
   */
  name?: string;
  /**
   * A comma-separated string listing which editing operations are allowed
   * on an editable feature service. Available operations include: 'Create',
   * 'Delete', 'Query', 'Update', and 'Editing'.
   */
  capabilities?: string;
  /**
   * Object indicating the definitionEditor used as a layer's interactive
   * filter.
   */
  definitionEditor?: IDefinitionEditor;
  /**
   * Unique string identifier for the table.
   */
  id?: string;
  /**
   * Unique string value indicating an item registered in ArcGIS Online or
   * your organization's portal.
   */
  itemId?: string;
  /**
   * A layerDefinition object defining a definition expression for the
   * table.
   */
  layerDefinition?: ILayerDefinition;
  /**
   * An object defining the content of popup windows when you query a
   * record and the sort option for child related records.
   */
  popupInfo?: IPopupInfo;
  /**
   * String value for the title of the table.
   */
  title?: string;
  /**
   * String value indicating the URL reference of the hosted table.
   */
  url?: string;
}
