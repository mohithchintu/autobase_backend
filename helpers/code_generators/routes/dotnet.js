export const dotNet_route = (method, path, func) => {
  return `
  using Microsoft.AspNetCore.Mvc;
  
  [ApiController]
  [Route("${path}")]
  public class ${
    method.charAt(0).toUpperCase() + method.slice(1)
  }Controller : ControllerBase
  {
      [Http${method.toUpperCase()}]
      public IActionResult ${method}()
      {
          return Ok(new { message = "${func(response)}" });
      }
  }
    `;
};
