import { JobResponse } from "./types";


const BASE_URL = "https://remotive.com/api/remote-jobs";

type FetchJobOptions = {
    search?: string;
    limit?: number;
}

export async function fetchJobs(options: FetchJobOptions = {}): Promise<JobResponse> {

    const url = new URL(BASE_URL);

    if (options.search) {
        url.searchParams.set("search", options.search);
    }

    if (options.limit) {
        url.searchParams.set("limit", options.limit.toString());
    }

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Remotive responded ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<JobResponse>;
}