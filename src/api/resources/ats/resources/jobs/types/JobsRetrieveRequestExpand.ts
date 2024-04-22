/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type JobsRetrieveRequestExpand =
    | "departments"
    | "departments,hiring_managers"
    | "departments,hiring_managers,job_postings"
    | "departments,hiring_managers,job_postings,recruiters"
    | "departments,hiring_managers,recruiters"
    | "departments,job_postings"
    | "departments,job_postings,recruiters"
    | "departments,offices"
    | "departments,offices,hiring_managers"
    | "departments,offices,hiring_managers,job_postings"
    | "departments,offices,hiring_managers,job_postings,recruiters"
    | "departments,offices,hiring_managers,recruiters"
    | "departments,offices,job_postings"
    | "departments,offices,job_postings,recruiters"
    | "departments,offices,recruiters"
    | "departments,recruiters"
    | "hiring_managers"
    | "hiring_managers,job_postings"
    | "hiring_managers,job_postings,recruiters"
    | "hiring_managers,recruiters"
    | "job_postings"
    | "job_postings,recruiters"
    | "offices"
    | "offices,hiring_managers"
    | "offices,hiring_managers,job_postings"
    | "offices,hiring_managers,job_postings,recruiters"
    | "offices,hiring_managers,recruiters"
    | "offices,job_postings"
    | "offices,job_postings,recruiters"
    | "offices,recruiters"
    | "recruiters";

export const JobsRetrieveRequestExpand = {
    Departments: "departments",
    DepartmentsHiringManagers: "departments,hiring_managers",
    DepartmentsHiringManagersJobPostings: "departments,hiring_managers,job_postings",
    DepartmentsHiringManagersJobPostingsRecruiters: "departments,hiring_managers,job_postings,recruiters",
    DepartmentsHiringManagersRecruiters: "departments,hiring_managers,recruiters",
    DepartmentsJobPostings: "departments,job_postings",
    DepartmentsJobPostingsRecruiters: "departments,job_postings,recruiters",
    DepartmentsOffices: "departments,offices",
    DepartmentsOfficesHiringManagers: "departments,offices,hiring_managers",
    DepartmentsOfficesHiringManagersJobPostings: "departments,offices,hiring_managers,job_postings",
    DepartmentsOfficesHiringManagersJobPostingsRecruiters:
        "departments,offices,hiring_managers,job_postings,recruiters",
    DepartmentsOfficesHiringManagersRecruiters: "departments,offices,hiring_managers,recruiters",
    DepartmentsOfficesJobPostings: "departments,offices,job_postings",
    DepartmentsOfficesJobPostingsRecruiters: "departments,offices,job_postings,recruiters",
    DepartmentsOfficesRecruiters: "departments,offices,recruiters",
    DepartmentsRecruiters: "departments,recruiters",
    HiringManagers: "hiring_managers",
    HiringManagersJobPostings: "hiring_managers,job_postings",
    HiringManagersJobPostingsRecruiters: "hiring_managers,job_postings,recruiters",
    HiringManagersRecruiters: "hiring_managers,recruiters",
    JobPostings: "job_postings",
    JobPostingsRecruiters: "job_postings,recruiters",
    Offices: "offices",
    OfficesHiringManagers: "offices,hiring_managers",
    OfficesHiringManagersJobPostings: "offices,hiring_managers,job_postings",
    OfficesHiringManagersJobPostingsRecruiters: "offices,hiring_managers,job_postings,recruiters",
    OfficesHiringManagersRecruiters: "offices,hiring_managers,recruiters",
    OfficesJobPostings: "offices,job_postings",
    OfficesJobPostingsRecruiters: "offices,job_postings,recruiters",
    OfficesRecruiters: "offices,recruiters",
    Recruiters: "recruiters",
} as const;
