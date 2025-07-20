export const api_base = "http://localhost:4000/api";

export const api_headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": ["POST", "GET", "OPTIONS", "DELETE", "PUT"],
  "Access-Control-Allow-Headers": [
    "append",
    "delete",
    "entries",
    "foreach",
    "get",
    "has",
    "keys",
    "set",
    "values",
    "Authorization",
  ],

  redirect: "follow",
};
