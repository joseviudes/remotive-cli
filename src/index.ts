import { fetchJobs } from "./api";
import { formatJobList } from "./format";

const LIMIT = 5

async function main() {

    const data = await fetchJobs({ search: "node.js" });
    const jobs = data.jobs.slice(0, LIMIT);

    console.log(formatJobList(jobs));

    return
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});

