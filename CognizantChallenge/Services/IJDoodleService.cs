using System;
using System.Threading.Tasks;
using CognizantChallenge.Models;

namespace CognizantChallenge.Services
{
    public interface IJDoodleService
    {
        Task<CodeExecuteResponse> ExecuteCodeAsync(CodeExecuteRequest codeExecuteRequest);
    }
}
