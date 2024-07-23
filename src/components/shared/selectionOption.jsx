import React, { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useFormContext } from "react-hook-form";

const SelectionOption = ({ data, label, head, setFields, fieldName }) => {
  const [selectedPrimaryCare, setSelectedPrimaryCare] = useState([]);

  // console.log("selectedPrimaryCare", selectedPrimaryCare);

  const handlePrimaryCareSelection = (itemId) => {
    if (selectedPrimaryCare.includes(itemId)) {
      setSelectedPrimaryCare(selectedPrimaryCare.filter((id) => id !== itemId));
    } else {
      setSelectedPrimaryCare([...selectedPrimaryCare, itemId]);
    }

    setFields((prevFields) => ({
      ...prevFields,
      [fieldName]: selectedPrimaryCare.includes(itemId)
        ? selectedPrimaryCare.filter((id) => id !== itemId)
        : [...selectedPrimaryCare, itemId],
    }));
  };

  const isPrimaryCareSelected = (itemId) => {
    return selectedPrimaryCare.includes(itemId);
  };

  return (
    <div className="w-full flex flex-col gap-2 justify-center">
      <label className="font-bold">{label}</label>

      <DropdownMenu className="w-full">
        <DropdownMenuTrigger asChild className="w-full">
          <Button
            className="w-full line-clamp-1 focus-visible:ring-sky-500 focus-visible:border-none border-sky-500"
            variant="outline"
          >
            {selectedPrimaryCare?.length > 0
              ? selectedPrimaryCare.length <= 1
                ? selectedPrimaryCare.join(", ") // Display all items if <= 2
                : `${selectedPrimaryCare.slice(0, 1).join(", ")} + ${
                    selectedPrimaryCare.length - 1
                  } more` // Display first 2 items and count of remaining items
              : `${head}`}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="line-clamp-1">
            {label}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          {data.map((item) => (
            <DropdownMenuCheckboxItem
              key={item.id}
              checked={isPrimaryCareSelected(item.id)}
              onCheckedChange={() => handlePrimaryCareSelection(item.id)}
            >
              {item.title}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SelectionOption;
