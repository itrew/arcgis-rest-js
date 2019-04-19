/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 *
 * Information for these types came from
 *  https://developers.arcgis.com/documentation/common-data-types/geometry-objects.htm
 */

import {
  IZDisabled,
  IZEnabled,
  IMEnabled,
  IMDisabled,
  SpatialReference
} from "./core";

/**
 * A base geometry object.
 *
 * @param SR The spatial reference for the geometry.
 */
export interface IGeometryBase<SR extends SpatialReference = SpatialReference> {
  /**
   * The spatial reference of the geometry.
   */
  spatialReference?: SR;
}

/**
 * A geometry where the spatial reference system is required.
 *
 * @param SR The spatial reference for the geometry.
 */
export interface IGeometryWithSpatialReference<
  SR extends SpatialReference = SpatialReference
> extends IGeometryBase<SR> {
  spatialReference: SR;
}

/**
 * A simple point geometry that may or may not contain Z or M values.
 * The spatial reference is defined.
 *
 * @param SR The spatial reference for the point.
 */
export interface IPointBase<SR extends SpatialReference = SpatialReference>
  extends IGeometryWithSpatialReference<SR> {
  /**
   * The x coordinate for the point.
   */
  x: number | "NaN" | null;
  /**
   * The y coordinate for the point.
   */
  y?: number;
}

/**
 * A point with no location in space.
 *
 * @param SR The spatial reference for the point.
 */
export interface IEmptyPoint<SR extends SpatialReference = SpatialReference>
  extends IPointBase<SR> {
  /**
   * The x coordinate of the point without a value or "NaN".
   */
  x: "NaN" | null;
}

/**
 * A simple 2-dimensional point in a defined spatial reference system.
 *
 * @param SR The spatial reference for the point.
 */
export interface IPoint<SR extends SpatialReference = SpatialReference>
  extends IPointBase<SR> {
  x: number;
  y: number;
}

/**
 * A point that contains a vertical coordinate.
 *
 * @param SR The spatial reference for the point.
 */
export interface IPointZ<SR extends SpatialReference = SpatialReference>
  extends IPoint<SR> {
  /**
   * The z coordinate for the point (typically a vertical coordinate).
   */
  z: number;
}

/**
 * A point that contains a M value.
 *
 * @param SR The spatial reference for the point.
 */
export interface IPointM<SR extends SpatialReference = SpatialReference>
  extends IPoint<SR> {
  /**
   * The m value for the point (typically a linear coordinate).
   */
  m: number | null;
}

/**
 * A 3-dimensional point that may contain a M value.
 *
 * @param SR The spatial reference for the point.
 */
export interface IPointZM<SR extends SpatialReference = SpatialReference>
  extends IPointZ<SR>,
    IPointM<SR> {}

/**
 * A generic point geometry type.
 *
 * @param SR The spatial reference for the point.
 *
 * `IPoint` can also be imported from the following packages:
 *
 * ```js
 * import { IPoint } from "@esri/arcgis-rest-routing";
 * import { IPoint } from "@esri/arcgis-rest-geocoding";
 * ```
 */
export type PointAny<SR extends SpatialReference = SpatialReference> =
  | IEmptyPoint<SR>
  | IPoint<SR>
  | IPointZ<SR>
  | IPointM<SR>
  | IPointZM<SR>;

/**
 * `ILocation` can also be imported from the following packages:
 *
 * ```js
 * import { ILocation } from "@esri/arcgis-rest-routing";
 * import { ILocation } from "@esri/arcgis-rest-geocoding";
 * ```
 */
export interface ILocation {
  latitude?: number;
  longitude?: number;
  lat?: number;
  long?: number;
  z?: number;
}

/**
 * A 2-dimensional position. The x coordinate is at index [0] and the y coordinate is at
 * index [1].
 */
export type Position = [number, number];

/**
 * A 3-dimensional position. The x coordinate is at index [0], the y coordinate is at
 * index [1], and the z coordinate is at index [2].
 */
