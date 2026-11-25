export type Job = {
    id: number;
    url: string;
    title: string;
    company_name: string;
    company_logo: string | null;
    category: string;
    job_type: string;
    publication_date: string;
    candidate_required_location: string;
    salary: string | null;
    description: string;
}

export type JobResponse = {
    "0-legal-notice": string;
    "job-count": number;
    jobs: Job[];
}

