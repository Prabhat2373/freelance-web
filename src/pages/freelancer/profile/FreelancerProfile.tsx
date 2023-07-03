import Card from "@/components/cards/Card";
import ReviewCard from "@/components/cards/ReviewCard";
import Page from "@/components/page/Page";
import Education from "@/components/profile/Education";
import Experience from "@/components/profile/Experience";
import SkillsList, { Skill } from "@/components/profile/skills/SkillsList";
import VerificationStatus from "@/components/profile/verification/VerificationCard";
import React from "react";

const FreelancerProfile = () => {
  const identityVerified = true;
  const paymentVerified = false;
  const phoneVerified = true;
  const emailVerified = false;
  const skills: Skill[] = [
    { id: "1", name: "HTML" },
    { id: "2", name: "CSS" },
    { id: "3", name: "JavaScript" },
    { id: "4", name: "React" },
    { id: "5", name: "Node.js" },
  ];
  return (
    <Page>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 grid gap-4 rounded-lg gap-4">
          {/* PROFILE  */}
          <div className="grid grid-cols-12 gap-5 rounded-lg bg-white">
            <div className="col-span-3">
              {/* Profile Image */}
              <div>
                <img
                  src="https://plus.unsplash.com/premium_photo-1671581559799-5d370f768feb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                  alt="Profile"
                />
              </div>

              {/* Location and Joined At */}
              <div>
                <p>Location: New York</p>
                <p>Joined at: January 1, 2023</p>
              </div>
            </div>

            <div className="col-span-9">
              {/* Name and Edit Button */}
              <div className="flex items-center">
                <h1>John Doe</h1>
                <button>Edit</button>
              </div>

              {/* Title */}
              <h2>Web Developer</h2>

              {/* Ratings, Hourly Rate, and Projects Count */}
              <div className="grid grid-cols-3">
                <div>
                  <h3>Ratings</h3>
                  <p>4.5</p>
                </div>
                <div>
                  <h3>Hourly Rate</h3>
                  <p>$50</p>
                </div>
                <div>
                  <h3>Projects Count</h3>
                  <p>20</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3>Description</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  commodo tristique risus, nec aliquet diam auctor non.
                  Phasellus efficitur est quis purus interdum, vel efficitur
                  metus cursus. Vestibulum sed ultrices velit. Nullam rhoncus
                  justo nec massa interdum, id iaculis erat pulvinar. Integer
                  consequat ex quis fringilla consectetur. Nulla luctus, ligula
                  sit amet ullamcorper sodales, metus velit egestas velit, sed
                  aliquam urna ligula ac massa. Nulla facilisi.
                </p>
              </div>
            </div>
          </div>
          {/* PORTFOLIO  */}
          <div>
            <Card headline="My Portfoilio">
              <div className="grid grid-cols-3">
                <div>
                  <img src="https://plus.unsplash.com/premium_photo-1677151193419-9be7a26c02cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx" />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
                    alt="test"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
                    alt="test"
                  />
                </div>
              </div>
            </Card>
          </div>
          {/* REVIEW  */}
          <div>
            <Card headline="Reviews">
              <div className="grid grid-cols-2">
                <ReviewCard
                  content={"This is content"}
                  name="Test"
                  imageSrc="https://plus.unsplash.com/premium_photo-1671581559799-5d370f768feb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                />
                <ReviewCard
                  content={"This is content"}
                  name="Test"
                  imageSrc="https://plus.unsplash.com/premium_photo-1671581559799-5d370f768feb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                />
              </div>
            </Card>
          </div>
          {/* EXPERIENCE  */}
          <div>
            <Card headline="Experience">
              <Experience
                title="Software Engineer"
                company="ABC Company"
                designation="Full Stack Developer"
                startDate="Jan 2018"
                endDate="Present"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend bibendum libero, et fermentum arcu semper at."
              />
              <Experience
                title="Intern"
                company="XYZ Inc."
                designation="Front-end Developer"
                startDate="May 2017"
                endDate="Aug 2017"
                description="Praesent non sagittis massa, a convallis ligula. Morbi ullamcorper lorem et metus viverra blandit. Integer ac enim euismod, finibus ipsum eget, ultrices ex."
              />
            </Card>
          </div>
          {/* EDUCATION  */}
          <Card headline="Education">
            <Education
              degree="Bachelor of Science"
              major="Computer Science"
              university="ABC University"
              graduationYear="2020"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend bibendum libero, et fermentum arcu semper at."
            />
            <Education
              degree="Master of Business Administration"
              major="Finance"
              university="XYZ University"
              graduationYear="2018"
              description="Praesent non sagittis massa, a convallis ligula. Morbi ullamcorper lorem et metus viverra blandit. Integer ac enim euismod, finibus ipsum eget, ultrices ex."
            />
          </Card>
        </div>
        <div className="col-span-4">
          <div className="flex gap-4 flex-col">
            {/* VERIFY */}
            <div>
              <VerificationStatus
                identityVerified={identityVerified}
                paymentVerified={paymentVerified}
                phoneVerified={phoneVerified}
                emailVerified={emailVerified}
              />
            </div>
            {/* SKILLS  */}
            <div>
              <SkillsList skills={skills} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default FreelancerProfile;
