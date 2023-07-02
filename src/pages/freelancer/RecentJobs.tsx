import JobCard from "@/components/listing/JobCard";
import { useGetJobListingQuery } from "@/features/services/app/mainApi";
import React from "react";

const RecentJobs = () => {
  const { data: jobListings } = useGetJobListingQuery("");
  console.log("jobListings", jobListings);

  return (
    <div className="flex w-full">
      <div>
        {jobListings?.jobs?.map((job) => {
          return <JobCard data={job} />;
        })}
      </div>
    </div>
  );
};

export default RecentJobs;
