export enum Spreads {
    CelticCross,
}

export interface SpreadsType {
    name: Spreads;
    theme: string,
    positions: Array<{
        number: number;
        card: Array<{
            number: number;
            descriptions: string;
            reversDescriptions: string;
        }>;
    }>;
}