export type PositionZ = [number, number, number];

/**
 * A 2-dimensional position with M values. The x coordinate is at index [0] and the
 * y coordinate is at index [1], and if there is an M value it is at index [2].
 */
export type PositionM = [number, number, number?];

/**
 * A 3-dimensional position with M values. The x coordinate is at index [0] and the
 * y coordinate is at index [1], the z coordinate is at index [2], and if there is
 * an M value it is at index [3].
 */
export type PositionZM = [number, number, number, number?];

/**
 * A generic position type.
 */
export type PositionAny = Position | PositionZ | PositionM | PositionZM;

/**
 * A geometry made up of multiple point locations that may or may not contain Z or M
 * values. The spatial reference is defined.
 *
 * @param SR The spatial reference for the multipoint.
 * @param P The position type.
 */
export interface IMultipointBase<
  SR extends SpatialReference = SpatialReference,
  P extends PositionAny = PositionAny
> extends IGeometryWithSpatialReference<SR> {
  /**
   * An array of positions that make up discrete points.
   */
  points: [] | P[];
}

/**
 * An empty multipoint geometry.
 *
 * @param SR The spatial reference for the multipoint.
 */
export interface IEmptyMultipoint<
  SR extends SpatialReference = SpatialReference
> extends IMultipointBase<SR> {
  /**
   * The points property without any positions defined.
   */
  points: [];
}

/**
 * A geometry comprised of an array of discrete 2-dimensional positions.
 *
 * @param SR The spatial reference for the multipoint.
 */
export interface IMultipoint<SR extends SpatialReference = SpatialReference>
  extends IMultipointBase<SR, Position>,
    IZDisabled,
    IMDisabled {}

/**
 * A geometry comprised of an array of discrete 3-dimensional positions.
 *
 * @param SR The spatial reference for the multipoint.
 */
export interface IMultipointZ<SR extends SpatialReference = SpatialReference>
  extends IMultipointBase<SR, PositionZ>,
    IZEnabled,
    IMDisabled {}

/**
 * A geometry comprised of an array of discrete 2-dimensional positions that include
 * M values.
 *
 * @param SR The spatial reference for the multipoint.
 */
export interface IMultipointM<SR extends SpatialReference = SpatialReference>
  extends IMultipointBase<SR, PositionM>,
    IZDisabled,
    IMEnabled {}

/**
 * A geometry comprised of an array of discrete 3-dimensional positions that include
 * M values.
 *
 * @param SR The spatial reference for the multipoint.
 */
export interface IMultipointZM<SR extends SpatialReference = SpatialReference>
  extends IMultipointBase<SR, PositionZM>,
    IZEnabled,
    IMEnabled {}

/**
 * A generic multipoint geometry type.
 *
 * @param SR The spatial reference for the multipoint.
 */
export type MultipointAny<SR extends SpatialReference = SpatialReference> =
  | IEmptyMultipoint<SR>
  | IMultipoint<SR>
  | IMultipointZ<SR>
  | IMultipointM<SR>
  | IMultipointZM<SR>;

/**
 * The center coordinates of the arc
 */
export type ArcCenter = Position;

/**
 * Whether or not the segment is the minor (1) or major arc (0).
 */
export type ArcMinor = 1 | 0;

/**
 * Whether or not the arc is oriented clockwise (1) or counter-clockwise (0).
 */
export type ArcClockwise = 1 | 0;

/**
 * The angle of rotation of major axis in radians with a positive value being
 * counter-clockwise.
 */
export type ArcRotation = number;

/**
 * The length of the semi-major axis.
 */
export type ArcAxis = number;

/**
 * The ratio of the minor axis to the major axis.
 */
export type ArcRatio = number;

/**
 * An elliptic arc segment.
 *
 * @param P The type of the position for the arc endpoint.
 */
