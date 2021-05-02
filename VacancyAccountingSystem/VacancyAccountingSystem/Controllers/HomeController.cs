﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VacancyAccountingSystem.Controllers
{
    [ApiController]
    [Route("api/vacansies")]
    public class HomeController : ControllerBase
    {
        [HttpGet, Route("get")]
        [Authorize(Roles = "Manager")]
        public IEnumerable<string> Get() => new string[] { "C1", "C2" };
    }
}
