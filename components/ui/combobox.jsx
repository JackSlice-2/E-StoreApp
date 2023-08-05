import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const orders = [
  {
    value: "",
    label: "All Orders",
  },
  {
    value: "paypal",
    label: "PayPal Orders",
  },
  {
    value: "stripe",
    label: "Stripe Orders",
  },
];

export function ComboboxDemo({ storeId }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("all");

  const handleSelect = (newValue) => {
    setValue(newValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {orders.find((order) => order.value === value)?.label || "Order Lists..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {orders.map((order) => (
              <CommandItem
                key={order.value}
                onSelect={() => handleSelect(order.value)}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === order.value ? "opacity-100" : "opacity-0"
                  )}
                />
              <a href={`/${storeId}/${order.value}orders`}>{order.label}</a>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
