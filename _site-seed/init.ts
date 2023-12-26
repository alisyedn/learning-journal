import {loadAllLogs} from "@/_site-seed/logs-util";
import {logger} from "@/_site-seed/logger";
import {saveAll} from "@/_site-seed/sqlite/log-dao";

async function main() {
  const logFiles = loadAllLogs();
  saveAll(logFiles)
}


main()
.then(async () => {
  logger.info(`Finished Building 'build-time' database`)
})
.catch(async (e) => {
  logger.error(e)
  process.exit(1)
})