import Button from "@/components/buttons/Button";
import Page from "@/components/page/Page";
import { Badge } from "@/components/ui/badge";
import { useGetJobByIdQuery } from "@/features/services/app/jobApi";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ViewJob = () => {
  const { id } = useParams();
  const { data: jobDetails } = useGetJobByIdQuery(id);
  console.log("ID", id);
  console.log("jobDetails", jobDetails);
  const nav = useNavigate();

  return (
    <Page>
      {/* <div className="bg-white ">
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
      </div> */}

      <div className="grid grid-cols-5 gap-8 bg-white rounded-lg">
        <div className="col-span-4">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Job Title</h1>
            <p className="text-gray-600">Budget/Price</p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-500">Date Posted Time</p>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Job Description</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {jobDetails?.data?.required_skills?.map((skill) => {
                return <Badge key={skill._id}>{skill?.skill_name}</Badge>;
              })}
              <span className="inline-block px-3 py-1 bg-blue-500 text-white rounded-md">
                Skill 1
              </span>
              <span className="inline-block px-3 py-1 bg-blue-500 text-white rounded-md">
                Skill 2
              </span>
              {/* Add more skills here */}
            </div>
          </div>
          <div className="mb-6">
            <p>Proposal Count</p>
            <p>People Hired</p>
            <p>Last Viewed by Client</p>
          </div>
        </div>
        <div className="col-span-1 p-5">
          <div className="flex flex-col gap-3">
            <Button
              onClick={() => nav(`/fl/jobs/apply/${id}`)}
              variant="filled"
              className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md"
            >
              Submit Proposal
            </Button>
            <Button variant="outlined" color="black">
              Cancel
            </Button>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold">About the Client</h2>
            <p>Country</p>
            <p>Joined</p>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Verification</h2>
            <p>Identity Verification</p>
            <p>Payment Verification</p>
            <p>Phone Verification</p>
            <p>Email Verification</p>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ViewJob;

// <div className="mb-6">
//             <h2 className="text-lg font-semibold">Questions</h2>
//             <input type="text" placeholder="Question 1" className="mb-2" />
//             <input type="text" placeholder="Question 2" className="mb-2" />
//           </div>
//           <div className="mb-6">
//             <h2 className="text-lg font-semibold">Cover Letter</h2>
//             <textarea
//               rows={4}
//               placeholder="Write your cover letter here"
//               className="w-full"
//             />
//           </div>