export interface IArc<P extends PositionAny = PositionAny> {
  a: [P, ArcCenter, ArcMinor, ArcClockwise, ArcRotation, ArcAxis, ArcRatio];
}

/**
 * A control point for a Bézier curve.
 */
export type BezierCurveControlPoint = Position;

/**
 * A Bézier curve segment.
 *
 * @param P The type of the position for the arc endpoint.
 */
export interface IBezierCurve<P extends PositionAny = PositionAny> {
  b: [P, BezierCurveControlPoint, BezierCurveControlPoint];
}

/**
 * The inner point of the arc.
 */
export type CircularArcInteriorPoint = Position;

/**
 * A circular arc segment.
 *
 * @param P The type of the position for the arc endpoint.
 */
export interface ICircularArc<P extends PositionAny = PositionAny> {
  c: [P, CircularArcInteriorPoint];
}

/**
 * The old version of a 2-dimensional elliptic arc (prior to 10.3) that excludes rotation,
 * axis, and ratio.
 *
 * @param P The type of the position for the arc endpoint.
 */
export interface IOldCircularArc<P extends PositionAny = PositionAny> {
  a: [P, ArcCenter, ArcMinor, ArcClockwise];
}

/**
 * A generic 2-dimensional curve.
 */
export type Curve =
  | IArc<Position>
  | IBezierCurve<Position>
  | ICircularArc<Position>
  | IOldCircularArc<Position>;

/**
 * A generic 3-dimensional curve.
 */
export type CurveZ =
  | IArc<PositionZ>
  | IBezierCurve<PositionZ>
  | ICircularArc<PositionZ>
  | IOldCircularArc<PositionZ>;

/**
 * A generic 2-dimensional curve with M value.
 */
export type CurveM =
  | IArc<PositionM>
  | IBezierCurve<PositionM>
  | ICircularArc<PositionM>
  | IOldCircularArc<PositionM>;

/**
 * A generic 3-dimensional curve with M value.
 */
export type CurveZM =
  | IArc<PositionZM>
  | IBezierCurve<PositionZM>
  | ICircularArc<PositionZM>
  | IOldCircularArc<PositionZM>;

/**
 * A generic curve type.
 */
export type CurveAny = IArc | IBezierCurve | ICircularArc | IOldCircularArc;

/**
 * A linear geometry made up of multiple ordered vertices that may or may not contain Z or M
 * values. The spatial reference is defined.
 *
 * @param SR The spatial reference for the polyline.
 * @param P The type of the position allowed in the paths array.
 */
export interface IPolylineBase<
  SR extends SpatialReference = SpatialReference,
  P extends PositionAny = PositionAny
> extends IGeometryWithSpatialReference<SR> {
  /**
   * An array of paths (array of positions) that make up the polyline.
   */
  paths: [] | P[];
}

/**
 * An empty polyline geometry.
 *
 * @param SR The spatial reference for the polyline.
 */
export interface IEmptyPolyline<SR extends SpatialReference = SpatialReference>
  extends IPolylineBase<SR> {
  /**
   * The paths property without any paths defined.
   */
  paths: [];
}

/**
 * A geometry comprised of an array of discrete 2-dimensional paths.
 *
 * @param SR The spatial reference for the polyline.
 */
export interface IPolyline<SR extends SpatialReference = SpatialReference>
  extends IPolylineBase<SR, Position>,
    IZDisabled,
    IMDisabled {}

/**
 * A geometry comprised of an array of discrete 3-dimensional paths.
 *
 * @param SR The spatial reference for the polyline.
 */
export interface IPolylineZ<SR extends SpatialReference = SpatialReference>
  extends IPolylineBase<SR, PositionZ>,
    IZEnabled,
    IMDisabled {}

/**
 * A geometry comprised of an array of discrete 2-dimensional paths with M values.
 *
 * @param SR The spatial reference for the polyline.
 */
export interface IPolylineM<SR extends SpatialReference = SpatialReference>
  extends IPolylineBase<SR, PositionM>,
    IZDisabled,
    IMEnabled {}

