using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using StajPortal.Models;

namespace StajPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        public UserProfileController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }



        [HttpGet]
        [Authorize]
        //GET : /api/UserProfile

        public async Task<Object> GetUserProfile()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            return new
            {
                user.FullName,
                user.Email,
                user.UserName,
                user.School
            };
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("ForAdmin")]

        public string GetForAdmin()
        {
            return "Admin için method";
        }

        [HttpGet]
        [Authorize(Roles = "User")]
        [Route("ForUser")]

        public string GetForUser()
        {
            return "User için method";
        }


        [HttpGet]
        [Authorize(Roles ="Admin,User")]
        [Route("ForAdminOrUser")]

        public string GetForAdminOrUser()
        {
            return "Admin veya kullanıcı için method";
        }
    }
}