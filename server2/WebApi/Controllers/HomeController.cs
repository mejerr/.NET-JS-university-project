using Microsoft.AspNetCore.Mvc;
using WebApi.Data;
using WebApi.Models;
using Microsoft.AspNetCore.Authorization;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly ITokenService _tokenService;
        private string generatedToken = null;
        private ApiDbContext _dbContext;

        public HomeController(ApiDbContext dbContext, IConfiguration config, ITokenService tokenService)
        {
            _config = config;
            _tokenService = tokenService;
            _dbContext = dbContext;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            User newUser = new()
            {
                username = user.username,
                password = user.password
            };

            await _dbContext.Users.AddAsync(newUser);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status201Created);
        }

        [AllowAnonymous]
        [Route("login")]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] User user)
        {
            if (string.IsNullOrEmpty(user.username) || string.IsNullOrEmpty(user.password))
            {
                return (RedirectToAction("Error"));
            }
            IActionResult response = Unauthorized();
            var validUser = _dbContext.Users.Where(x => x.username == user.username && x.password == user.password).FirstOrDefault();

            if (validUser != null)
            {
                generatedToken = _tokenService.BuildToken(_config["Jwt:Key"].ToString(), _config["Jwt:Issuer"].ToString(), validUser);
                if (generatedToken != null)
                {
                    HttpContext.Session.SetString("Token", generatedToken);
                    return Ok(generatedToken);
                }
                else
                {
                    return (RedirectToAction("Error"));
                }
            }
            else
            {
                return (RedirectToAction("Error"));
            }
        }

        [Authorize]
        [Route("mainwindow")]
        [HttpGet]
        public IActionResult MainWindow()
        {
            string token = HttpContext.Session.GetString("Token");
            if (token == null)
            {
                return (RedirectToAction("Index"));
            }
            if (!_tokenService.IsTokenValid(_config["Jwt:Key"].ToString(), _config["Jwt:Issuer"].ToString(), token))
            {
                return (RedirectToAction("Index"));
            }
            return Ok();
        }
    }
}