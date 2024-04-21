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
    hostId: string;
    userId: string;
    userName: string;
    teamId: string;
    playerCount: number;
    ownerCount: number;
    treasureCount: number;
}