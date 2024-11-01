import { Accordion } from "@/components/ui/accordion";
import { useState } from "react";
import AddressForm from "./AddressForm";

const Addresses = () => {
  const [sameAddress, setSameAddress] = useState(false);

  return (
    <div className="rounded-xl border p-5 lg:p-6">
      <Accordion
        type="multiple"
        defaultValue={["billing"]}
        className="space-y-6"
      >
        <AddressForm
          addressType="billing"
          sameAddress={sameAddress}
          setSameAddress={setSameAddress}
        />
        <AddressForm
          addressType="shipping"
          sameAddress={sameAddress}
          setSameAddress={setSameAddress}
        />
      </Accordion>
    </div>
  );
};

export default Addresses;
