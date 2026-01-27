"use server";

import { API_END_POINTS } from "@/shared/api";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "@/shared/fetcher";
import { GetParamsType, ResponseType, Achievement } from "@/shared/types";

export async function getAchievementsAction(
  payload: GetParamsType & { userId: string },
) {
  return await getRequest<Achievement[], GetParamsType & { userId: string }>(
    API_END_POINTS.USERS_ACHIEVEMENTS,
    payload,
  );
}

export async function createAchievementAction(payload: Achievement) {
  return await postRequest<ResponseType, Achievement>(
    API_END_POINTS.USERS_ACHIEVEMENTS,
    payload,
  );
}

export async function updateAchievementAction(
  payload: Achievement & { achievementId: string },
) {
  return await putRequest<
    ResponseType,
    Achievement & { achievementId: string }
  >(API_END_POINTS.USERS_ACHIEVEMENTS, payload);
}

export async function deleteAchievementAction(payload: {
  achievementIds: string[];
}) {
  return await deleteRequest<ResponseType, { achievementIds: string[] }>(
    API_END_POINTS.USERS_ACHIEVEMENTS,
    payload,
  );
}
