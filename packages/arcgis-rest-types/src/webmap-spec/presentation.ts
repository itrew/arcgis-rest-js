/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import { IBasemap } from "./basemap";

import { Color, IExtent, IPoint } from "../common-data-types/index";

/**
 * A presentation consists of multiple slides. Each slide has a different title,
 * extent, basemap, layers, etc.
 *
 * @export
 * @interface IPresentation
 * @see https://developers.arcgis.com/web-map-specification/objects/presentation/
 */
export interface IPresentation {
  /** Indicates whether to display the time slider (if accessible). */
  displayTimeSlider: boolean;
  /** Indicates whether to display a legend on all slides. */
  showLegend: boolean;
  /** Number of seconds to show slide before proceeding to the next slide. */
  slideAdvancementInterval: number;
  /** Array of slide objects. */
  slides: ISlide[];
  /** Indicates whether to use the time extent (if applicable) of a slide. */
  useTimeExtentOfSlide: boolean;
}

/**
 * A slide object used within a presentation.
 *
 * @export
 * @interface ISlide
 * @see https://developers.arcgis.com/web-map-specification/objects/slide/
 */
export interface ISlide {
  /** Basemaps give the web map a geographic context. */
  baseMap: IBasemap;
  /**
   * The standard Esri extent object with spatialReference,
   * xmax, xmin, ymax and ymin. Needs to have extent or mapLocation.
   */
  extent?: IExtent;
  /** Indicates whether the slide should be hidden within the presentation. */
  hidden: boolean;
  /** An object with a centerPoint object and sometimes a resolution. */
  mapLocation?: IMapLocation;
  /**
   * An array of two numbers. The first one indicates start time and the second
   * one indicates end time.
   */
  timeExtent?: [number, number];
  /** Title including text and formatting for each slide. */
  title: ITitle;
  /** An array of objects used to indicate layer visibility. */
  visibleLayers: IVisibleLayer[];
  /**
   * A presentation slide's visiblePopup which contains anchorPoint, featureId,
   * layerId, and subLayerId
   */
  visiblePopup?: IVisiblePopup;
}

/**
 * Contains location information within a presentation slide.
 *
 * @export
 * @interface IMapLocation
 * @see https://developers.arcgis.com/web-map-specification/objects/mapLocation/
 */
export interface IMapLocation {
  /** The center of the map specified using X/Y coordinates. */
  centerPoint: IPoint;
}

/**
 * Text and formatting for the title of the individual presentation slide.
 *
 * @export
 * @interface ITitle
 * @see https://developers.arcgis.com/web-map-specification/objects/title/
 */
export interface ITitle {
  /** The color of the title text box, for example [0,0,0,255]. */
  backgroundColor: Color;
  /**
   * The color of the border surrounding the title text box, for example
   * [0,0,0,255].
   */
  borderColor: Color;
  /** The sizing of the border. */
  borderSize: number;
  /** The font style picked for the title. e.g. Tahoma */
  font: string;
  /** The size of the font for the text in the title. */
  fontSize: number;
  /** Color of the text. */
  foregroundColor: Color;
  /** The alignment of the text box. */
  horizontalAlignment: number;
  /** The opacity of background and border. 0-1 */
  opacity: number;
  /** Text to display as titles for slide. */
  text: string;
  /** A number between 1 and 7. */
  titleFontStyle: number;
}

/**
 * An array of numbers indicating layer visibility.
 *
 * @export
 * @interface IVisibleLayer
 * @see https://developers.arcgis.com/web-map-specification/objects/visibleLayer/
 */
export interface IVisibleLayer {
  /** An array of arrays containing object IDs. */
  featureVisibility?: number[][];
  /** The id of the layer as listed on the operational layer. */
  id?: string;
  /** An array of integers. */
  subLayerIds?: number[];
}

/**
 * A presentation slide's visiblePopup which contains anchorPoint, featureId,
 * layerId, and subLayerId.
 *
 * @export
 * @interface IVisiblePopup
 * @see https://developers.arcgis.com/web-map-specification/objects/visiblePopup/
 */
export interface IVisiblePopup {
  /** Object with spatialReference, x, and y. */
  anchorPoint: IPoint;
  /** An integer specifying the feature's id. */
  featureId: number;
  /** A string specifying the layer id. */
  layerId: string;
  /** An integer specifying the sub-layer id. */
  subLayerId?: number;
}
