#  arXiv plain text extraction

This service extracts plain text from arXiv PDFs. This is used during the
submission process as part of routine quality assurance checks. This is also
used after announcement, to update quality assurance tools (e.g. overlap
detection) and to make plain text content available to authorized API
consumers.

## Quick start

The minimal working service cluster requires the API application, the
worker application, a Docker host (e.g. a dind container), and a Redis for
the task queue/result backend. The easiest way to get these all running
together is to use the ``docker-compose.yml`` configuration in the root of
this repository.

```bash
docker-compose build    # Will build the API and worker images.
docker-compose up
```

This will also start a mock arXiv server that yields a PDF for requests to
``/pdf/<arxiv id>``. Note that the same PDF is returned no matter what ID is
requested.

To use the API you will need an auth token with scopes ``fulltext:read`` and
``fulltext:write``. The easiest way to generate one of these is to use the
helper script
[here](https://github.com/arXiv/arxiv-auth/blob/develop/generate_token.py).
Make sure that you use the same ``JWT_SECRET`` that is used in
``docker-compose.yml``.

To extract text from announced e-prints, you need only ``fulltext:create``
and ``fulltext:read``.

To extract text from submissions, you will also need ``compile:read`` and
``compile:create``. Your user ID will also need to match the owner stated by
the mock compiler endpoint in [``mock_arxiv.py``](./mock_arxiv.py).

```bash
JWT_SECRET=foosecret pipenv run python generate_token.py
```

You should pass this token as the value of the ``Authorization`` header in
all requests to the API. For example:

```bash
curl -XPOST -H "Authorization: [auth token]" http://127.0.0.1:8000/1802.00125
```

**Note:** when you first start the cluster, the worker may take a little while
to start up. This is because it is waiting for the dind container to pull down
the extractor image. You may notice that the dind container chews up a lot of
CPU during this process (e.g. if you use ``docker stats``). Once the worker
starts (i.e. you see log output from the worker) it should be ready to begin
processing texts. Any requests made prior to that point will simply be
enqueued.

Also note that running things with docker compose is a bit fragile if it feels
squeezed for resources. If you have trouble getting/keeping the dind container
running, try giving Docker a bit more juice. If your computer goes to sleep and
comes back up, and/or the dind container starts complaining about containerd
not starting, you may want to start fresh with:

```bash
docker-compose rm -v
docker-compose up
```

## Tests

You can run all of the tests with:

```
CELERY_ALWAYS_EAGER=1 pipenv run nose2 -s extractor -s ./ --with-coverage --coverage-report=term-missing
```

Note that the app tests in [``tests/``](./tests) require Docker to be running
and available at ``/var/run/docker.sock``. If you do not already have the
image ``arxiv/fulltext-extractor:0.3`` on your system, the first run may
take a little longer than usual.

## Documentation

The latest documentation can be found at
https://arxiv.github.io/arxiv-fulltext.

### Building

```bash
sphinx-apidoc -o docs/source/fulltext/ -e -f -M fulltext *test*/*
cd docs/
make html SPHINXBUILD=$(pipenv --venv)/bin/sphinx-build
```


## License

See [LICENSE](./LICENSE).