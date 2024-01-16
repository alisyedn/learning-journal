import {Logs, PrismaClient} from '@prisma/client'
import {Journals} from "@/types";

const prisma = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
})

prisma.$on('query', (e: any) => {
  console.log('Query: ' + e.query)
  console.log('Params: ' + e.params)
  console.log('Duration: ' + e.duration + 'ms')
})

async function main() {

  const result = await prisma.$queryRaw<Journals>`SELECT *
                                        FROM "Logs" l
                                                 join "Tags" t on l.id = t."logId"
                                        order by l.id, character_length(t."label")`

  console.log(result)
}

main()
.then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})