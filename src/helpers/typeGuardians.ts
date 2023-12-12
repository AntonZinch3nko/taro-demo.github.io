import { SectionTitles } from '../router/AppRouter';

export function getSectionTitle(section: string): string {
    const titles = Object.entries(SectionTitles).reduce((obj, [key, value]) => {
        obj[key.toUpperCase()] = value;
        return obj;
    }, {} as Record<string, string>);

    const key = Object.keys(titles).find(
        (i) => i === section.toUpperCase()
    );

    return key ? titles[key] : SectionTitles.Home;
}