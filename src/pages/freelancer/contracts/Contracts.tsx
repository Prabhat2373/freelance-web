import Page from "@/components/page/Page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const Contracts = () => {
  return (
    <Page>
      <div className="text-white">
        <div className="flex justify-between w-full">
          <h1>My Contracts</h1>
          <div>
            <h1> Total earnings: $10.00 USD</h1>
          </div>
        </div>
        <div>
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">this is account</TabsContent>
            <TabsContent value="password">This is password content</TabsContent>
          </Tabs>
        </div>
      </div>
    </Page>
  );
};

export default Contracts;
