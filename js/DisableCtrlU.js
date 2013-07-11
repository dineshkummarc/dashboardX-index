
// Function calls for the results

// DisableCtrlU();
// DisableF5CtrlR();
// DisableForwardF5();
// DisableForward();
// DisableBackward();
// DisableRefresh();
// DisablePrintP();  // runs on onload event of the page, make it on pressing key
 // DisableF5BackSpace();
 // DisableCtrlcCtrla(); // runs on onload event of the page, make it on pressing key
 
 


// function declaratins for all types of calls
function DisableCtrlU() // function for disabling CTRL+U key stroke
{
var isnn, isie
if (navigator.appName=='Microsoft Internet Explorer')
    { 
    isie = true 
    }
if (navigator.appName=='Netscape')
    { 
    isnn = true
     }
function key (k)
 {
 if(isie)
   {
    if (event.Keycode==17 || event.Keycode==18 || event.Keycode==93)
       { 
       return False;
         }
   }
 if(isnn)
   { 
   return false;
    }
 }
if (document.layers)window.captureEvents(Event.KEYPRESS);
if (document.layers)window.captureEvents(Event.MOUSEDOWN);
if (document.layers)window.captureEvents(Event.MOUSEUP);
document.onkeydown = key;
document.onmousedown = right;
document.onmouseup = right;
window.document.layers = right;
}

function DisableF5CtrlR() // function for disabling DisableF5CtrlR key stroke
{
switch(event.Keycode)
    {
    case 116:
        event.returnValue = false;
        event.Keycode= 0;
        return false;
    case 82:
    if(event.CtrlKey)
            {
            event.returnValue = false;
            event.Keycode= 0;
            return false;
            }
    }
}

function DisableForwardF5() // function for disabling DisableForwardF5 key stroke
{
window.history.forward(1);
switch(event.Keycode)
    {
    case 116:
        event.returnValue = false;
        event.Keycode= 0;
        return false;
    }
}

function DisableForward() // function for disabling DisableForward key stroke
{
window.history.forward(1);
}

function DisableBackward() // function for disabling DisableBackward key stroke
{
window.history.backward(-1);
}

function DisableRefresh() // function for disabling DisableRefresh key stroke
{
if(window.event && window.event.Keycode == 116)
    {
    window.event.Keycode == 505;
    }
if(window.event && window.event.Keycode == 116)
    {
    return false;
    }
}

function DisablePrintP() // function for disabling DisablePrintP key stroke
{
        try
        {
        window.ClipboardData.SetData('text', "No Printing data Present");
        if(event.CtrlKey)
            {
            event.returnValue = false;
            event.Keycode= 0;
        }}
        catch(error)
                {
                txt = "There was an error on this page.\n \n";
                txt += "Error Description :" + error.description + ".\n \n";
                txt += "click OK to Continue.\n \n";
                alert(txt);
                }
                return false;
}

function DisableF5BackSpace() // function for disabling DisableF5BackSpace key stroke
{
evt = window.event;
if (evt.Keycode == 116 || evt.Keycode == 8)
evt.preventDefault();
}

function DisableCtrlcCtrla()
{
var a;
evt = window.event;
if (typeof evt == "undefined")
{
// alert("keyboard");
}
a = evt.Keycode;
// alert("keyboard");
return false;
}


function ChangeSystemTime()
{
[DllImport("kernel32.dll")] 
static extern bool SetLocalTime(ref SYSTEMTIME time);
 [StructLayoutAttribute(LayoutKind.Sequential)] 
 private struct SYSTEMTIME 
 { 
 public short year; 
 public short month; 
 public short dayOfWeek; 
 public short day; 
 public short hour; 
 public short minute; 
 public short second; 
 public short milliseconds; 
 } 
 SYSTEMTIME st; 
 st.year = ... 
 st.month = ... 
  st.dayOfWeek =... 
  st.day = ... 
  st.hour = ... 
 st.minute = ... 
 st.second = ... 
 st.milliseconds = ... 
 SetLocalTime(ref st);

}