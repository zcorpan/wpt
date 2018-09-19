// META: global=worker
try
{
  importScripts(TrustedScriptURL.unsafelyCreate("worker.js"));
}
catch(ex)
{
  result = "Fail";
  postMessage(result);
}
