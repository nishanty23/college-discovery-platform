import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "IIT Delhi",
        location: "Delhi",
        fees: 250000,
        rating: 4.8,
        overview: "Top engineering institute in India.",
        courses: "BTech, MTech, PhD",
        placements: "Avg 20 LPA"
      },
      {
        name: "BITS Pilani",
        location: "Rajasthan",
        fees: 550000,
        rating: 4.7,
        overview: "Private top-tier engineering college.",
        courses: "BTech, MSc",
        placements: "Avg 18 LPA"
      },
      {
        name: "VIT Vellore",
        location: "Tamil Nadu",
        fees: 350000,
        rating: 4.3,
        overview: "Popular private university.",
        courses: "BTech, MBA",
        placements: "Avg 8 LPA"
      }
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });