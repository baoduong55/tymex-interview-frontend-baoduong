import Modal from "antd/es/modal";
import FilterGroup from "./FilterGroup";
import { CloseOutlined } from "@ant-design/icons";
import { TFilter } from "@/features/product/type/filter";
type TProps = {
  open: boolean
  onclose: () => void
  onApplyFilter: (filter: TFilter) => void
}

export default function ModalFilter({ open, onclose, onApplyFilter }: TProps) {
  function handleApplyFilter(filter: TFilter) {
    onApplyFilter(filter)
    onclose()
  }
  return <Modal
    open={open}
    onCancel={onclose}
    classNames={{
      content: "!bg-background-modal",
      header: "!text-white"
    }}
    closeIcon={<CloseOutlined style={{ color: "white" }} />}
    footer={
      <div className="flex justify-end gap-4">
      </div>
    }
  >
    <div className="mt-4 text-white">
      <FilterGroup onApplyFilter={handleApplyFilter}></FilterGroup>
    </div>
  </Modal>
}
