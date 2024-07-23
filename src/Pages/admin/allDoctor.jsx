/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useFetcher } from "@/hooks/fetch";
import { useData } from "@/provider/constant";
import { ClipboardPlus, Mail, User } from "lucide-react";
import { useState } from "react";

const AllDoctor = () => {
  const { userToken } = useData();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { userData, loading, refetchData } = useFetcher(
    "public/doc/all",
    "GET"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleDisableDoctor = async (id) => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/admin/doc/disable-doc/${id}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      const result = await res.json();

      if (result.success === true) {
        refetchData();
        setOpen(false);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {userData?.map(({ metaData }, index) => (
        <div
          key={index}
          className="w-full max-w-[300px] overflow-clip relative border-slate-200 border px-3 py-2 rounded-lg shadow-md font-semibold"
        >
          <div className="py-2">
            <p className="flex items-center gap-1 whitespace-nowrap">
              User ID:
              <span className="line-clamp-1 text-xs">{metaData.userId}</span>
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="flex items-center gap-1">
              <ClipboardPlus className="w-4 h-4" /> <span>name</span>
            </p>
            <p>
              {metaData.isActive !== true ? (
                <Badge
                  className="border-red-500 border border-1 text-red-500"
                  variant="outline"
                >
                  In-Active
                </Badge>
              ) : (
                <Badge
                  className="border border-green-500 border-1 text-green-500"
                  variant="outline"
                >
                  Active
                </Badge>
              )}
            </p>
          </div>

          <Separator className="mt-3" />
          <div className="py-2 space-y-1">
            <p className="flex items-center gap-1">
              <User className="w-4 h-4" />{" "}
              <span className="text-xs">{metaData.role}</span>
            </p>
            <p className="flex items-center gap-1">
              <Mail className="w-4 h-4" />{" "}
              <span className="text-xs">{metaData.email}</span>
            </p>
          </div>

          <div className="flex justify-center gap-2 pt-3">
            <Button
              disabled={isLoading}
              size="sm"
              onClick={() => handleDisableDoctor(metaData.userId)}
              className="button"
            >
              {isLoading ? "Disabling..." : "Disable"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllDoctor;
