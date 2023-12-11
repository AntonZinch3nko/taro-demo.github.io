import { SectionTitles } from "../router/AppRouter";

export function getSectionTitle(section: string): string {
    return Object.values(SectionTitles).includes(section as any) ? section : SectionTitles.Home;
}