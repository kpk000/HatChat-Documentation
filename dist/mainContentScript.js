!function(){console.log("Hola desde el content script");let e=null,s=null;chrome.runtime.onMessage.addListener(((n,i,a)=>{"sendKeys"===n.message?(console.log("Recibida petición de clave de sesión"),e=n.password,s=n.ssKey):"getKeys"===n.message?(console.log("Recibida petición de clave de sesión en main",e,s),a({savedPass:e,sessionKey:s})):n.credentials&&(console.log("Credenciales recibidas en el mainContentScript:",n.credentials),e=n.credentials.password?n.credentials.password:e,s=n.credentials.savedSessionKey?n.credentials.savedSessionKey:s,a({farewell:"Credenciales recibidas correctamente."}))}))}();