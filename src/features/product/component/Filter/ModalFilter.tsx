import Modal from "antd/es/modal";
import FilterContainer from "./FilterContainer";
import { Button } from "@/components/Button/Button";
import { TFilter } from "./FilterContainer";
import { CloseOutlined } from "@ant-design/icons";
type TProps = {
  open: boolean
  onclose: () => void
}

export default function ModalFilter({ open, onclose }: TProps) {
  const onApplyFilter = (filter: TFilter) => {
    console.log(filter)
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
      <FilterContainer onApplyFilter={onApplyFilter}></FilterContainer>
    </div>
  </Modal>
}
