import type { Command } from "../types/discord";

import ping from "./utils/ping";
import server from "./utils/server";
import user from "./utils/user";

export const commands: Command[] = [ping, server, user];
