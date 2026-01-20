import { getPostsAction } from "@/api/posts";
import { SORT_DIRECTION } from "@/shared/types";
import UserPostsTable from "@/components/molecules/user/UserPostsTable/UserPostsTable";

const PostsPage = async ({
  searchParams,
  params,
}: {
  searchParams: Promise<{
    searchString?: string;
    skip?: number;
    limit?: number;
    sortKey?: string;
    sortDirection?: SORT_DIRECTION;
  }>;
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { searchString, skip, limit, sortKey, sortDirection } =
    await searchParams;
  const data = await getPostsAction({
    userId: id,
    ...(searchString && { searchString }),
    ...(skip && { skip }),
    ...(limit && { limit }),
    ...(sortKey && { sortKey, sortDirection }),
  });

  // Transform the API response to match the expected format
  const transformedData = {
    data: data?.data?.items || [],
    count: data?.data?.totalCount || 0,
  };

  return (
    <div className="space-y-6">
      <UserPostsTable data={transformedData} userId={id} />
    </div>
  );
};

export default PostsPage;
