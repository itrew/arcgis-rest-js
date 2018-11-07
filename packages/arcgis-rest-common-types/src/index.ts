/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

import { IGroup } from "./group";

export * from "./common";
export * from "./feature";
export * from "./geometry";
export * from "./group";
export * from "./item";
export * from "./webmap";

/**
 *
 */
export type Color = [number, number, number, number];

/**
 *
 */
export interface IFont {
  family?: string; // "<fontFamily>";
  size?: number; // <fontSize>;
  style?: "italic" | "normal" | "oblique";
  weight?: "bold" | "bolder" | "lighter" | "normal";
  decoration?: "line-through" | "underline" | "none";
}

/**
 *
 */
export interface ISymbol {
  type: SymbolType;
  style?: string;
}

/**
 *
 */
export interface IMarkerSymbol extends ISymbol {
  angle?: number;
  xoffset?: number;
  yoffset?: number;
}

/**
 * Params for paging operations
 */
export interface IPagingParams {
  start?: number;
  num?: number;
}

/**
 *
 */
export interface IPictureSourced {
  url?: string; // Relative URL for static layers and full URL for dynamic layers. Access relative URL using http://<mapservice-url>/<layerId1>/images/<imageUrl11>
  imageData?: string; // "<base64EncodedImageData>";
  contentType?: string;
  width?: number;
  height?: number;
  angle?: number;
  xoffset?: number;
  yoffset?: number;
}

/**
 *
 */
export interface IPictureFillSymbol extends ISymbol, IPictureSourced {
  type: "esriPFS";
  outline?: ISimpleLineSymbol; // if outline has been specified
  xscale?: number;
  yscale?: number;
}

/**
 *
 */
export interface IPictureMarkerSymbol extends IMarkerSymbol, IPictureSourced {
  type: "esriPMS";
}

/**
 *
 */
export type SimpleMarkerSymbolStyle =
  | "esriSMSCircle"
  | "esriSMSCross"
  | "esriSMSDiamond"
  | "esriSMSSquare"
  | "esriSMSX"
  | "esriSMSTriangle";

/**
 *
 */
export type SimpleLineSymbolStyle =
  | "esriSLSDash"
  | "esriSLSDashDot"
  | "esriSLSDashDotDot"
  | "esriSLSDot"
  | "esriSLSNull"
  | "esriSLSSolid";

/**
 *
 */
export type SimpleFillSymbolStyle =
  | "esriSFSBackwardDiagonal"
  | "esriSFSCross"
  | "esriSFSDiagonalCross"
  | "esriSFSForwardDiagonal"
  | "esriSFSHorizontal"
  | "esriSFSNull"
  | "esriSFSSolid"
  | "esriSFSVertical";

/**
 *
 */
export type SymbolType =
  | "esriSLS"
  | "esriSMS"
  | "esriSFS"
  | "esriPMS"
  | "esriPFS"
  | "esriTS";

/**
 *
 */
export interface ISimpleFillSymbol extends ISymbol {
  type: "esriSFS";
  style?: SimpleFillSymbolStyle;
  color?: Color;
  outline?: ISimpleLineSymbol; // if outline has been specified
}

/**
 *
 */
export interface ISimpleLineSymbol extends ISymbol {
  type: "esriSLS";
  style?: SimpleLineSymbolStyle;
  color?: Color;
  width?: number;
}

/**
 *
 */
export interface ISimpleMarkerSymbol extends IMarkerSymbol {
  type: "esriSMS";
  style?: SimpleMarkerSymbolStyle;
  color?: Color;
  size?: number;
  outline?: ISimpleLineSymbol;
}

/**
 *
 */
export interface ITextSymbol extends IMarkerSymbol {
  type: "esriTS";
  color?: Color;
  backgroundColor?: Color;
  borderLineSize?: number; // <size>;
  borderLineColor?: Color;
  haloSize?: number; // <size>;
  haloColor?: Color;
  verticalAlignment?: "baseline" | "top" | "middle" | "bottom";
  horizontalAlignment?: "left" | "right" | "center" | "justify";
  rightToLeft?: boolean;
  kerning?: boolean;
  font?: IFont;
  text?: string; // only applicable when specified as a client-side graphic.
}

/**
 * An ArcGIS Online or Enterprise user
 */
export interface IUser {
  username?: string;
  fullName?: string;
  availableCredits?: number;
  assignedCredits?: number;
  firstName?: string;
  lastName?: string;
  preferredView?: any;
  description?: string;
  email?: string;
  idpUsername?: string;
  favGroupId?: string;
  lastLogin?: number;
  mfaEnabled?: boolean;
  access?: string;
  storageUsage?: number;
  storageQuota?: number;
  orgId?: string;
  role?: "org_admin" | "org_publisher" | "org_user";
  privileges?: string[];
  roleId?: string;
  level?: string;
  disabled?: boolean;
  units?: string;
  tags?: string[];
  culture?: string;
  region?: string;
  thumbnail?: string;
  created?: number;
  modified?: number;
  groups?: IGroup[];
  provider?: "arcgis" | "enterprise" | "facebook" | "google";
}

export type esriUnits =
  | "esriSRUnit_Meter"
  | "esriSRUnit_StatuteMile"
  | "esriSRUnit_Foot"
  | "esriSRUnit_Kilometer"
  | "esriSRUnit_NauticalMile"
  | "esriSRUnit_USNauticalMile";
