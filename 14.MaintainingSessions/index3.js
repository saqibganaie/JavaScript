//Session Storage: A web browser feature for storing key-value data during a single browsing session. Data is accessible only within the same tab or window and is cleared when the session ends (i.e., when the tab is closed).
//
//Difference:
//- **Session Storage:** Data is temporary, lasts only for the session, and is tab/window-specific.
//- **Local Storage:** Data is persistent, remains after the browser is closed, and is accessible across tabs/windows within the same domain.
//
//When to Use:
//- **Session Storage:** Use for short-term data needed within a single session, like storing form data temporarily.
//- **Local Storage:** Use for long-term data retention, such as user preferences or cached application state, where data should persist across sessions.

//* IMP- It has the same method and properties as localStorage.

//*// we can listen to the changes in storages across tabs like this.
//
//window.onstorage = (e)=>{
//    alert("Changed");
//    console.log(e); // This is the event which will give us all the info about what was changed
//}