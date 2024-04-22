export interface TeamBuilding {
    userId: string;
    userName: string;
    teamName: string;
    playerCount: number;
    ownerCount: number;
    treasureCount: number;
    keyword: string;
}
export interface TeamJoining {
    userId: string;
    userName: string;
    teamId: string;
}
export interface Scan {
    userName: string;
    treasureId: string;
}