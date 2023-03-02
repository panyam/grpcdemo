

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

### Install Golang and Dependencies

```
brew install golang goctl protobuf
```

Make sure that $HOME/go folder exists and $HOME/go/bin is in your path, by adding the following to your bashrc or bash_profile (or the rc file of your shell):

export GOBIN=$HOME/go/bin
export PATH=$GOBIN:$PATH

### Install Buf

You can work directly with protoc and other tools but buf makes life a lot easier
working with generating stuff with buf so go ahead and install it:

```
brew install buf
```

# Tooling for protobuf handling
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
```

### Building everything


```
make all
```

You are ready to go.  The above make commands builds the following:

1. `make rpcgo`, `make httpgo`

Builds golang rpc and http server stub and clients respectively

2. `make rpcpy`, `make httppy`

Builds Python rpc and http server stub and clients respectively

3. `make rpcts`, `make httpts`

Builds TypeScript rpc and http server stub and clients respectively

4. `make rpccli`, `make httpcli`

Generates the cli for the rpc and http endpoints

5. `make openapi`

Generates OpenAPI spec

6. `make docs`

Generates documentation for the Rest and RPC endpoints.
