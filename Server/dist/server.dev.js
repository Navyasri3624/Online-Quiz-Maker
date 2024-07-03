"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _route = _interopRequireDefault(require("./router/route.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Corrected this line
// Load environment variables
_dotenv["default"].config(); // Debugging log to check if ATLAS_URI is being loaded correctly


console.log('MONGO_URI:', process.env.MONGO_URI); // Initialize express app

var app = (0, _express["default"])(); // Middleware

app.use(_express["default"].json());
app.use((0, _cors["default"])());
console.log('MONGO_URI:', process.env.MONGO_URI); // Connect to MongoDB

var connectDB = function connectDB() {
  return regeneratorRuntime.async(function connectDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_mongoose["default"].connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }));

        case 3:
          console.log('MongoDB connected');
          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error('MongoDB connection error:', _context.t0.message);
          process.exit(1);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

connectDB(); // Define Routes

app.use('/api/quiz', _route["default"]); // Root Route

app.get('/', function (req, res) {
  res.send('API is running...');
}); // Start the server

var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log("Server running on port ".concat(PORT));
});