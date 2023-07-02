import Button from "@/components/buttons/Button";
import SearchBox from "@/components/home/SearchBox";
import FilterSection from "@/components/listing/Filter";
import React, { useState } from "react";
import BestMatch from "../freelancer/BestMatch";
import { useGetJobListingQuery } from "@/features/services/app/mainApi";
import JobCard from "@/components/listing/JobCard";
import Page from "@/components/page/Page";
import { useNavigate } from "react-router-dom";

const JobsIndex = () => {
  const { data: jobListings } = useGetJobListingQuery("");
  console.log("jobListings", jobListings);
  const nav = useNavigate();
  const [filters, setFilters] = useState({
    fixedPrice: false,
    hourlyPrice: false,
    priceRange: false,
    skills: [],
    location: "",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
  return (
    <Page>
      <div className="flex flex-col w-full mb-5 pt-5">
        <SearchBox />
      </div>
      <div className="grid grid-cols-8">
        <div className="col-span-2 text-white">
          <h1>Advanced Filters</h1>
        </div>
        <div className="col-span-6">
          <div className="flex justify-between text-white">
            <h1>Top results Showing 1-20 of 3291 results</h1>
            <h1>sort by</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 ">
        <div className="feed col-span-3">
          <div className="pt-8">
            <div className="bg-white">
              <FilterSection filters={filters} onChange={handleFilterChange} />
            </div>
          </div>
        </div>
        <div className="account col-span-9 gap-5 flex flex-col">
          <div>
            {jobListings?.jobs?.map((job) => {
              return (
                <JobCard
                  data={job}
                  onClick={() => nav(`/fl/jobs/apply/${job._id}`)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default JobsIndex;