/**
 * A geometry comprised of an array of discrete 3-dimensional paths with M values.
 *
 * @param SR The spatial reference for the polyline.
 */
export interface IPolylineZM<SR extends SpatialReference = SpatialReference>
  extends IPolylineBase<SR, PositionZM>,
    IZEnabled,
    IMEnabled {}

/**
 * A linear geometry that contains curved segments.
 *
 * @param SR The spatial reference for the polyline.
 * @param T The type of the position or curve allowed in the curved paths array.
 */
export interface ICurvePolylineBase<
  SR extends SpatialReference = SpatialReference,
  T extends PositionAny | CurveAny = PositionAny | CurveAny
> extends IGeometryBase<SR> {
  /**
   * An array of paths (array of positions and curves) that make up the polyline.
   */
  curvePaths: T[];
}

/**
 * A geometry comprised of an array of discrete 2-dimensional paths that may have curves.
 *
 * @param SR The spatial reference for the polyline.
 */
export interface ICurvePolyline<SR extends SpatialReference = SpatialReference>
  extends ICurvePolylineBase<SR, Position | Curve>,
    IZDisabled,
    IMDisabled {}

/**
 * A geometry comprised of an array of discrete 3-dimensional paths that may have curves.
 *
 * @param SR The spatial reference for the polyline.
 */
export interface ICurvePolylineZ<
  SR extends SpatialReference = SpatialReference
> extends ICurvePolylineBase<SR, PositionZ | CurveZ>, IZEnabled, IMDisabled {}

/**
 * A geometry comprised of an array of discrete 2-dimensional paths that may have curves.
 * Vertices include M values.
 *
 * @param SR The spatial reference for the polyline.
 * Vertices include M values.
 */
export interface ICurvePolylineM<
  SR extends SpatialReference = SpatialReference
> extends ICurvePolylineBase<SR, PositionM | CurveM>, IZDisabled, IMEnabled {}

/**
 * A geometry comprised of an array of discrete 3-dimensional paths that may have curves.
 * Vertices include M values.
 *
 * @param SR The spatial reference for the polyline.
 */
export interface ICurvePolylineZM<
  SR extends SpatialReference = SpatialReference
> extends ICurvePolylineBase<SR, PositionZM | CurveZM>, IZEnabled, IMEnabled {}

/**
 * A generic polyline geometry type.
 *
 * @param SR The spatial reference for the polyline.
 */
export type PolylineAny<SR extends SpatialReference = SpatialReference> =
  | IEmptyPolyline<SR>
  | IPolyline<SR>
  | IPolylineZ<SR>
  | IPolylineM<SR>
  | IPolylineZM<SR>
  | ICurvePolyline<SR>
  | ICurvePolylineZ<SR>
  | ICurvePolylineM<SR>
  | ICurvePolylineZM<SR>;

/**
 * A polygonal geometry made up of multiple rings of ordered vertices that may or may not
 * contain Z or M values. The spatial reference is defined.
 *
 * @param SR The spatial reference for the polygon.
 * @param P The type of the position allowed in the ring array.
 */
export interface IPolygonBase<
  SR extends SpatialReference = SpatialReference,
  P extends PositionAny = PositionAny
> extends IGeometryWithSpatialReference<SR> {
  /**
   * An array of rings (self closing array of positions) that make up a polygon. Exterior
   * rings should be oriented clockwise while holes should be oriented counter-clockwise.
   */
  rings: [] | P[];
}

/**
 * An empty polygon geometry.
 *
 * @param SR The spatial reference for the polygon.
 */
export interface IEmptyPolygon<SR extends SpatialReference = SpatialReference>
  extends IPolygonBase<SR> {
  /**
   * The rings property without any rings defined.
   */
  rings: [];
}

/**
 * A geometry comprised of an array of discrete 2-dimensional paths that self-close.
 *
 * @param SR The spatial reference for the polygon.
 */
