import { Loader2Icon } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

export const ButtonLoading = (
  props: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & { isLoading: boolean }
) => {
  const { isLoading, children, ...othersProps } = props;
  return (
    <Button {...othersProps} disabled={isLoading ? true : othersProps.disabled}>
      {isLoading ? (
        <>
          <Loader2Icon className="animate-spin" /> Please Wait...
        </>
      ) : (
        children
      )}
    </Button>
  );
};
