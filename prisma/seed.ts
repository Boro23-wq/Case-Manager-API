import { PrismaClient } from '@prisma/client';
import { seedSeverityLevels } from '../lib/severity-levels';
import { seedCategories } from '../lib/categories';

const prisma = new PrismaClient();

async function main() {
  const categoriesTxs = [];
  for (const category of seedCategories) {
    categoriesTxs.push(
      prisma.category.upsert({
        where: { title: category.title },
        update: {},
        create: {
          title: category.title,
          description: category.description,
        },
      }),
    );
  }
  const categories = await prisma.$transaction(categoriesTxs);
  console.log(`Created ${categories.length} categories.`);

  const severityTxs = [];

  for (const severity of seedSeverityLevels) {
    severityTxs.push(
      prisma.severity.upsert({
        where: { level: severity.level },
        update: {},
        create: {
          level: severity.level,
        },
      }),
    );
  }

  const severities = await prisma.$transaction(severityTxs);
  console.log(`Created ${severities.length} severities.`);
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
