import AppSuspense from "../../components/suspense/AppSuspense";
import Layout from "../Layout";

const AppLayout = (props: any) => {
  const { isAuthenticated, userRole } = props;

  return (
    <AppSuspense>
      <Layout isAuthenticated={isAuthenticated} userRole={userRole}>
        {props.children}
      </Layout>
    </AppSuspense>
  );
};

export default AppLayout;
