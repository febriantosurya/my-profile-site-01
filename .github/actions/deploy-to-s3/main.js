import core from "@actions/core";
import exec from "@actions/exec;"

function run() {
    const bucket = core.getInput('bucket', { required: true });
    const region = core.getInput('region', { required: true });
    const dist = core.getInput('dist', { required: true });

    const s3uri = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${dist} ${s3uri} --region ${region}`);
}

run()