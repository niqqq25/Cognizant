using System;
using System.Threading.Tasks;
using CognizantChallenge.Models;
using CognizantChallenge.Repositories;
using CognizantChallenge.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace CognizantChallenge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        readonly IJDoodleService _jDoodleService;
        readonly IConfiguration _configuration;
        readonly ITaskRepository _taskRepository;

        public TasksController(IConfiguration configuration, IJDoodleService jDoodleService, ITaskRepository taskRepository)
        {
            _configuration = configuration;
            _jDoodleService = jDoodleService;
            _taskRepository = taskRepository;
        }

        [HttpPost]
        public async Task<ActionResult> PostTask([FromBody] Models.Task task)
        {
            var response = await _jDoodleService.ExecuteCodeAsync(new CodeExecuteRequest
            {
                ClientId = _configuration["JDoodleApi:ClientId"],
                ClientSecret = _configuration["JDoodleApi:ClientSecret"],
                Language = "csharp",
                VersionIndex = 3,
                Script = task.SolutionCode
            });

            if (response.Memory == null)
            {
                return BadRequest(new { errors = "Code failed to compile" });
            }

            _taskRepository.AddTask(new Entities.Task
            {
                CodeSolution = task.SolutionCode,
                Result = response.Output
            });

            return Ok();
        }
    }
}