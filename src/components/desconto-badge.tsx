import { Produto } from "@/types/interfaces";
import { ArrowDownIcon } from "lucide-react";

interface descontoBadgeProps {
  produto: Pick<Produto, 'desconto'>;
}

export function DescontoBadge({ produto }: descontoBadgeProps) {
  return (
    <div className="flex items-center gap-[2px] px-2 rounded-full bg-primary  text-white">
      <ArrowDownIcon size={16} />
      <span className="text-sm font-semibold">{produto.desconto}%</span>
    </div>
  );
}
