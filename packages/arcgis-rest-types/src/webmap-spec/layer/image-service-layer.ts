/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

import {
  IDefinitionEditorMixin,
  IDisablePopupMixin,
  IIsReferenceMixin,
  IItemIdMixin,
  ILayerBase,
  ILayerDefinitionMixin,
  IPopupInfoMixin,
  IRefreshIntervalMixin,
  IShowLegendMixin,
  ITimeAnimationMixin,
  IUrlMixin
} from "./util";
import { PointAny } from "../../common-data-types/index";

/**
 * Base configuration for ImageServiceLayer and ImageServiceVectorLayer.
 *
 * @interface IImageServiceLayerBase
 * @extends {ILayerBase}
 * @extends {IShowLegendMixin}
 * @extends {ITimeAnimationMixin}
 * @extends {IIsReferenceMixin}
 * @extends {IItemIdMixin}
 */
interface IImageServiceLayerBase
  extends ILayerBase,
    IDefinitionEditorMixin,
    IDisablePopupMixin,
    IIsReferenceMixin,
    IItemIdMixin,
    ILayerDefinitionMixin,
    IPopupInfoMixin,
    IShowLegendMixin,
    ITimeAnimationMixin,
    IUrlMixin {
  /**
   * String indicating the layer type.
   */
  layerType: "ArcGISImageServiceLayer" | "ArcGISImageServiceVectorLayer";
  /**
   * Specifies the mosaic rule when defining how individual images
   * should be mosaicked.
   */
  mosaicRule?: IMosaicRule;
}

/**
 * The image service uses a mosaic rule to mosaic multiple rasters on
 * the fly. The mosaic rule parameter is used by many image service
 * operations, for example, export image and identify operations.
 *
 * @export
 * @interface IMosaicRule
 * @see https://developers.arcgis.com/web-map-specification/objects/mosaicRule/
 */
export interface IMosaicRule {
  /**
   * Indicate whether to use ascending or descending order.
   */
  ascending?: boolean;
  /**
   * A list that defines a subset of rasters used in the mosaic,
   * be aware that the rasters may not be visible at all scales.
   */
  fids?: number[];
  /**
   * The rendering rule applies on items before mosaicking.
   */
  itemRenderingRule?: string;
  /**
   * Lock a few rasters in the image service. Used together with
   * esriMosaicLockRaster.
   */
  lockRasterIds?: number[];
  /**
   * A string value that determines how the selected rasters are
   * ordered.
   */
  mosaicMethod:
    | "esriMosaicNone"
    | "esriMosaicCenter"
    | "esriMosaicNadir"
    | "esriMosaicViewpoint"
    | "esriMosaicAttribute"
    | "esriMosaicLockRaster"
    | "esriMosaicNorthwest"
    | "esriMosaicSeamline";
  /**
   * Use the mosaic operation to resolve overlap pixel values: from
   * first or last raster, use the min, max or mean of the pixel
   * values, or blend them.
   */
  mosaicOperation?:
    | "MT_FIRST"
    | "MT_LAST"
    | "MT_MIN"
    | "MT_MAX"
    | "MT_MEAN"
    | "MT_BLEND"
    | "MT_SUM";
  /**
   * Definition of multidimensional variables.
   */
  multidimensionalDefinition?: IMultidimensionalDefinition;
  /**
   * The field name used together with esriMosaicAttribute method.
   */
  sortField?: string;
  /**
   * The base sort value used together with esriMosaicAttribute
   * method and sortField parameter.
   */
  sortValue?: "Number" | "String";
  /**
   * Use a view point along with esriMosaicViewpoint.
   */
  viewpoint?: PointAny;
  /**
   * Deprecated. Use layerDefinition.definitionExpression instead.
   *
   * @deprecated
   */
  where?: string;
}

/**
 * Definition of multidimensional variables.
 *
 * @export
 * @interface IMultidimensionalDefinition
 * @see https://developers.arcgis.com/web-map-specification/objects/multidimensionalDefinition/
 */
export interface IMultidimensionalDefinition {
  /**
   * Type of dimension being used (ex. StdTime).
   */
  dimensionName?: string;
  /**
   * Is slice?
   */
  isSlice?: boolean;
  /**
   * Numerical array of associated values.
   */
  values?: number[];
  /**
   * Name of the variable.
   */
  variableName?: string;
}

/**
 * An image service provides access to raster data through a web service.
 * Multiple rasters can be served as one image service through mosaic
 * dataset technology, dynamically processed and mosaicked on the fly. An
 * image service supports accessing both the mosaicked image and its
 * catalog, as well as individual rasters in the catalog. Also, image
 * services can be cached (tiled) or uncached (dynamic). This object
 * specifically details properties within uncached image services.
 *
 * @export
 * @interface IImageServiceLayer
 * @extends {IImageServiceLayerBase}
 * @extends {IRefreshIntervalMixin}
 * @see https://developers.arcgis.com/web-map-specification/objects/imageServiceLayer/
 */
