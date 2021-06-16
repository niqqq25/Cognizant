using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using CognizantChallenge.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace CognizantChallenge.Services
{
    public class JDoodleService : IJDoodleService
    {
        readonly HttpClient _httpClient;

        public JDoodleService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<CodeExecuteResponse> ExecuteCodeAsync(CodeExecuteRequest codeExecuteRequest)
        {
            var serializerSettings = new JsonSerializerSettings();
            serializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            string json = JsonConvert.SerializeObject(codeExecuteRequest, serializerSettings);

            var res = await _httpClient.PostAsync("/v1/execute", new StringContent(json, Encoding.UTF8, "application/json"));

            var codeExecuteResponse = JsonConvert.DeserializeObject<CodeExecuteResponse>(await res.Content.ReadAsStringAsync());

            return codeExecuteResponse;
        }
    }
}
