import { DiscordBot } from "./DiscordBot";
import { prefix, token } from "./botconfig";

import { MeetModule } from "./modules/meet/MeetModule";

const DarkoBot = new DiscordBot(token, prefix);

// Bot Modules
const meet = new MeetModule('meet');
DarkoBot.AddModule(meet);

export default DarkoBot;
