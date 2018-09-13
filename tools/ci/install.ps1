$ErrorActionPreference = "Stop";

$env:PATH = "$env:PYTHON;$env:PATH"

$RELEVANT_JOBS = $(python ./wpt test-jobs).split(
    [string[]]$null,
    [System.StringSplitOptions]::RemoveEmptyEntries
)

if ($env:RUN_JOB || $RELEVANT_JOBS.contains($env:JOB)) {
    $env:RUN_JOB = True
} else {
    $env:RUN_JOB = False
}

if ($env:RUN_JOB) {
    pip install -U setuptools
    pip install -U requests
}
