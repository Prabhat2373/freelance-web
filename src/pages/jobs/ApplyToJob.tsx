import Button from "@/components/buttons/Button";
import Page from "@/components/page/Page";
import { Badge } from "@/components/ui/badge";
import { useGetJobByIdQuery } from "@/features/services/app/jobApi";
import React from "react";
import { useParams } from "react-router-dom";

const ApplyJob = () => {
  const { id } = useParams();
  const { data: jobDetails } = useGetJobByIdQuery(id);
  console.log("ID", id);
  console.log("jobDetails", jobDetails);
  return (
    <Page>
      <div className="bg-white">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Job Title</h1>
          <p className="text-sm text-gray-500">Date Posted Time</p>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Job Description</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
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
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Client's Budget</h2>
          <p>Budget: $1000</p>
          <p>Terms and Conditions: Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Additional Details</h2>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Cover Letter</label>
            <textarea
              rows={4}
              placeholder="Write your cover letter here"
              className="w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Attach Documents</label>
            <input type="file" />
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            variant="filled"
            className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md"
          >
            Submit
          </Button>
          <button className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </Page>
  );
};

export default ApplyJob;
