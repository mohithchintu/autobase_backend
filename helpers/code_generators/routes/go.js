export const generateGoCode = (method, path, func) => {
  return `
  package main
  
  import "github.com/gin-gonic/gin"
  
  func main() {
    r := gin.Default()
    r.${method}("${path}", func(c *gin.Context) {
      c.JSON(200, gin.H{
        "message": "${func(response)}",
      })
    })
    r.Run()
  }
    `;
};
