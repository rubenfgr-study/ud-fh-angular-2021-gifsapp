// To parse this data:
//
//   import { Convert, SearchGifsResponse } from "./file";
//
//   const searchGifsResponse = Convert.toSearchGifsResponse(json);

export interface SearchGifsResponse {
  data: Gif[];
  pagination: Pagination;
  meta: Meta;
}

export interface Gif {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: Date;
  trending_datetime: string;
  images: Images;
  analytics_response_payload: string;
  analytics: Analytics;
}

export interface Analytics {
  onload: Onclick;
  onclick: Onclick;
  onsent: Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  original: FixedHeight;
  downsized: The480_WStill;
  downsized_large: The480_WStill;
  downsized_medium: The480_WStill;
  downsized_small: DownsizedSmall;
  downsized_still: The480_WStill;
  fixed_height: FixedHeight;
  fixed_height_downsampled: FixedHeight;
  fixed_height_small: FixedHeight;
  fixed_height_small_still: The480_WStill;
  fixed_height_still: The480_WStill;
  fixed_width: FixedHeight;
  fixed_width_downsampled: FixedHeight;
  fixed_width_small: FixedHeight;
  fixed_width_small_still: The480_WStill;
  fixed_width_still: The480_WStill;
  looping: Looping;
  original_still: The480_WStill;
  original_mp4: DownsizedSmall;
  preview: DownsizedSmall;
  preview_gif: The480_WStill;
  preview_webp: The480_WStill;
  hd: DownsizedSmall;
  '480w_still': The480_WStill;
}

export interface The480_WStill {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface DownsizedSmall {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

export interface FixedHeight {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size: string;
  webp: string;
  frames?: string;
  hash?: string;
}

export interface Looping {
  mp4_size: string;
  mp4: string;
}

export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toSearchGifsResponse(json: string): SearchGifsResponse {
    return JSON.parse(json);
  }

  public static searchGifsResponseToJson(value: SearchGifsResponse): string {
    return JSON.stringify(value);
  }
}
