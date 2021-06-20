# Redwood Faktory Worker Reproduction Repo

## Current Issue
- Running the runWorker script that does `faktory.work()` exits early, and does not behave as expected (a long running script).

### Reproduction Steps

- Run `yarn rw dev` atleast once (can be exited after starting the server)
- Start the faktory server with docker. Using `docker run --rm -it -p 127.0.0.1:7419:7419 -p 127.0.0.1:7420:7420 contribsys/faktory:latest`
- Run `yarn rw exec runWorker`
- The script will run for a few seconds and then exit.
- Run with `DEBUG=faktory* yarn rw exec runWorker` to see the debug output.
