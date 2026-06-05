import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function POST(req: Request) {
  const token = req.headers.get("authorization")?.split(" ")[1];

  if (!token) {
    return Response.json({ error: "Login required" }, { status: 401 });
  }

  const user: any = verifyToken(token);

  if (!user) {
    return Response.json({ error: "Invalid token" }, { status: 401 });
  }

  const { collegeId } = await req.json();

  const bookmark = await prisma.bookmark.create({
    data: {
      userId: user.id,
      collegeId,
    },
  });

  return Response.json(bookmark);
}

export async function GET(req: Request) {
  const token = req.headers.get("authorization")?.split(" ")[1];

  if (!token) {
    return Response.json({ error: "Login required" }, { status: 401 });
  }

  const user: any = verifyToken(token);

  const bookmarks = await prisma.bookmark.findMany({
    where: { userId: user.id },
    include: { college: true },
  });

  return Response.json(bookmarks);
}

export async function DELETE(req: Request) {
  const token = req.headers.get("authorization")?.split(" ")[1];

  const user: any = verifyToken(token);

  const { collegeId } = await req.json();

  await prisma.bookmark.deleteMany({
    where: {
      userId: user.id,
      collegeId,
    },
  });

  return Response.json({ message: "Removed" });
}