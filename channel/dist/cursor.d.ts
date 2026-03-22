export interface CursorStore {
    get(serverId: string): string | undefined;
    set(serverId: string, cursor: string): void;
    load(): void;
    save(): void;
}
export declare function createCursorStore(dataDir: string): CursorStore;
