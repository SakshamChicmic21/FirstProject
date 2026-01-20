"use server";

import { API_END_POINTS } from "@/shared/api";
import { postRequest } from "@/shared/fetcher";
import { ResponseType } from "@/shared/types";

export async function loginAction(payload: {
  email: string;
  password: string;
}) {
  return await postRequest<
    Omit<ResponseType, "data"> & {
      data: {
        token: string;
        email: string;
        name: string;
        id: string;
        profilePicture: string;
      };
    },
    { email: string; password: string }
  >(API_END_POINTS.LOGIN, payload);
}

export async function forgotPassowrdAction(payload: { email: string }) {
  return await postRequest<ResponseType, { email: string }>(
    API_END_POINTS.FORGOT_PASSWORD,
    payload,
  );
}

export async function resetPassowordAction({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return await postRequest<ResponseType, { password: string; email: string }>(
    API_END_POINTS.RESET_PASSWORD,
    { password, email },
  );
}

export async function verifyOtp({
  email,
  code,
}: {
  email: string;
  code: string;
}) {
  return await postRequest<ResponseType, object>(API_END_POINTS.VERIFY_CODE, {
    email,
    code,
  });
}
