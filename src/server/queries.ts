import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { images } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { analyticsServerClient } from "./analytics";

export async function getMyImages() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  return await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
    where: (model, { eq }) => eq(model.userId, user.userId),
  });
}

export async function getMyImage(id: number) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const image = db.query.images.findFirst({
    where: (model, { eq, and }) =>
      and(eq(model.id, id), eq(model.userId, user.userId)),
  });

  if (image === undefined) {
    throw new Error("Image not found");
  }

  return image;
}

export async function deleteMyImage(id: number) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  analyticsServerClient.capture({
    distinctId: user.userId,
    event: "delete image",
    properties: {
      imageId: id,
    },
  });
  await db
    .delete(images)
    .where(and(eq(images.id, id), eq(images.userId, user.userId)));
  redirect("/");
}