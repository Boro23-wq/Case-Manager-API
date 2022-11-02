import { PrismaClient } from '@prisma/client';
import { seedSeverityLevels } from '../lib/severity-levels';
import { seedCategories } from '../lib/categories';
import { seedCaseManagers } from '../lib/case-managers';
import { seedPatients } from '../lib/patients';

const prisma = new PrismaClient();

async function main() {
  // const patientsTxs = [];
  // for (const patient of seedPatients) {
  //   patientsTxs.push(
  //     prisma.patient.upsert({
  //       where: { email: patient.email },
  //       update: {},
  //       create: {
  //         firstName: patient.firstName,
  //         lastName: patient.lastName,
  //         email: patient.email,
  //         phone: patient.phone,
  //       },
  //     }),
  //   );
  // }
  // const patients = await prisma.$transaction(patientsTxs);
  // console.log(`Created ${patients.length} patients.`);
  // // Categories seed data
  // const categoriesTxs = [];
  // for (const category of seedCategories) {
  //   categoriesTxs.push(
  //     prisma.category.upsert({
  //       where: { title: category.title },
  //       update: {},
  //       create: {
  //         title: category.title,
  //         description: category.description,
  //       },
  //     }),
  //   );
  // }
  // const categories = await prisma.$transaction(categoriesTxs);
  // console.log(`Created ${categories.length} categories.`);
  // // Severities seed data
  // const severityTxs = [];
  // for (const severity of seedSeverityLevels) {
  //   severityTxs.push(
  //     prisma.severity.upsert({
  //       where: { level: severity.level },
  //       update: {},
  //       create: {
  //         level: severity.level,
  //       },
  //     }),
  //   );
  // }
  // const severities = await prisma.$transaction(severityTxs);
  // console.log(`Created ${severities.length} severities.`);
  // // Case Managers seed data
  const caseManagerTxs = [];
  for (const caseManager of seedCaseManagers) {
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
