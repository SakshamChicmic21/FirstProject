"use server";

import { API_END_POINTS } from "@/shared/api";
import { deleteRequest, getRequest } from "@/shared/fetcher";
import { GetParamsType, ResponseType } from "@/shared/types";

export async function getPostsAction(
  payload: GetParamsType & { userId: string },
) {
  return await getRequest<ResponseType, GetParamsType & { userId: string }>(
    API_END_POINTS.POSTS,
    payload,
  );
}

export async function deletePostAction(payload: { postIds: string[] }) {
  return await deleteRequest<ResponseType, { postIds: string[] }>(
    API_END_POINTS.POSTS,
    payload,
  );
}
