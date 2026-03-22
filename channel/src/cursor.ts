import * as fs from "node:fs";
import * as path from "node:path";

export interface CursorStore {
  get(serverId: string): string | undefined;
  set(serverId: string, cursor: string): void;
  load(): void;
  save(): void;
}

export function createCursorStore(dataDir: string): CursorStore {
  const filePath = path.join(dataDir, "cursors.json");
  let cursors: Record<string, string> = {};

  return {
    get(serverId: string): string | undefined {
      return cursors[serverId];
    },

    set(serverId: string, cursor: string): void {
      cursors[serverId] = cursor;
      this.save();
    },

    load(): void {
      try {
        const data = fs.readFileSync(filePath, "utf-8");
        cursors = JSON.parse(data);
      } catch {
        cursors = {};
      }
    },

    save(): void {
      try {
        fs.mkdirSync(dataDir, { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify(cursors, null, 2));
      } catch {
        // best-effort persistence
      }
    },
  };
}
