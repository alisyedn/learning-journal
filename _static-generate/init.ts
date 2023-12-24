import {loadAllLogs} from "@/_static-generate/logs-util";
import {logger} from "@/_static-generate/logger";
import {saveAll} from "@/_static-generate/sqlite/log-dao";

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