// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Navigation documents */
interface NavigationDocumentData {
  /**
   * LogoImage field in *Navigation*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.logoimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logoimage: prismic.ImageField<never>;
  /**
   * LogoLink field in *Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.logolink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  logolink: prismic.LinkField;
  /**
   * Icons field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.icons[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  icons: prismic.GroupField<Simplify<NavigationDocumentDataIconsItem>>;
  /**
   * BackgroundImage field in *Navigation*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.backgroundimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  backgroundimage: prismic.ImageField<never>;
  /**
   * Slice Zone field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<NavigationDocumentDataSlicesSlice>;
}
/**
 * Item in Navigation → Icons
 *
 */
export interface NavigationDocumentDataIconsItem {
  /**
   * IconImage field in *Navigation → Icons*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.icons[].iconimage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  iconimage: prismic.ImageField<never>;
  /**
   * IconDescription field in *Navigation → Icons*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.icons[].icondescription
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  icondescription: prismic.KeyTextField;
  /**
   * IconLink field in *Navigation → Icons*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.icons[].iconlink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  iconlink: prismic.LinkField;
}
/**
 * Slice for *Navigation → Slice Zone*
 *
 */
type NavigationDocumentDataSlicesSlice =
  | NavigationItemSlice
  | NavLeftSlice
  | NavRightSlice;
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Parent field in *Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.parent
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  parent: prismic.RelationField;
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = HeroSlice | SectionTextSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = NavigationDocument | PageDocument;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
  /**
   * image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in NavLeft → Primary
 *
 */
interface NavLeftSliceDefaultPrimary {
  /**
   * Name field in *NavLeft → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_left.primary.name
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  name: prismic.RichTextField;
  /**
   * Link field in *NavLeft → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_left.primary.link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Item in NavLeft → Items
 *
 */
export interface NavLeftSliceDefaultItem {
  /**
   * Name field in *NavLeft → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_left.items[].name
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  name: prismic.RichTextField;
  /**
   * Link field in *NavLeft → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_left.items[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Default variation for NavLeft Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavLeftSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavLeftSliceDefaultPrimary>,
  Simplify<NavLeftSliceDefaultItem>
>;
/**
 * Slice variation for *NavLeft*
 *
 */
type NavLeftSliceVariation = NavLeftSliceDefault;
/**
 * NavLeft Shared Slice
 *
 * - **API ID**: `nav_left`
 * - **Description**: `NavLeft`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavLeftSlice = prismic.SharedSlice<
  "nav_left",
  NavLeftSliceVariation
>;
/**
 * Primary content in NavRight → Primary
 *
 */
interface NavRightSliceDefaultPrimary {
  /**
   * Name field in *NavRight → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_right.primary.name
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  name: prismic.RichTextField;
  /**
   * Link field in *NavRight → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_right.primary.link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Item in NavRight → Items
 *
 */
export interface NavRightSliceDefaultItem {
  /**
   * Name field in *NavRight → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_right.items[].name
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  name: prismic.RichTextField;
  /**
   * Link field in *NavRight → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: nav_right.items[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Default variation for NavRight Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavRightSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavRightSliceDefaultPrimary>,
  Simplify<NavRightSliceDefaultItem>
>;
/**
 * Slice variation for *NavRight*
 *
 */
type NavRightSliceVariation = NavRightSliceDefault;
/**
 * NavRight Shared Slice
 *
 * - **API ID**: `nav_right`
 * - **Description**: `NavRight`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavRightSlice = prismic.SharedSlice<
  "nav_right",
  NavRightSliceVariation
>;
/**
 * Primary content in NavigationItem → Primary
 *
 */
interface NavigationItemSliceDefaultPrimary {
  /**
   * Name field in *NavigationItem → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Name of the link
   * - **API ID Path**: navigation_item.primary.name
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  name: prismic.TitleField;
  /**
   * Link field in *NavigationItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for the item
   * - **API ID Path**: navigation_item.primary.link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Item in NavigationItem → Items
 *
 */
export interface NavigationItemSliceDefaultItem {
  /**
   * Name field in *NavigationItem → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Name of the child link
   * - **API ID Path**: navigation_item.items[].name
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  name: prismic.TitleField;
  /**
   * Link field in *NavigationItem → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for the child item
   * - **API ID Path**: navigation_item.items[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavigationItemSliceDefaultPrimary>,
  Simplify<NavigationItemSliceDefaultItem>
>;
/**
 * Slice variation for *NavigationItem*
 *
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;
/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: `NavigationItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSlice = prismic.SharedSlice<
  "navigation_item",
  NavigationItemSliceVariation
>;
/**
 * Primary content in SectionText → Primary
 *
 */
interface SectionTextSliceDefaultPrimary {
  /**
   * ImageLeft field in *SectionText → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section_text.primary.imageleft
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  imageleft: prismic.ImageField<never>;
  /**
   * ImageRight field in *SectionText → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section_text.primary.imageright
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  imageright: prismic.ImageField<never>;
  /**
   * TextFirst field in *SectionText → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: section_text.primary.textfirst
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  textfirst: prismic.TitleField;
  /**
   * TextSecond field in *SectionText → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: section_text.primary.textsecond
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  textsecond: prismic.TitleField;
}
/**
 * Default variation for SectionText Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SectionTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SectionTextSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *SectionText*
 *
 */
type SectionTextSliceVariation = SectionTextSliceDefault;
/**
 * SectionText Shared Slice
 *
 * - **API ID**: `section_text`
 * - **Description**: `SectionText`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SectionTextSlice = prismic.SharedSlice<
  "section_text",
  SectionTextSliceVariation
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
      NavigationDocumentData,
      NavigationDocumentDataIconsItem,
      NavigationDocumentDataSlicesSlice,
      NavigationDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PageDocument,
      AllDocumentTypes,
      HeroSliceDefaultPrimary,
      HeroSliceDefault,
      HeroSliceVariation,
      HeroSlice,
      NavLeftSliceDefaultPrimary,
      NavLeftSliceDefaultItem,
      NavLeftSliceDefault,
      NavLeftSliceVariation,
      NavLeftSlice,
      NavRightSliceDefaultPrimary,
      NavRightSliceDefaultItem,
      NavRightSliceDefault,
      NavRightSliceVariation,
      NavRightSlice,
      NavigationItemSliceDefaultPrimary,
      NavigationItemSliceDefaultItem,
      NavigationItemSliceDefault,
      NavigationItemSliceVariation,
      NavigationItemSlice,
      SectionTextSliceDefaultPrimary,
      SectionTextSliceDefault,
      SectionTextSliceVariation,
      SectionTextSlice,
    };
  }
}
