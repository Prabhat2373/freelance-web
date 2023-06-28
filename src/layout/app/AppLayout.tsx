import AppSuspense from "../../components/suspense/AppSuspense";
import Layout from "../Layout";

const AppLayout = (props: any) => {
  return (
    <AppSuspense>
      <Layout>{props.children}</Layout>
    </AppSuspense>
  );
};

export default AppLayout;
