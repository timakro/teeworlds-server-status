import { ITeeworldsClient } from "./clients";
export interface IServerInfo {
    version: string;
    name: string;
    map: string;
    mapcrc?: number;
    mapsize?: number;
    gameType: string;
    password: boolean;
    playerCount: number;
    maxPlayerCount: number;
    clientCount: number;
    maxClientCount: number;
    clients: ITeeworldsClient[];
}
//# sourceMappingURL=serverinfo.d.ts.map