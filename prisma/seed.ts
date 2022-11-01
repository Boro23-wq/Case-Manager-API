import { PrismaClient } from '@prisma/client';
import { seedSeverityLevels } from '../lib/severity-levels';
import { seedCategories } from '../lib/categories';
import { seedCaseManager } from '../lib/case-manager';

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

  const caseManagerTxs = [];
  for (const caseManager of seedCaseManager) {
    caseManagerTxs.push(
      prisma.caseManager.upsert({
        where: { email: caseManager.email },
        update: {},
        create: {
          userName: caseManager.userName,
          firstName: caseManager.firstName,
          lastName: caseManager.lastName,
          phone: caseManager.phone,
          email: caseManager.email,
        },
      }),
    );
  }

  const casemanager = await prisma.$transaction(caseManagerTxs);
  console.log(`Created ${casemanager.length} case manager.`);
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
