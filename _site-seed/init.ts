import {loadAllLogs} from "@/libs/dao/fs/journals";
import {logger} from "@/_site-seed/logger";
import {removeAll, saveAll} from "@/_site-seed/prisma/log-doa";

async function main() {
  const logFiles = loadAllLogs();
  await removeAll()
  await saveAll(logFiles)
}


main()
.then(async () => {
  logger.info(`Finished Building 'build-time' database`)
})
.catch(async (e) => {
  logger.error(e)
  process.exit(1)
})