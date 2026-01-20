import UserLayout from "@/components/layouts/UserLayout";
import { API_END_POINTS } from "@/shared/api";
import { getRequest } from "@/shared/fetcher";
// import { GetParamsType, User, UserSubscription } from "@/shared/types";
import { GetParamsType, User } from "@/shared/types";

const Layout = async ({
  params,
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const [data] = await Promise.all([
    getRequest<
      ResponseType & { data: { items: User[]; total: number } },
      GetParamsType
    >(API_END_POINTS.USER, {
      ...(id && { userId: id }),
    }),
    // getRequest<
    //   ResponseType & {
    //     data: { subscription: UserSubscription };
    //   },
    //   GetParamsType
    // >(API_END_POINTS.CURRENT_SUBSCRIPTION, {
    //   ...(id && { userId: id }),
    // }),
  ]);
  // console.log(currentSubscription?.data?.subscription, "currentSubscription");
  console.log(data?.data?.items?.[0], "user data", data);
  return (
    <UserLayout
      data={data?.data?.items?.[0]}
      // currentSubscription={currentSubscription?.data?.subscription}
    >
      {children}
    </UserLayout>
  );
};
export default Layout;
