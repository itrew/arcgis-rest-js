/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

/**
 * A four-element array that contains in order the red, green blue and
 * alpha values.
 */
export type Color = [
  /** Red */
  number,
  /** Green */
  number,
  /** Blue */
  number,
  /** Alpha */
  number
];

/**
 * The specific type of symbol.
 */
export type SymbolType =
  /** Simple Marker Symbol */
  | "esriSMS"
  /** Simple Line Symbol */
  | "esriSLS"
  /** Simple Fill Symbol */
  | "esriSFS"
  /** Picture Marker Symbol */
  | "esriPMS"
  /** Picture Fill Symbol */
  | "esriPFS"
  /** Text Symbol */
  | "esriTS";

/**
 * The allowed styles for simple marker symbols.
 */
export type SimpleMarkerSymbolStyle =
  /** Circle */
  | "esriSMSCircle"
  /** Cross */
  | "esriSMSCross"
  /** Diamond */
  | "esriSMSDiamond"
  /** Square */
  | "esriSMSSquare"
  /** X */
  | "esriSMSX"
  /** Triangle */
  | "esriSMSTriangle";

/**
 * A symbol using a predefined marker path.
 */
export interface ISimpleMarkerSymbol {
  /** The type of symbol. */
  type: "esriSMS";
  /** The symbols predefined style. */
  style: SimpleMarkerSymbolStyle;
  /** The color of the symbol. */
  color: Color;
  /** The size of the marker in pixels. */
  size: number;
  /** The angle of rotation (0-360). */
  angle: number;
  /** The x offset of the marker's centroid. */
  xoffset: number;
  /** The y offset of the marker's centroid. */
  yoffset: number;
  /** The outline of the marker (solid). */
  outline: {
    /** The outline's color. */
    color: Color;
    /** The stroke width of the outline in pixels. */
    width: number;
  };
}

/**
 * The allowed styles for simple line symbols.
 */
export type SimpleLineSymbolStyle =
  /** Dashed - - - - */
  | "esriSLSDash"
  /** Dashed Dot - ⋅ - ⋅ */
  | "esriSLSDashDot"
  /** Dash Dot Dot - ⋅ ⋅ - */
  | "esriSLSDashDotDot"
  /** Dot ⋅ ⋅ ⋅ ⋅ */
  | "esriSLSDot"
  /** Null */
  | "esriSLSNull"
  /** Solid */
  | "esriSLSSolid";

/**
 * A symbol that renders a path's stroke.
 */
export interface ISimpleLineSymbol {
  /** The type of symbol. */
  type: "esriSLS";
  /** The symbol's predefined style. */
  style: SimpleLineSymbolStyle;
  /** The color of the line. */
  color: Color;
  /** The width of the stroke in pixels. */
  width: number;
}

/**
 * The allowed styles for simple fill symbols.
 */
export type SimpleFillSymbolStyle =
  /** Backwards Diagonal Hatch \\\ */
  | "esriSFSBackwardDiagonal"
  /** Cross-hatching */
  | "esriSFSCross"
  /** Diagonal cross-hatching */
  | "esriSFSDiagonalCross"
  /** Forward Diagonal Hatch /// */
  | "esriSFSForwardDiagonal"
  /** Horizontal Hatch */
  | "esriSFSHorizontal"
  /** No Fill */
  | "esriSFSNull"
  /** Solid Fill */
  | "esriSFSSolid"
  /** Vertical Hatch */
  | "esriSFSVertical";

/**
 * A symbol that uses a path to create a closed polygon.
 */
export interface ISimpleFillSymbol {
  /** The type of symbol. */
  type: "esriSFS";
  /** The symbol's predefined symbol. */
  style: SimpleFillSymbolStyle;
  /** The color of the fill. */
  color: Color;
  /** The outline of the fill symbol. */
  outline: ISimpleLineSymbol;
}

interface IPictureSymbolBase {
  /** The type of symbol. */
  type: "esriPMS" | "esriPFS";
  /**
   * The url of the image. Relative url for static layers and full
   *  url for dynamic layers.
   */
  url: string;
  /** A base64 encoded image data string. */
  imageData: string;
  /** The image content type. */
  contentType: string;
  /** The width of the image in pixels. */
  width: number;
  /** The height of the image in pixels. */
  height: number;
  /** The angle of rotation (0-360). */
  angle: number;
  /** The x offset of the picture. */
  xoffset: number;
  /** The y offset of the picture. */
  yoffset: number;
  /** The outline of the marker (solid). */
}

/**
 * A symbol that uses a picture to symbolize a point.
 */
export interface IPictureMarkerSymbol extends IPictureSymbolBase {
  type: "esriPMS";
}

/**
 * A symbol that uses a picture to fill in a polygon.
 */
export interface IPictureFillSymbol extends IPictureSymbolBase {
  type: "esriPFS";
  /** The outline of the fill symbol. */
  outline: ISimpleLineSymbol;
  /**  */
  xscale: number;
  /** */
  yscale: number;
}

/**
 * A font specification.
 */
export interface IFont {
  /** The font family. */
  family: string;
  /** The font size. */
  size: number;
  /** The font style. */
  style: "italic" | "normal" | "oblique";
  /** The font weight. */
  weight?: "bold" | "bolder" | "lighter" | "normal";
  /** The text decoration, */
  decoration?: "line-through" | "underline" | "none";
}

/**
 * A symbol used to add text to a feature (labeling).
 */
export interface ITextSymbol {
  /** The symbol type. */
  type: "esriTS";
  /** The text's color. */
  color: Color;
  /** The text's background color. */
  backgroundColor: Color;
  /** The texts border line size in points. */
  borderLineSize: number; // <size>;
  /** The text's border line color. */
  borderLineColor: Color;
  /** The text's halo size in points. */
  haloSize: number;
  /** The text's halo color. */
  haloColor: Color;
  /** The text's vertical alignment. */
  verticalAlignment: "baseline" | "top" | "middle" | "bottom";
  /** The text's horizontal alignment. */
  horizontalAlignment?: "left" | "right" | "center" | "justify";
  /**
   * Weather or not the text is rendered right to left or
   * left to right. Hebrew or Arabic fonts only.
   */
  rightToLeft: boolean;
  /** The angle of rotation (0-360). */
  angle: number;
  /** The x offset of the text */
  xoffset: number;
  /** The y offset of the text */
  yoffset: number;
  /** Does the text have kerning. */
  kerning: boolean;
  /** The text's font. */
  font: IFont;
  /**
   * Client side graphic text. Only applicable when specified
   * as a client-side graphic.
   */
  text?: string;
}
