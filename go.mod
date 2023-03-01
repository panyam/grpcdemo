module grpcdemo

go 1.19

require (
	github.com/gin-contrib/sessions v0.0.5
	github.com/gin-contrib/static v0.0.1
	github.com/gin-gonic/gin v1.8.1
	github.com/gorilla/websocket v1.5.0
	github.com/panyam/goutils v0.0.24
	github.com/stretchr/testify v1.8.0
	golang.org/x/oauth2 v0.0.0-20220722155238-128564f6959c
	google.golang.org/grpc v1.47.0
	google.golang.org/protobuf v1.28.1
	gorm.io/driver/postgres v1.3.8
	gorm.io/driver/sqlite v1.3.1
	gorm.io/gorm v1.23.8
)

// replace github.com/panyam/goutils v0.0.24 => ../../golang/goutils/
