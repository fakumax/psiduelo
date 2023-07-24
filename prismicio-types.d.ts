// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ArticleDocumentDataSlicesSlice =
  | TextBlockSlice
  | ImageBlockSlice
  | FooterSlice
  | CopyrightSlice;

/**
 * Content for Article documents
 */
interface ArticleDocumentData {
  /**
   * Title field in *Article*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Image field in *Article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Article*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: article.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ArticleDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: article.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: article.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArticleDocumentData>,
    "article",
    Lang
  >;

/**
 * Item in *Navigation → Icons*
 */
export interface NavigationDocumentDataIconsItem {
  /**
   * IconImage field in *Navigation → Icons*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.icons[].iconimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  iconimage: prismic.ImageField<never>;

  /**
   * IconDescription field in *Navigation → Icons*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.icons[].icondescription
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  icondescription: prismic.KeyTextField;

  /**
   * IconLink field in *Navigation → Icons*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.icons[].iconlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  iconlink: prismic.LinkField;
}

type NavigationDocumentDataSlicesSlice =
  | NavigationItemSlice
  | NavLeftSlice
  | NavRightSlice;

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * LogoImage field in *Navigation*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.logoimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logoimage: prismic.ImageField<never>;

  /**
   * LogoLink field in *Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.logolink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  logolink: prismic.LinkField;

  /**
   * Icons field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.icons[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  icons: prismic.GroupField<Simplify<NavigationDocumentDataIconsItem>>;

  /**
   * BackgroundImage field in *Navigation*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.backgroundimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  backgroundimage: prismic.ImageField<never>;

  /**
   * ColorLink field in *Navigation*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.colorlink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  colorlink: prismic.ColorField;

  /**
   * Slice Zone field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NavigationDocumentDataSlicesSlice>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | HeroSlice
  | SectionTextSlice
  | PictureButtonSlice
  | SectionCheckSlice
  | SectionContentSlice
  | FooterSlice
  | CopyrightSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Parent field in *Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.parent
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  parent: prismic.ContentRelationshipField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes =
  | ArticleDocument
  | NavigationDocument
  | PageDocument;

/**
 * Primary content in *Copyright → Primary*
 */
export interface CopyrightSliceDefaultPrimary {
  /**
   * Text field in *Copyright → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: copyright.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Link field in *Copyright → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: copyright.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for Copyright Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CopyrightSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CopyrightSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Copyright*
 */
type CopyrightSliceVariation = CopyrightSliceDefault;

/**
 * Copyright Shared Slice
 *
 * - **API ID**: `copyright`
 * - **Description**: Copyright
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CopyrightSlice = prismic.SharedSlice<
  "copyright",
  CopyrightSliceVariation
>;

/**
 * Primary content in *Footer → Primary*
 */
export interface FooterSliceDefaultPrimary {
  /**
   * BgImage field in *Footer → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.primary.bgimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bgimage: prismic.ImageField<never>;

  /**
   * Description field in *Footer → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Logo field in *Footer → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Text field in *Footer → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.TitleField;
}

/**
 * Primary content in *Footer → Items*
 */
export interface FooterSliceDefaultItem {
  /**
   * Text field in *Footer → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.items[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Link field in *Footer → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Image field in *Footer → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FooterSliceDefaultPrimary>,
  Simplify<FooterSliceDefaultItem>
>;

/**
 * Slice variation for *Footer*
 */
type FooterSliceVariation = FooterSliceDefault;

/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: Footer
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSlice = prismic.SharedSlice<"footer", FooterSliceVariation>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *ImageBlock → Primary*
 */
export interface ImageBlockSliceDefaultPrimary {
  /**
   * Image field in *ImageBlock → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_block.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for ImageBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageBlockSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *ImageBlock → Primary*
 */
export interface ImageBlockSliceImageTextPrimary {
  /**
   * Title field in *ImageBlock → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: image_block.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Image field in *ImageBlock → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_block.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * ImageText variation for ImageBlock Slice
 *
 * - **API ID**: `imageText`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBlockSliceImageText = prismic.SharedSliceVariation<
  "imageText",
  Simplify<ImageBlockSliceImageTextPrimary>,
  never
>;

/**
 * Primary content in *ImageBlock → Primary*
 */
export interface ImageBlockSliceImageParagraphPrimary {
  /**
   * Subtitle field in *ImageBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_block.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;

  /**
   * Image field in *ImageBlock → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_block.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * ImageParagraph variation for ImageBlock Slice
 *
 * - **API ID**: `imageParagraph`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBlockSliceImageParagraph = prismic.SharedSliceVariation<
  "imageParagraph",
  Simplify<ImageBlockSliceImageParagraphPrimary>,
  never
>;

/**
 * Slice variation for *ImageBlock*
 */
type ImageBlockSliceVariation =
  | ImageBlockSliceDefault
  | ImageBlockSliceImageText
  | ImageBlockSliceImageParagraph;

/**
 * ImageBlock Shared Slice
 *
 * - **API ID**: `image_block`
 * - **Description**: ImageBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBlockSlice = prismic.SharedSlice<
  "image_block",
  ImageBlockSliceVariation
>;

/**
 * Primary content in *NavLeft → Primary*
 */
export interface NavLeftSliceDefaultPrimary {
  /**
   * Name field in *NavLeft → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_left.primary.name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Link field in *NavLeft → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_left.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Primary content in *NavLeft → Items*
 */
export interface NavLeftSliceDefaultItem {
  /**
   * Name field in *NavLeft → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_left.items[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Link field in *NavLeft → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_left.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for NavLeft Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavLeftSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavLeftSliceDefaultPrimary>,
  Simplify<NavLeftSliceDefaultItem>
>;

/**
 * Slice variation for *NavLeft*
 */
type NavLeftSliceVariation = NavLeftSliceDefault;

/**
 * NavLeft Shared Slice
 *
 * - **API ID**: `nav_left`
 * - **Description**: NavLeft
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavLeftSlice = prismic.SharedSlice<
  "nav_left",
  NavLeftSliceVariation
>;

/**
 * Primary content in *NavRight → Primary*
 */
export interface NavRightSliceDefaultPrimary {
  /**
   * Name field in *NavRight → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_right.primary.name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Link field in *NavRight → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_right.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Primary content in *NavRight → Items*
 */
export interface NavRightSliceDefaultItem {
  /**
   * Name field in *NavRight → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_right.items[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Link field in *NavRight → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_right.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for NavRight Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavRightSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavRightSliceDefaultPrimary>,
  Simplify<NavRightSliceDefaultItem>
>;

/**
 * Slice variation for *NavRight*
 */
type NavRightSliceVariation = NavRightSliceDefault;

/**
 * NavRight Shared Slice
 *
 * - **API ID**: `nav_right`
 * - **Description**: NavRight
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavRightSlice = prismic.SharedSlice<
  "nav_right",
  NavRightSliceVariation
>;

/**
 * Primary content in *NavigationItem → Primary*
 */
export interface NavigationItemSliceDefaultPrimary {
  /**
   * Name field in *NavigationItem → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Name of the link
   * - **API ID Path**: navigation_item.primary.name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.TitleField;

  /**
   * Link field in *NavigationItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for the item
   * - **API ID Path**: navigation_item.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Primary content in *NavigationItem → Items*
 */
export interface NavigationItemSliceDefaultItem {
  /**
   * Name field in *NavigationItem → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Name of the child link
   * - **API ID Path**: navigation_item.items[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.TitleField;

  /**
   * Link field in *NavigationItem → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for the child item
   * - **API ID Path**: navigation_item.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavigationItemSliceDefaultPrimary>,
  Simplify<NavigationItemSliceDefaultItem>
>;

/**
 * Slice variation for *NavigationItem*
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;

/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: NavigationItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSlice = prismic.SharedSlice<
  "navigation_item",
  NavigationItemSliceVariation
>;

/**
 * Primary content in *PictureButton → Primary*
 */
export interface PictureButtonSliceDefaultPrimary {
  /**
   * Color field in *PictureButton → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: picture_button.primary.color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  color: prismic.ColorField;
}

/**
 * Primary content in *PictureButton → Items*
 */
export interface PictureButtonSliceDefaultItem {
  /**
   * Image field in *PictureButton → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: picture_button.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * StylesCard field in *PictureButton → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Estilos de tarjeta
   * - **API ID Path**: picture_button.items[].stylescard
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  stylescard: prismic.SelectField<
    "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
  >;

  /**
   * Text field in *PictureButton → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: picture_button.items[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.TitleField;

  /**
   * Link field in *PictureButton → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: picture_button.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for PictureButton Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PictureButtonSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PictureButtonSliceDefaultPrimary>,
  Simplify<PictureButtonSliceDefaultItem>
>;

/**
 * Primary content in *PictureButton → Primary*
 */
export interface PictureButtonSliceSameStylePrimary {
  /**
   * Color field in *PictureButton → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: picture_button.primary.color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  color: prismic.ColorField;

  /**
   * BgImage field in *PictureButton → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: picture_button.primary.bgimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bgimage: prismic.ImageField<never>;
}

/**
 * Primary content in *PictureButton → Items*
 */
export interface PictureButtonSliceSameStyleItem {
  /**
   * Image field in *PictureButton → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: picture_button.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text field in *PictureButton → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: picture_button.items[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.TitleField;

  /**
   * Link field in *PictureButton → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: picture_button.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * SameStyle variation for PictureButton Slice
 *
 * - **API ID**: `sameStyle`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PictureButtonSliceSameStyle = prismic.SharedSliceVariation<
  "sameStyle",
  Simplify<PictureButtonSliceSameStylePrimary>,
  Simplify<PictureButtonSliceSameStyleItem>
>;

/**
 * Slice variation for *PictureButton*
 */
type PictureButtonSliceVariation =
  | PictureButtonSliceDefault
  | PictureButtonSliceSameStyle;

/**
 * PictureButton Shared Slice
 *
 * - **API ID**: `picture_button`
 * - **Description**: PictureButton
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PictureButtonSlice = prismic.SharedSlice<
  "picture_button",
  PictureButtonSliceVariation
>;

/**
 * Primary content in *SectionCheck → Primary*
 */
export interface SectionCheckSliceDefaultPrimary {
  /**
   * Image field in *SectionCheck → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section_check.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Color field in *SectionCheck → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: section_check.primary.color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  color: prismic.ColorField;

  /**
   * Text field in *SectionCheck → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: section_check.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.TitleField;
}

/**
 * Primary content in *SectionCheck → Items*
 */
export interface SectionCheckSliceDefaultItem {
  /**
   * Description field in *SectionCheck → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_check.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Icon field in *SectionCheck → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section_check.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * Title field in *SectionCheck → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: section_check.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/**
 * Default variation for SectionCheck Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionCheckSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SectionCheckSliceDefaultPrimary>,
  Simplify<SectionCheckSliceDefaultItem>
>;

/**
 * Slice variation for *SectionCheck*
 */
type SectionCheckSliceVariation = SectionCheckSliceDefault;

/**
 * SectionCheck Shared Slice
 *
 * - **API ID**: `section_check`
 * - **Description**: SectionCheck
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionCheckSlice = prismic.SharedSlice<
  "section_check",
  SectionCheckSliceVariation
>;

/**
 * Primary content in *SectionContent → Primary*
 */
export interface SectionContentSliceDefaultPrimary {
  /**
   * BgColor field in *SectionContent → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: section_content.primary.bgcolor
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  bgcolor: prismic.ColorField;

  /**
   * ImageLeft field in *SectionContent → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section_content.primary.imageleft
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imageleft: prismic.ImageField<never>;

  /**
   * BgLeft field in *SectionContent → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section_content.primary.bgleft
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bgleft: prismic.ImageField<never>;

  /**
   * TitleLeft field in *SectionContent → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: section_content.primary.titleleft
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  titleleft: prismic.TitleField;

  /**
   * DescripcionLeft field in *SectionContent → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_content.primary.descripcionleft
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  descripcionleft: prismic.RichTextField;

  /**
   * TextButton field in *SectionContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_content.primary.textbutton
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  textbutton: prismic.KeyTextField;

  /**
   * LinkButton field in *SectionContent → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: section_content.primary.linkbutton
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkbutton: prismic.LinkField;
}

/**
 * Primary content in *SectionContent → Items*
 */
export interface SectionContentSliceDefaultItem {
  /**
   * Title field in *SectionContent → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: section_content.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Description field in *SectionContent → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_content.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * TextButton field in *SectionContent → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_content.items[].textbutton
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  textbutton: prismic.KeyTextField;

  /**
   * Image field in *SectionContent → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section_content.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for SectionContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionContentSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SectionContentSliceDefaultPrimary>,
  Simplify<SectionContentSliceDefaultItem>
>;

/**
 * Slice variation for *SectionContent*
 */
type SectionContentSliceVariation = SectionContentSliceDefault;

/**
 * SectionContent Shared Slice
 *
 * - **API ID**: `section_content`
 * - **Description**: SectionContent
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionContentSlice = prismic.SharedSlice<
  "section_content",
  SectionContentSliceVariation
>;

/**
 * Primary content in *SectionText → Primary*
 */
export interface SectionTextSliceDefaultPrimary {
  /**
   * ImageLeft field in *SectionText → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section_text.primary.imageleft
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imageleft: prismic.ImageField<never>;

  /**
   * ImageRight field in *SectionText → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section_text.primary.imageright
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imageright: prismic.ImageField<never>;

  /**
   * TextFirst field in *SectionText → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: section_text.primary.textfirst
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  textfirst: prismic.TitleField;

  /**
   * TextSecond field in *SectionText → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: section_text.primary.textsecond
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  textsecond: prismic.TitleField;

  /**
   * BgColor field in *SectionText → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: section_text.primary.bgcolor
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  bgcolor: prismic.ColorField;

  /**
   * ColorLetter field in *SectionText → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: section_text.primary.colorletter
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  colorletter: prismic.ColorField;
}

/**
 * Default variation for SectionText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SectionTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SectionText*
 */
type SectionTextSliceVariation = SectionTextSliceDefault;

/**
 * SectionText Shared Slice
 *
 * - **API ID**: `section_text`
 * - **Description**: SectionText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionTextSlice = prismic.SharedSlice<
  "section_text",
  SectionTextSliceVariation
>;

/**
 * Primary content in *TextBlock → Primary*
 */
export interface TextBlockSliceDefaultPrimary {
  /**
   * Text field in *TextBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextBlockSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *TextBlock → Primary*
 */
export interface TextBlockSliceTitleTextPrimary {
  /**
   * Title field in *TextBlock → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Text field in *TextBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * TitleText variation for TextBlock Slice
 *
 * - **API ID**: `titleText`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceTitleText = prismic.SharedSliceVariation<
  "titleText",
  Simplify<TextBlockSliceTitleTextPrimary>,
  never
>;

/**
 * Slice variation for *TextBlock*
 */
type TextBlockSliceVariation = TextBlockSliceDefault | TextBlockSliceTitleText;

/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: TextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSlice = prismic.SharedSlice<
  "text_block",
  TextBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ArticleDocument,
      ArticleDocumentData,
      NavigationDocument,
      NavigationDocumentData,
      PageDocument,
      PageDocumentData,
      AllDocumentTypes,
      CopyrightSlice,
      CopyrightSliceVariation,
      CopyrightSliceDefault,
      FooterSlice,
      FooterSliceVariation,
      FooterSliceDefault,
      HeroSlice,
      HeroSliceVariation,
      HeroSliceDefault,
      ImageBlockSlice,
      ImageBlockSliceVariation,
      ImageBlockSliceDefault,
      ImageBlockSliceImageText,
      ImageBlockSliceImageParagraph,
      NavLeftSlice,
      NavLeftSliceVariation,
      NavLeftSliceDefault,
      NavRightSlice,
      NavRightSliceVariation,
      NavRightSliceDefault,
      NavigationItemSlice,
      NavigationItemSliceVariation,
      NavigationItemSliceDefault,
      PictureButtonSlice,
      PictureButtonSliceVariation,
      PictureButtonSliceDefault,
      PictureButtonSliceSameStyle,
      SectionCheckSlice,
      SectionCheckSliceVariation,
      SectionCheckSliceDefault,
      SectionContentSlice,
      SectionContentSliceVariation,
      SectionContentSliceDefault,
      SectionTextSlice,
      SectionTextSliceVariation,
      SectionTextSliceDefault,
      TextBlockSlice,
      TextBlockSliceVariation,
      TextBlockSliceDefault,
      TextBlockSliceTitleText,
    };
  }
}
