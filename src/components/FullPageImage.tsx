import { clerkClient } from "@clerk/nextjs/server";
import { deleteMyImage, getMyImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullPageImage({ imgId }: { imgId: number }) {
  const image = await getMyImage(imgId);
  if (!image) {
    return null;
  }

  const uploaderInfo = await clerkClient.users.getUser(image?.userId);
  return (
    <div className="flex h-full w-full">
      <div className="flex flex-grow items-center justify-center">
        <img src={image?.url} className="object-contain" alt={image?.name} />
      </div>
      <div className="flex w-48 flex-col gap-2 border-l">
        <div className="border-b p-2 text-center text-lg">{image?.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded by: </span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On: </span>
          <span>{new Date(image?.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex flex-col p-2">
          <form
            action={async () => {
              "use server";
              await deleteMyImage(imgId);
            }}
          >
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
