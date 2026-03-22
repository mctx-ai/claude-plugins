import * as fs from "node:fs";
import * as path from "node:path";
export function createCursorStore(dataDir) {
    const filePath = path.join(dataDir, "cursors.json");
    let cursors = {};
    return {
        get(serverId) {
            return cursors[serverId];
        },
        set(serverId, cursor) {
            cursors[serverId] = cursor;
            this.save();
        },
        load() {
            try {
                const data = fs.readFileSync(filePath, "utf-8");
                cursors = JSON.parse(data);
            }
            catch {
                cursors = {};
            }
        },
        save() {
            try {
                fs.mkdirSync(dataDir, { recursive: true });
                fs.writeFileSync(filePath, JSON.stringify(cursors, null, 2));
            }
            catch {
                // best-effort persistence
            }
        },
    };
}
