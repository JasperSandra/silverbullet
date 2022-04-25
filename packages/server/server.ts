#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { ExpressServer } from "./api_server";
import { nodeModulesDir } from "@plugos/plugos/environments/node_sandbox";
import { preloadModules } from "@silverbulletmd/common/preload_modules";

let args = yargs(hideBin(process.argv))
  .option("port", {
    type: "number",
    default: 3000,
  })
  .parse();

if (!args._.length) {
  console.error("Usage: silverbullet <path-to-pages>");
  process.exit(1);
}

const pagesPath = args._[0] as string;
const port = args.port;
const webappDistDir = `${nodeModulesDir}/node_modules/@silverbulletmd/web/dist`;

const expressServer = new ExpressServer(
  port,
  pagesPath,
  webappDistDir,
  preloadModules
);
expressServer.start().catch((e) => {
  console.error(e);
});