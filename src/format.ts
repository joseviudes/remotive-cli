import { styleText } from "node:util"
import type { Job } from "./types"

function formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) {
        return isoDate;
    }
    return date.toLocaleDateString();
}

export function formatJob(job: Job): string {
    const location = job.candidate_required_location || "Location not specified"

    const details: string[] = []

    if (job.job_type) {
        details.push(job.job_type)
    }
    if (job.salary) {
        details.push(job.salary)
    }
    details.push(`Published: ${formatDate(job.publication_date)}`)

    return [
        styleText("bold", job.title),
        `${job.company_name} · ${location}`,
        details.join(" · "),
        styleText("cyan", job.url),
    ].join("\n")
}
    
export function formatJobList(jobs: Job[]): string {
    if (jobs.length === 0) {
        return "No jobs found."
    }

    const body = jobs.map(formatJob).join("\n\n")

    const footer = "Source: Remotive (https://remotive.com/remote-jobs)"

    return `${body}\n\n${footer}`
}
