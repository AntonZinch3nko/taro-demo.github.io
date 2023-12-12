import { SectionTitles } from "../router/AppRouter";
import { getSectionTitle } from "./typeGuardians";

describe('getSectionTitle', () => {
  it('returns the correct title for a known section', () => {
    expect(getSectionTitle(SectionTitles.Home)).toBe(SectionTitles.Home);
    expect(getSectionTitle(SectionTitles.Gallery)).toBe(SectionTitles.Gallery);
  });

  it('returns the default title for an unknown section', () => {
    expect(getSectionTitle('UnknownSection')).toBe(SectionTitles.Home);
  });

  it('is case sensitive and returns default for incorrectly cased input', () => {
    expect(getSectionTitle('gallery')).toBe(SectionTitles.Home);
  });
});