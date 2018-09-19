// META: global=worker

test(t => {
    self.result = "Fail";
    try
    {
      importScripts(TrustedScriptURL.unsafelyCreate("support/worker.js"));
    }
    catch(ex)
    {
      if(ex instanceof TypeError) {
        self.result = "Type Error";
      }
      else {
        self.result = "Error";
      }
    }
    assert_equals(self.result, "Pass");
}, "TrustedScriptURL works.");
