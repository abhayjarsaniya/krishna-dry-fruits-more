export const BRAND = "Krishna Dry Fruits";
export const BRAND_FULL = "Krishna Dry Fruits & More";
export const STORE_NAME = "Krishna Dry Fruits & More";

export const STORE_ADDRESS = {
  line1: "Shop No. 22, Ground Floor",
  line2: "Vandemataram Icon, Vandematram Road",
  area: "Near Dev Residency, Gota Road",
  city: "Ahmedabad",
  state: "Gujarat",
  pincode: "382481",
  full: "Shop No. 22, Ground Floor, Vandemataram Icon, Vandematram Road, Near Dev Residency, Gota Road, Ahmedabad, Gujarat – 382481",
};

export const STORE_RATING = "4.8 ★";

export const WHATSAPP_DISPLAY = "+91 99246 95952";
export const WHATSAPP_E164 = "919924695952";

export const GOOGLE_MAPS_URL = "https://share.google/rOEHhcSuYzcu0o2fx";

export const MAX_QTY_PER_PRODUCT = 10;
export const MAX_QTY_MESSAGE = "Maximum quantity reached (10 per product).";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
