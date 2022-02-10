using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebApi.Models;


public interface ITokenService
{
    string BuildToken(string key, string issuer, object user);
    bool ValidateToken(string key, string issuer, string audience, string token);
    bool IsTokenValid(string v1, string v2, string token);
}

public class TokenService : ITokenService
{
    private const double EXPIRY_DURATION_MINUTES = 30;

    public string BuildToken(string key, string issuer, object user)
    {
        var claims = new[] {
            new Claim(ClaimTypes.Name, (user as User).username),
            new Claim(ClaimTypes.NameIdentifier,
            Guid.NewGuid().ToString())
        };

        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);
        var tokenDescriptor = new JwtSecurityToken(issuer, issuer, claims,
            expires: DateTime.Now.AddMinutes(EXPIRY_DURATION_MINUTES), signingCredentials: credentials);
        return new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
    }
    public bool IsTokenValid(string key, string issuer, string token)
    {
        var mySecret = Encoding.UTF8.GetBytes(key);
        var mySecurityKey = new SymmetricSecurityKey(mySecret);
        var tokenHandler = new JwtSecurityTokenHandler();
        try
        {
            tokenHandler.ValidateToken(token,
            new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidIssuer = issuer,
                ValidAudience = issuer,
                IssuerSigningKey = mySecurityKey,
            }, out SecurityToken validatedToken);
        }
        catch
        {
            return false;
        }
        return true;
    }

    public bool ValidateToken(string key, string issuer, string audience, string token)
    {
        throw new NotImplementedException();
    }
}

