export async function onRequest(context){
    var request = context.request;
    var worker = context.env.worker;

    var o = {
        method: request.method,
        headers: request.headers,
        redirect: request.redirect,
        body: request.body
      }
    var r = new Request('https://ncmapis.dsfdsfwxp.workers.dev/' + context.params.catchall.join('/'),o);

    return await worker.fetch(r)
}