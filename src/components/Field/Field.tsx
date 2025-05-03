import clsx from "clsx";

type TFieldProps = {
  children: React.ReactNode;
  label?: string;
  labelClass?: string;
}

export default function Field({ children, label, labelClass }: TFieldProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <span className={clsx("text-[#89888B] font-semibold", labelClass)}>
        {label}
      </span>}
      {children}
    </div>
  );
}