export interface IPolygon<SR extends SpatialReference = SpatialReference>
  extends IPolygonBase<SR, Position>,
    IZDisabled,
    IMDisabled {}

/**
 * A geometry comprised of an array of discrete 3-dimensional paths that self-close.
 *
 * @param SR The spatial reference for the polygon.
 */
export interface IPolygonZ<SR extends SpatialReference = SpatialReference>
  extends IPolygonBase<SR, PositionZ>,
    IZEnabled,
    IMDisabled {}

/**
 * A geometry comprised of an array of discrete 2-dimensional paths that self-close.
 * Vertices include M values.
 *
 * @param SR The spatial reference for the polygon.
 * Vertices include M values.
 */
export interface IPolygonM<SR extends SpatialReference = SpatialReference>
  extends IPolygonBase<SR, PositionM>,
    IZDisabled,
    IMEnabled {}

/**
 * A geometry comprised of an array of discrete 3-dimensional paths that self-close.
 *
 * @param SR The spatial reference for the polygon.
 * Vertices include M values.
 */
export interface IPolygonZM<SR extends SpatialReference = SpatialReference>
  extends IPolygonBase<SR, PositionZM>,
    IZEnabled,
    IMEnabled {}

/**
 * A polygonal geometry made up of multiple rings of ordered vertices that may or may not
 * contain Z or M values and may have curves.
 *
 * @param SR The spatial reference for the polygon.
 * @param T The type of the position or curve allowed in the curved rings array.
 */
export interface ICurvePolygonBase<
  SR extends SpatialReference = SpatialReference,
  T extends PositionAny | CurveAny = PositionAny | CurveAny
> extends IGeometryBase<SR> {
  curveRings: T[];
}

/**
 * A geometry comprised of an array of discrete 2-dimensional rings that self-close
 * and may have curves.
 *
 * @param SR The spatial reference for the polygon.
 */
export interface ICurvePolygon<SR extends SpatialReference = SpatialReference>
  extends ICurvePolygonBase<SR, Position | Curve>,
    IZDisabled,
    IMDisabled {}

/**
 * A geometry comprised of an array of discrete 3-dimensional rings that self-close
 * and may have curves.
 *
 * @param SR The spatial reference for the polygon.
 */
export interface ICurvePolygonZ<SR extends SpatialReference = SpatialReference>
  extends ICurvePolygonBase<SR, PositionZ | CurveZ>,
    IZEnabled,
    IMDisabled {}

/**
 * A geometry comprised of an array of discrete 2-dimensional rings that self-close
 * and may have curves. Vertices include M values.
 *
 * @param SR The spatial reference for the polygon.
 */
export interface ICurvePolygonM<SR extends SpatialReference = SpatialReference>
  extends ICurvePolygonBase<SR, PositionM | CurveM>,
    IZDisabled,
    IMEnabled {}

/**
 * A geometry comprised of an array of discrete 3-dimensional rings that self-close
 * and may have curves. Vertices include M values.
 *
 * @param SR The spatial reference for the polygon.
 */
export interface ICurvePolygonZM<
  SR extends SpatialReference = SpatialReference
> extends ICurvePolygonBase<SR, PositionZM | CurveZM>, IZEnabled, IMEnabled {}

/**
 * A generic polygon geometry.
 *
 * @param SR The spatial reference for the polygon.
 */
export type PolygonAny<SR extends SpatialReference = SpatialReference> =
  | IEmptyPolygon<SR>
  | IPolygon<SR>
  | IPolygonZ<SR>
  | IPolygonM<SR>
  | IPolygonZM<SR>
  | ICurvePolygon<SR>
  | ICurvePolygonZ<SR>
  | ICurvePolygonM<SR>
  | ICurvePolygonZM<SR>;

/**
 * A geometry that represents a bounding box.
 *
 * @param SR The spatial reference for the envelope.
 */
