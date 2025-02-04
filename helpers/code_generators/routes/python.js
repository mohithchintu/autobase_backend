export const python_route = (method, path, func) => {
  return `
    from flask import Flask
  
    app = Flask(__name__)
  
    def ${func}():
        return "Hello from ${func}!"
  
    app.route("${path}", methods=["${method.toUpperCase()}"])(${func})
  
    if __name__ == "__main__":
        app.run(debug=True)
    `;
};
