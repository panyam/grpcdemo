

A simple demo for creating services (including those with streaming) with GRPC as well as generating http reverse proxies and OpenAPI specs all from the protobuf specs as Source of Truth.

## Requirements
Goals of this demo are:

1. Start with protos/service schemas for a simple application
2. Generate service stubs and client libraries for this service from proto definitions
3. Generation HTTP endpoints as a reverse-proxy into the rpc endpoint.
4. Generate http clients for http endpoints.
5. Ensure different kinds of auth are supported by the HTTP endpoint so that the core
   RPC endpoint that needs userinfo can get it (eg userid) or roles/permissions
6. Generate CLIs to call the rpc endpoint directly
7. Generate CLIs to call the http endpoint directly
8. Generate OpenAPI spec

## Getting Started

### Setup a Virtualenv (for some tooling)

```
# OSX
brew install python
```

Note: If you are in a *new* enough installation python2 may not be around so pip may fail.  If this is the case then first do

```
alias pip=pip3
```

```
# Need once
pip install --upgrade pip
pip install virtualenv
virtualenv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
pip3 install awscli --upgrade
PATH=<path to your venv>/bin/aws:$PATH
```

Here on everything also assumes you are in this virtual environment

### Install Golang and Dependencies

```
brew install golang goctl protobuf mkcert nss
```

### Building everything


```
make all
```

You are ready to go.  The above make commands builds the following:

1. `make gorpc`, `make gohttp`

Builds golang rpc and http server stub and clients respectively

2. `make pyrpc`, `make pyhttp`

Builds Python rpc and http server stub and clients respectively

3. `make tsrpc`, `make tshttp`

Builds TypeScript rpc and http server stub and clients respectively

4. `make rpccli`, `make httpcli`

Generates the cli for the rpc and http endpoints

5. `make openapi`

Generates OpenAPI spec

6. `make docs`

Generates documentation for the Rest and RPC endpoints.
