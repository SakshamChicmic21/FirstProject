"use server";

import { AddUserFormValues } from "@/app/(secured)/users/list/AddUserSidebar";
import {
  BackendConnectedAccount,
  BackendSocialAccount,
} from "@/app/(secured)/users/view/[id]/connections/helpers/types";
import { Notification_Prefrences } from "@/app/(secured)/users/view/[id]/notifications/helpers/types";
import { API_END_POINTS } from "@/shared/api";
import { SUBSCRIPTION_PURCHASE_TYPE } from "@/shared/constants";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "@/shared/fetcher";
import { GetParamsType, Replace, ResponseType, User } from "@/shared/types";

export async function suspendUserAction(payload: {
  userId: string;
  isActive: boolean;
}) {
  console.log("suspendUserAction called with payload:", payload);
  console.log("API endpoint:", API_END_POINTS.USER_STATUS);

  try {
    const result = await postRequest<
      ResponseType,
      {
        userId: string;
        isActive: boolean;
      }
    >(API_END_POINTS.USER_STATUS, payload);

    console.log("suspendUserAction result:", result);
    return result;
  } catch (error) {
    console.error("suspendUserAction error:", error);
    throw error;
  }
}
export async function updateUserAction(
  payload: Omit<User, "id"> & {
    userId: string;
  },
) {
  return await putRequest<
    ResponseType,
    Omit<User, "id"> & {
      userId: string;
    }
  >(API_END_POINTS.USER, payload);
}
export async function updateUserNotification(payload: {
  userId: string;
  notificationPreferences: Notification_Prefrences[];
}) {
  return await putRequest<
    ResponseType,
    {
      userId: string;
      notificationPreferences: Notification_Prefrences[];
    }
  >(API_END_POINTS.USER, payload);
}
export async function updateUserConnection(payload: {
  userId: string;
  socialAccounts?: BackendSocialAccount[];
  connectedAccounts?: BackendConnectedAccount[];
}) {
  return await putRequest<
    ResponseType,
    {
      userId: string;
      socialAccounts?: BackendSocialAccount[];
      connectedAccounts?: BackendConnectedAccount[];
    }
  >(API_END_POINTS.USER, payload);
}

export async function getUserAchievementsAction(payload: { userId: string }) {
  return await getRequest<ResponseType, { userId: string }>(
    API_END_POINTS.USERS_ACHIEVEMENTS,
    payload,
  );
}
export async function deleteUserAction(payload: { userIds: string[] }) {
  return await deleteRequest<
    ResponseType,
    {
      userIds: string[];
    }
  >(API_END_POINTS.USER, payload);
}

export async function deleteProjectAction(payload: {
  projectIds: string[];
  userId: string;
}) {
  return await deleteRequest<
    ResponseType,
    {
      projectIds: string[];
      userId: string;
    }
  >(API_END_POINTS.PROJECTS, payload);
}
export async function addUserAction(
  payload: Replace<AddUserFormValues, "contactNumber", string> & {
    phoneCode: string;
  },
) {
  return await postRequest<
    ResponseType,
    Replace<AddUserFormValues, "contactNumber", string> & {
      phoneCode: string;
    }
  >(API_END_POINTS.USER, payload);
}
export async function updateUserPasswordAction(payload: {
  userId: string;
  password: string;
}) {
  return await putRequest<
    ResponseType,
    {
      userId: string;
      password: string;
    }
  >(API_END_POINTS.USER, payload);
}
export async function getUsersAction(payload: GetParamsType) {
  return await getRequest<ResponseType, GetParamsType>(
    API_END_POINTS.USER,
    payload,
  );
}

export async function upgradeUserPlanAction(payload: {
  userId: string;
  subscriptionPlanId: string;
  subscriptionPurchaseType: SUBSCRIPTION_PURCHASE_TYPE;
}) {
  return await postRequest<
    ResponseType,
    {
      userId: string;
      subscriptionPlanId: string;
      subscriptionPurchaseType: SUBSCRIPTION_PURCHASE_TYPE;
    }
  >(API_END_POINTS.UPGRADE_USER_PLAN, payload);
}

export async function cancelUserSubscriptionAction(payload: {
  userId: string;
}) {
  return await putRequest<ResponseType, { userId: string }>(
    API_END_POINTS.CANCEL_USER_SUBSCRIPTION,
    payload,
  );
}

export async function changeUserPasswordAction(payload: {
  userId: string;
  password: string;
}) {
  return await postRequest<ResponseType, { userId: string; password: string }>(
    API_END_POINTS.CHANGE_USER_PASSWORD,
    payload,
  );
}

export async function impersonateUserAction(payload: { userId: string }) {
  return await postRequest<ResponseType, { userId: string }>(
    API_END_POINTS.IMPERSONATE_USER,
    payload,
  );
}
