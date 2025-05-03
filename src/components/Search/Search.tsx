import Image from "next/image";
import SearchIcon from "@icons/search.svg";
import { useDebounce } from "@/hook/useDebounce";
import { Input } from "@components/Input/Input";

type TSearchProps = {
  placeholder?: string;
  onChange: (value: string) => void;
}

export default function Search({ placeholder = "Quick search", onChange }: TSearchProps) {
  const debouncedChange = useDebounce((e: React.ChangeEvent<HTMLInputElement>,) => {
    onChange(e.target.value);
  }, 500);


  return <Input
    placeholder={placeholder}
    prefix={<Image src={SearchIcon} alt="search" />}
    className="h-11"
    onChange={debouncedChange}
  />
}
