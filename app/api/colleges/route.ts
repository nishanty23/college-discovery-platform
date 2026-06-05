import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const search = searchParams.get("search") || "";
  const location = searchParams.get("location") || "";
  const page = Number(searchParams.get("page") || 1);

  const limit = 5;
  const skip = (page - 1) * limit;

  const colleges = await prisma.college.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
      location: {
        contains: location,
        mode: "insensitive",
      },
    },
    skip,
    take: limit,
  });

  return Response.json(colleges);
}