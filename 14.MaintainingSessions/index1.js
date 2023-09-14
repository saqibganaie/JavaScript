//// Cookies are small pieces of data used to maintain sessions in a broweser/website.
//
////
////console.log(document.cookie);
//
//// To add cookies
//document.cookie = "_Name=Saqib" // I've put underscore before keys because it is the convention for keys in cookies otherwise it is not necessary
//document.cookie = "_Age = 22"
//document.cookie = "_Place=Jammu; College=NIT; Batch=IT" // We cannot add mulitple cookies like this, in this only the first entry will be added and others will be ignored

//// To update an existing cookie just use document.cookie with same key but different value which you want to update.
//
//document.cookie = "_Name=MyName"



//// Sometimes users can pass special chars like =, $, ;, :, @ etc so the cookie will reject these data which will create a problem for us so to accept these data too we encode the cookie key and value. Like this
//
//let key = prompt("Enter your key");
//let value = prompt("Enter your value");
//
//document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;
//
//
//// After encoding the cookie it is not human readable so we need to decode it to read it. We can decode it like this
//let encodedData = "_%40saqib%3B"
//let decodedData = decodeURIComponent(encodedData);
//console.log(decodedData)
//
//console.log(document.cookie)

//// We can also set the paths for which we want to set the cookies like https://website/home, https://website/about etc and also the expiration time for the cookie. Like this
//
//document.cookie = "hellYas=hellNO; path=http://127.0.0.1:5500/14.MaintainingSessions/index.html; expires=Wed,13 September 2023 13:42:00 GMT"

console.log(document.cookie)

// * Some points worth noting

// 1. The name=value pair after encodeURIComponent should not exceed 4 KB.
// 2. Total no. of cookies per domain is limited to around 20+ (exact number is browser dependet). So use them accordingly.

//* Reading a cookie

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null; // Cookie not found
  }
  
  // Usage
  const username = getCookie('_user');
  if (username) {
    console.log('Username:', username);
  } else {
    console.log('Username cookie not found.');
  }

  //* Deleting a cookie
  function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // We are setting it's expiration date to past so that the browser will delete it automatically
  }
  
  // Usage
  deleteCookie("username"); // Replace "username" with the name of the cookie you want to delete
  


// * Remember to handle cookies carefully, especially when dealing with sensitive information, and be aware of potential security risks like Cross-Site Scripting (XSS) attacks. Additionally, consider using modern web storage options like localStorage and sessionStorage for storing data when appropriate, as they offer a safer and more structured approach compared to cookies for many use cases.
//  
  