export interface IEnvelopeBase<SR extends SpatialReference = SpatialReference>
  extends IGeometryBase<SR> {
  /**
   * The lower bound of the x coordinate range.
   */
  xmin: number | "NaN" | null;
}

/**
 * A geometry that represents a bounding box with no location in space.
 *
 * @param SR The spatial reference for the envelope.
 */
export interface IEmptyEnvelope<SR extends SpatialReference = SpatialReference>
  extends IEnvelopeBase<SR> {
  /**
   * The lower bound of the x coordinate range set to "NaN" or null.
   */
  xmin: "NaN" | null;
}

/**
 * A rectangle defined by a range of coordinates.
 *
 * @param SR The spatial reference for the envelope.
 */
export interface IEnvelope<SR extends SpatialReference = SpatialReference>
  extends IEnvelopeBase<SR> {
  spatialReference: SR;
  xmin: number;
  /**
   * The lower bound of the y coordinate range.
   */
  ymin: number;
  /**
   * The upper bound of the x coordinate range.
   */
  xmax: number;
  /**
   * The upper bound of the y coordinate range.
   */
  ymax: number;
  /**
   * The lower bound of the z coordinate range.
   */
  zmin?: number;
  /**
   * The upper bound of the z coordinate range.
   */
  zmax?: number;
  /**
   * The lower bound of the M value range.
   */
  mmin?: number;
  /**
   * The upper bound of the M value range.
   */
  mmax?: number;
}

/**
 * A generic envelope geometry.
 *
 * @param SR The spatial reference for the envelope.
 */
export type EnvelopeAny<SR extends SpatialReference = SpatialReference> =
  | IEmptyEnvelope<SR>
  | IEnvelope<SR>;

/**
 * A generic geometry type.
 *
 * @param SR The spatial reference for the geometry.
 *
 * `GeometryAny` can also be imported from the following packages:
 *
 * ```js
 * import { GeometryAny } from "@esri/arcgis-rest-feature-layer";
 * ```
 */
export type GeometryAny<SR extends SpatialReference = SpatialReference> =
  | PointAny<SR>
  | MultipointAny<SR>
  | PolylineAny<SR>
  | PolygonAny<SR>
  | EnvelopeAny<SR>;

/**
 * Geometry types without z coordinates or M values.
 *
 * @param SR The spatial reference for the geometry.
 */
export type Geometry<SR extends SpatialReference = SpatialReference> =
  | IPoint<SR>
  | IEmptyPoint<SR>
  | IMultipoint<SR>
  | IEmptyMultipoint<SR>
  | IPolyline<SR>
  | IEmptyPolyline<SR>
  | ICurvePolyline<SR>
  | IPolygon<SR>
  | IEmptyPolygon<SR>
  | ICurvePolygon<SR>;

/**
 * Geometry types that include z coordinates (typically vertical).
 *
 * @param SR The spatial reference for the geometry.
 */
export type GeometryZ<SR extends SpatialReference = SpatialReference> =
  | IPointZ<SR>
  | IMultipointZ<SR>
  | IPolylineZ<SR>
  | ICurvePolylineZ<SR>
  | IPolygonZ<SR>
  | ICurvePolygonZ<SR>;

/**
 * Geometry types that include M values (typically linear).
 *
 * @param SR The spatial reference for the geometry.
 */
export type GeometryM<SR extends SpatialReference = SpatialReference> =
  | IPointM<SR>
  | IMultipointM<SR>
  | IPolylineM<SR>
  | ICurvePolylineM<SR>
  | IPolygonM<SR>
  | ICurvePolygonM<SR>;

/**
 * Geometry types that include both z coordinates (vertical) and M values (linear).
 *
 * @param SR The spatial reference for the geometry.
 */
export type GeometryZM<SR extends SpatialReference = SpatialReference> =
  | IPointZM<SR>
  | IMultipointZM<SR>
  | IPolylineZM<SR>
  | ICurvePolylineZM<SR>
  | IPolygonZM<SR>
  | ICurvePolygonZM<SR>;
