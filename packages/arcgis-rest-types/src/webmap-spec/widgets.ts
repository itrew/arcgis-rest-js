/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

/**
 * The widgets object contains widgets that should be exposed to the user.
 *
 * @export
 * @interface IWidgets
 * @see https://developers.arcgis.com/web-map-specification/objects/widgets/
 */
export interface IWidgets {
  /**
   * Active range.
   */
  range?: IRange;
  /**
   * Time animation is controlled by a configurable time slider. The time
   * slider widget will act upon all the time aware layers in the map.
   */
  timeSlider?: ITimeSlider;
}

/**
 * Range object.
 *
 * @export
 * @interface IRange
 * @see https://developers.arcgis.com/web-map-specification/objects/range/
 */
export interface IRange {
  /**
   * Indicates the mode in which the active range should be presented to
   * the user.
   */
  interactionMode?: "slider" | "picker";
  /**
   * This is used to generate the activeRangeValues if activeRangeValues
   * are not specified.
   */
  numberOfStops?: number;
  /**
   * Interval in which stops should be generated.
   */
  stopInterval?: number;
}

/**
 * Time animation is controlled by a configurable time slider. Those
 * configurations are saved to the web map as a timeSlider widget.
 *
 * @interface ITimeSlider
 * @see https://developers.arcgis.com/web-map-specification/objects/timeSlider/
 */
export interface ITimeSlider {
  /**
   * Configurable properties used within the TimeSlider widget.
   */
  properties: ITimeSliderProperties;
}

/**
 * Configurable properties used within the TimeSlider widget.
 *
 * @interface ITimeSliderProperties
 * @see https://developers.arcgis.com/web-map-specification/objects/timeSliderProperties/
 */
export interface ITimeSliderProperties {
  /**
   * An optional array of numbers indicating the slider's start to end
   * time extent.
   */
  currentTimeExtent?: number[];
  /**
   * The optional end of the time slider. If not specified, the slider
   * defaults to the full time extent of all time-enabled layers.
   */
  endTime?: number;
  /**
   * Number of stops within the timeSlider widget.
   */
  numberOfStops?: number;
  /**
   * The optional start of the time slider. If not specified, the slider
   * defaults to the full time extent of all time-enabled layers.
   */
  startTime?: number;
  /**
   * The default value for the thumbCount is 1.
   */
  thumbCount?: number;
  /**
   * Rate at which the time animation plays. Units are in milliseconds.
   * Default is 1000.
   */
  thumbMovingRate?: number;
  /**
   * The interval which has been defined for the time slider.
   */
  timeStopInterval?: ITimeStopInterval;
}

/**
 * The interval set for the time slider widget.
 *
 * @export
 * @interface ITimeStopInterval
 */
export interface ITimeStopInterval {
  /**
   * The length of the time interval.
   */
  interval?: number;
  /**
   * The units used to define the interval.
   */
  units?:
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
}
