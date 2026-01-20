"use client";
import { redirect, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { toast } from "react-toastify";

import { verifyOtp } from "@/api/auth";
import FormLayout from "@/components/layouts/FormLayout";
import { FormLayoutType } from "@/components/layouts/FormLayout/helpers/constants";
import FormBuilder from "@/components/molecules/FormBuilder";
import { getRequiredFieldMessage } from "@/components/molecules/FormBuilder/helpers/utils";
import { FormConfig } from "@/components/molecules/FormBuilder/types";
import { ROUTES } from "@/shared/routes";
import { FIELD_NAMES, STRING } from "@/shared/strings";

export interface OtpFormValues {
  otp: string;
}
const config: FormConfig<OtpFormValues> = [
  {
    name: FIELD_NAMES.OTP,
    label: STRING.OTP,
    type: FIELD_NAMES.OTP,
    validation: {
      required: getRequiredFieldMessage(STRING.OTP),
    },
  },
];
const OtpVerify = () => {
  const [isLoading, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const handleSubmit = async (data: OtpFormValues) => {
    const payload = { code: data.otp, email: searchParams?.get("email") || "" };
    startTransition(async () => {
      const res = await verifyOtp(payload);
      if (res?.statusCode == 200) {
        toast.success(res.message);
        redirect(
          `${ROUTES.RESET_PASSWORD}?email=${searchParams?.get("email") || ""}`,
        );
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <FormLayout layout={FormLayoutType.WithCover}>
      <h2 className="text-2xl font-semibold text-center mb-6 text-black dark:text-white">
        Verify OTP
      </h2>
      <p className="mb-6">Please verify the otp sent to your email</p>
      <FormBuilder<OtpFormValues>
        formConfig={config}
        onSubmit={handleSubmit}
        submitText="Verify"
        isLoading={isLoading}
        className="mb-6"
      />
    </FormLayout>
  );
};

export default OtpVerify;
