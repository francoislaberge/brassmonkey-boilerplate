# Overview
Use this repo as a starting point for building Red5Pro Secondscreen experiences.
This allows you build web experiences that are controlled by a mobile device in real-time.

  - [Live Demo](http://francoislaberge.com/red5pro-secondscreen-boilerplate/).
  - [Red5Pro Secondscreen Documentation](http://red5pro.com/docs/secondscreen/html5/).

# Setup

    git clone git@github.com:francoislaberge/red5pro-secondscreen-boilerplate.git
    cd brassmonkey-boilerplate

# Running it


1. Run
```bash
./bin/run.sh
```
2. Then open up [http://localhost:8080/](http:localhost:8080/)

# Contributing / Deploying
You'll need to have push writes to the repo.

1. Change some code. Commit changes. Push them to master.

2. We use a workflow that allows this repo to be pushed to gh-pages for easy hosting via
Github Pages. To deploy run:

```bash
./bin/deploy.sh
```

3. That moves everything onto gh-pages and push that branch and then returns to master.
To verify it worked, open up the Github page of your repo and check if your changes are live.
In original repo case it's located at: http://francoislaberge.com/red5pro-secondscreen-boilerplate/
