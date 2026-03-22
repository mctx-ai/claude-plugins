import type { Server } from "@modelcontextprotocol/sdk/server/index.js";
import type { CursorStore } from "./cursor.js";
export interface PollerOptions {
    mcp: Server;
    cursorStore: CursorStore;
}
export declare function startPoller(options: PollerOptions): {
    stop: () => void;
};
