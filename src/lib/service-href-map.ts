
// export type ServiceSlug = keyof typeof serviceHrefMap;
export const serviceHrefMap = {
    "wisdom-teeth-removal": "/service/wisdom-teeth-removal",
    "tooth-extractions": "/service/tooth-extractions",
    "dental-bone-grafting": "/service/dental-bone-grafting",
    "dental-implants": "/service/dental-implants",
    "orthognathic-surgery": "/service/orthognathic-surgery",
    "genioplasty": "/service/genioplasty",
    "tmj-disorder": "/service/tmj-disorder",
    "facial-trauma": "/service/facial-trauma",
    "oral-pathology": "/service/oral-pathology",
    "anesthesia": "/service/anesthesia",
    "botox-and-filler": "/service/botox-and-filler",
    "sleep-apnea": "/service/sleep-apnea",
} as const;

// ✅ ServiceSlug is now a string literal union of all keys
export type ServiceSlug = keyof typeof serviceHrefMap;