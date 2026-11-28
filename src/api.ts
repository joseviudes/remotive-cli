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

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Remotive responded ${response.status} ${response.statusText}`);
    }

    const data = (await response.json()) as JobResponse;

    // La API de Remotive ignora el parámetro "limit", así que se aplica aquí.
    if (options.limit) {
        data.jobs = data.jobs.slice(0, options.limit);
        data["job-count"] = data.jobs.length;
    }

    return data;
}