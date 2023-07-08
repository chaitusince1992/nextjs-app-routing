import NewDeal from "@/app/(routes)/(landing)/new-deal/page";
import Modal from "@/app/components/modal";

export default function InterceptedNewDealPage() {
  return (
    <Modal>
      Some new
      <NewDeal />
    </Modal>
  );
}