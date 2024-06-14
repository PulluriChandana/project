using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project1.Models;
using Project1.Services;

namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<AuthController> _logger;

        public AuthController(ILogger<AuthController> logger)
        {
            _logger = logger;
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] User user)
        {
            try
            {
                // Validate incoming user data
                if (user == null)
                {
                    return BadRequest(new { message = "User data is null." });
                }

                // Check if user with the same email already exists
                if (UserStore.Users.Any(u => u.Email == user.Email))
                {
                    return BadRequest(new { message = "User already exists." });
                }

                // Add user to the in-memory store
                UserStore.Users.Add(user);

                // Log registration
                _logger.LogInformation("User registered: {Email}", user.Email);

                // Return success response
                return Ok(new { message = "User registered successfully." });
            }
            catch (Exception ex)
            {
                // Log any exceptions that occur
                _logger.LogError(ex, "Error registering user: {Message}", ex.Message);
                return StatusCode(500, new { message = "An error occurred while registering the user." });
            }
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDto model)
        {
            if (model == null || string.IsNullOrEmpty(model.Email) || string.IsNullOrEmpty(model.Password))
            {
                return BadRequest("Invalid client request");
            }

            // Perform login logic here
            return Ok(new { Token = "dummy-jwt-token" });
        }


        // Other action methods (login, get users)...

        [HttpGet("users")]
        public IActionResult GetUsers()
        {
            return Ok(UserStore.Users);
        }
    }
}
