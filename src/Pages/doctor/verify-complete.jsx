import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const VerifyComplete = () => {
  return (
    <div className="pt-3 text-center my-auto space-y-2">
      <p className="font-bold text-3xl">Verification Complete</p>
      <Button className="button mx-auto mt-3 flex items-center justify-center">
        Complete Your Profile <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default VerifyComplete;
