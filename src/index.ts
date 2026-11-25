import { fetchJobs } from "./api";


async function main() {
    const data = await fetchJobs({ search: "node.js", limit: 10 });

    console.log(`Ofertas devueltas: ${data["job-count"]}`);

    for (const job of data.jobs) {
        console.log(`- ${job.title} (${job.company_name})`);
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});

