
export type Size = 'US' | 'EU' | 'UK' | 'International';

export type Gender = 'Women' | 'Men' | 'Kids';

export interface Human {
  gender: Gender;
  name: string;
  size: string;
  values: Record<string, string>
}