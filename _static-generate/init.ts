import {loadAllLogs} from "@/_static-generate/logs-util";

async function main() {
  console.log('Running ...')
  console.log(loadAllLogs());
}


main()
.then(async () => {
  console.log(`Finished Building 'build-time' database`)
})
.catch(async (e) => {
  console.error(e)
  process.exit(1)
})