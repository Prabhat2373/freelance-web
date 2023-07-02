import Button from "@/components/buttons/Button";
import Page from "@/components/page/Page";
import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Apply = () => {
  const { id } = useParams();
  console.log("ID", id);

  return (
    <Page>
      <div className="bg-white ">
        <div>
          <button>Back</button>
        </div>

        <div className="grid grid-cols-8">
          <div className="col-span-6">
            <h1>Looking for a UX Web Designer/Russian Speakers only</h1>
            <div>
              <h1>$100</h1>
              <p>Bidding ends SOON</p>
            </div>
            <div>
              <p>
                I need a website for a software development and services
                company.The company is a new startup, so the focus is on what we
                offer to provide, than what we did in the past. The key areas
                are - +Digitaln Transformation work +Platform modernization
                +Maintenance and support +Utility tool development +Secure Data
                migration +Round the clock support +IT Consulatancy Contents
                development is included in the job which should be finalized
                after review with me.
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <div>
              <div className="flex flex-col justify-center gap-4 px-9">
                <Button>Submit a proposal</Button>
                <Button variant="outlined" color="black">
                  Save this job
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Apply;
