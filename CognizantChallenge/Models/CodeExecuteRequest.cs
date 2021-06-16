using System;
using Newtonsoft.Json;

namespace CognizantChallenge.Models
{
    public class CodeExecuteRequest
    {
        public string ClientId { get; set; }

        public string ClientSecret { get; set; }

        public string Script { get; set; }

        public string Language { get; set; }

        public int VersionIndex { get; set; }
    }
}