export interface IImageServiceLayer
  extends IImageServiceLayerBase,
    IRefreshIntervalMixin {
  layerType: "ArcGISImageServiceLayer";
  /**
   * An array of bandIds that are visible, can specify bands to export
   * or rearrange band order(from image service).
   */
  bandIds?: number[];
  /**
   * Controls how much loss the image will be subjected to by the
   * compression algorithm (from image service).
   */
  compressionQuality?: number;
  /**
   * String value representing image format.
   */
  format?:
    | "jpgpng"
    | "png"
    | "png8"
    | "png24"
    | "jpg"
    | "bmp"
    | "gif"
    | "tiff"
    | "png32";
  /**
   * The algorithm used for interpolation.
   */
  interpolation?:
    | "RSP_BilinearInterpolation"
    | "RSP_CubicConvolution"
    | "RSP_Majority"
    | "RSP_NearestNeighbor";
  /**
   * The pixel value that represents no information.
   */
  noData?: number | number[];
  /**
   * A string value of interpretation of noData setting. Default is
   * 'esriNoDataMatchAny' when noData is a number, and
   * 'esriNoDataMatchAll' when noData is an array.
   */
  noDataInterpretation?: "esriNoDataMatchAny" | "esriNoDataMatchAll";
  /**
   * Pertains to the type of values stored in the raster, such as
   * signed integer, unsigned integer, or floating point.
   */
  pixelType?: PixelType;
  /**
   * Specifies the rendering rule for how the requested image
   * should be rendered.
   */
  renderingRule?: IRenderingRule;
}

/**
 * Pertains to the type of values stored in the raster, such as
 * signed integer, unsigned integer, or floating point.
 */
type PixelType =
  | "C128"
  | "C64"
  | "F32"
  | "F64"
  | "S16"
  | "S32"
  | "S8"
  | "U1"
  | "U16"
  | "U2"
  | "U32"
  | "U4"
  | "U8"
  | "UNKNOWN";

/**
 * Specifies the rendering rule for how the requested image
 * should be rendered.
 *
 * @export
 * @interface IRenderingRule
 * @see https://developers.arcgis.com/web-map-specification/objects/renderingRule/
 */
export interface IRenderingRule {
  /**
   * The output pixel type defines the output image's pixel type.
   */
  outputPixelType?: PixelType;
  /**
   * The raster function name identifies the processing or rendering to be performed.
   */
  rasterFunction?: RasterFunction;
  /**
   * The arguments for the referenced rasterFunction.
   */
  rasterFunctionArguments?: RasterFunctionArgument;
  /**
   * Variable name for the raster function.
   */
  variableName?: string;
}

/**
 * Well-known raster function names.
 *
 * @see https://developers.arcgis.com/documentation/common-data-types/raster-function-objects.htm
 */
type RasterFunction =
  | "ArgStatistics"
  | "Arithmetic"
  | "Aspect"
  | "BandArithmetic"
  | "Classify"
  | "Clip"
  | "Colormap"
  | "ColormapToRGB"
  | "Complex"
  | "CompositeBand"
  | "ContrastBrightness"
  | "Convolution"
  | "Curvature"
  | "ElevationVoidFill"
  | "ExtractBand"
  | "Geometric"
  | "Greyscale"
  | "Identity"
  | "Hillshade"
  | "Local"
  | "Mask"
  | "MLClassify"
  | "NDVI"
  | "Pansharpening"
  | "RasterCalculator"
  | "Recast"
  | "Remap"
  | "Resample"
  | "SegmentMeanShift"
  | "ShadedRelief"
  | "Slope"
  | "Statistics"
  | "StatisticsHistogram"
  | "Stretch"
  | "TasseledCap"
  | "Threshold"
  | "TransposeBits"
  | "UnitConversion"
  | "Vectorfield"
  | "VectorFieldRenderer"
  | "WeightedSum"
  | "WeightedOverlay";

/**
 * Raster function arguments.
 *
 * @see https://developers.arcgis.com/documentation/common-data-types/raster-function-objects.htm
 */
type RasterFunctionArgument = { [key in RasterFunction]?: any };

/**
 * The imageServiceVectorLayer displays pixel values as vectors. To do
 * this, the image service layer must be a two-band raster in which
 * one band holds magnitude values and one band holds direction values.
 * The imageServiceVectorLayer also supports time-enabled data.
 *
 * @export
 * @interface IImageServiceVectorLayer
 * @extends {IImageServiceLayerBase}
 * @see https://developers.arcgis.com/web-map-specification/objects/imageServiceVectorLayer/
 */
export interface IImageServiceVectorLayer extends IImageServiceLayerBase {
  layerType: "ArcGISImageServiceVectorLayer";
  /**
   * Number describing the size of the tile.
   */
  symbolTileSize?: number;
}
