/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type InterviewsListRequestExpand =
    | "application"
    | "application,job_interview_stage"
    | "interviewers"
    | "interviewers,application"
    | "interviewers,application,job_interview_stage"
    | "interviewers,job_interview_stage"
    | "interviewers,organizer"
    | "interviewers,organizer,application"
    | "interviewers,organizer,application,job_interview_stage"
    | "interviewers,organizer,job_interview_stage"
    | "job_interview_stage"
    | "organizer"
    | "organizer,application"
    | "organizer,application,job_interview_stage"
    | "organizer,job_interview_stage";
export const InterviewsListRequestExpand = {
    Application: "application",
    ApplicationJobInterviewStage: "application,job_interview_stage",
    Interviewers: "interviewers",
    InterviewersApplication: "interviewers,application",
    InterviewersApplicationJobInterviewStage: "interviewers,application,job_interview_stage",
    InterviewersJobInterviewStage: "interviewers,job_interview_stage",
    InterviewersOrganizer: "interviewers,organizer",
    InterviewersOrganizerApplication: "interviewers,organizer,application",
    InterviewersOrganizerApplicationJobInterviewStage: "interviewers,organizer,application,job_interview_stage",
    InterviewersOrganizerJobInterviewStage: "interviewers,organizer,job_interview_stage",
    JobInterviewStage: "job_interview_stage",
    Organizer: "organizer",
    OrganizerApplication: "organizer,application",
    OrganizerApplicationJobInterviewStage: "organizer,application,job_interview_stage",
    OrganizerJobInterviewStage: "organizer,job_interview_stage",
} as const;
