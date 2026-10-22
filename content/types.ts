export type AssetPath = string;

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  /** Only set when the file is verified as that person / their quote artifact */
  image?: AssetPath;
};

export type ProcessStep = {
  title: string;
  body: string;
};

export type CaseFilter =
  | "All"
  | "Founders"
  | "Finance"
  | "Healthcare"
  | "Coaching"
  | "Leadership";

/** How evidence images sit in the case study composition */
export type CaseLayout = "split" | "stack" | "rail" | "type-led";

export type CaseMedia = {
  src: AssetPath;
  alt: string;
  /** Screenshots/metrics prefer contain; portraits/celebration prefer cover */
  fit?: "cover" | "contain";
};

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  niche: string;
  services: string;
  filters: CaseFilter[];
  timeframe: string;
  challenge: string;
  strategy: string;
  outcomes: string[];
  /** Verbatim supporting line (e.g. client text) when supplied */
  highlight?: string;
  testimonial?: Testimonial;
  media: CaseMedia[];
  layout?: CaseLayout;
  /**
   * Human-review flags from CONTENT_MAP / privacy pass.
   * Not rendered on the public site — kept for implementers.
   */
  flags?: string[];
};
