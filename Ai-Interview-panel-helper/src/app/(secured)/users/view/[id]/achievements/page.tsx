import { getAchievementsAction } from "@/api/achievements";
import UserAchievementsTable from "@/components/molecules/user/UserAchievementsTable/UserAchievementsTable";
import { Achievement } from "@/shared/types";

const AchievementsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const data = await getAchievementsAction({
    userId: id,
  });

  // Transform the API response to match the expected format
  const transformedData: { data: Achievement[]; count: number } = {
    data: data || [],
    count: 0,
  };

  return (
    <div className="space-y-6">
      <UserAchievementsTable data={transformedData} />
    </div>
  );
};

export default AchievementsPage;
