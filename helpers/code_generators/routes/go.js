export const go_route = (method, path, func) => {
  return `
  package main
  
  import "github.com/gin-gonic/gin"
  
  func main() {
    r := gin.Default()
    r.${method}("${path}", "${func}")
    r.Run()
  }
    `;
};
