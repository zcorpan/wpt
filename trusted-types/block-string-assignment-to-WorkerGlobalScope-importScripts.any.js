// META: global=worker

function importScriptsTest(t, input, expected) {
 // (t.step_func_done(_ => {
    self.result = "Fail";
    try
    {
      importScripts(input);
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
    assert_equals(self.result, expected);
//  }))();
}

//TrustedScriptURL assignments do not throw
test(t => {
  importScriptsTest(t, TrustedScriptURL.unsafelyCreate("support/worker.js"), "Pass");
}, "importScripts from TrustedScriptURL");

//String assignments throw
test(t => {
  importScriptsTest(t, "support/worker.js", "Type Error");
}, "`importScripts from string` throws");

//Null assignment throws
test(t => {
  importScriptsTest(t, null, "Type Error");
}, "`importScripts from null` throws");

