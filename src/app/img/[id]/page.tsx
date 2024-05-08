import FullPageImage from "~/components/FullPageImage";

export default function ImagePage({
  params: { id: imgId },
}: {
  params: { id: string };
}) {
  return <FullPageImage imgId={parseInt(imgId)} />;
}
