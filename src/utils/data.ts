import { Gender, Size } from "./types";

export const onboardingSlides = [
  {
    desc: "Are you tired of guessing sizes and receiving clothes that don't fit? Different countries and brands use different sizing systems, which can make shopping stressful and costly. Our size converter solves this problem instantly. Simply select size  and instantly see the matching size.",
    image: require("@/assets/images/onboarding.png"),
  }
];

export const humans: Gender[] = ['Women', 'Men', 'Kids'];

export const sizes: Size[] = ['US', 'EU', 'UK', 'International']

export const womanSizes: Record<Size, string[]> = {
  US: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18'],
  EU: ['32', '34', '36', '38', '40', '42', '44', '46', '48', '50'],
  UK: ['4', '6', '8', '10', '12', '14', '16', '18', '20', '22'],
  International: ['XS', 'XS', 'S', 'S', 'M', 'M', 'L', 'L', 'XL', 'XXL'],
};

export const manSizes: Record<Size, string[]> = {
  US: ['34', '36', '38', '40', '42', '44', '46', '48'],
  EU: ['44', '46', '48', '50', '52', '54', '56', '56'],
  UK: ['34', '36', '38', '40', '42', '44', '46', '48'],
  International: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
};

export const kidSizes: Record<Size, string[]> = {
  US: ['2T', '3T', '4T', '5', '6', '7', '8', '10', '12', '14'],
  EU: ['92', '98', '104', '110', '116', '122', '128', '140', '152', '164'],
  UK: ['2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9', '10-11', '12-13', '14-15'],
  International: ['XS', 'XS', 'S', 'S', 'M', 'M', 'L', 'XL', 'XXL', 'XXXL'],
};

export const selectionData: Record<Gender, typeof kidSizes> = {
  'Women': womanSizes,
  'Men': manSizes,
  'Kids': kidSizes,
}


