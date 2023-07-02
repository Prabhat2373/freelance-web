import JobCard from "@/components/listing/JobCard";
import { useGetJobListingQuery } from "@/features/services/app/mainApi";
import React from "react";

const SavedJobs = () => {
  const { data: jobListings } = useGetJobListingQuery("");
  console.log("jobListings", jobListings);

  return (
    <div className="flex w-full">
      <div>
        {jobListings?.jobs?.map((job) => {
          console.log("job", job);

          return <JobCard data={job} />;
        })}
      </div>
    </div>
  );
};

export default SavedJobs;
