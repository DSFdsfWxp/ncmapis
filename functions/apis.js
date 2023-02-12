export function onRequest(context){
    var request = context.request;
    var worker = context.env.worker;
    try {
        const r = new URL(request.url);
        return new Response(r.pathname)
        //const rr = Object.assign({},request);
        //console.log(pathname);
        /*
        if (pathname.startsWith("/status")) {
          const httpStatusCode = Number(pathname.split("/")[2]);
  
          return Number.isInteger(httpStatusCode)
            ? fetch("https://http.cat/" + httpStatusCode)
            : new Response("That's not a valid HTTP status code.");
        }
        */
        var o = {
          method: request.method,
          headers: request.headers,
          redirect: request.redirect,
          body: request.body
        }
        //console.log(rr);  + r.pathname.replace('/apis/','/') + r.search, o
        return fetch("https://wnull-ncmapi.vercel.app/");
      } catch(e) {
        return new Response(e, { status: 500 })
      }
}