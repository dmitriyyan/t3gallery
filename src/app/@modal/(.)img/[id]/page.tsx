import { Modal } from "./modal";
import FullPageImage from "~/components/FullPageImage";

export default function ImageModal({ params: { id: imgId } }: { params: { id: string } }) {
  return (
    <Modal>
      <FullPageImage imgId={parseInt(imgId)} />
    </Modal>
  );
}
