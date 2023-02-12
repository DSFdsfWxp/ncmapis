export async function onRequest(context){
    var request = context.request;
    var worker = context.env.worker;

    var ur = new URL(request.url);
    var o = {
        method: request.method,
        headers: request.headers,
        redirect: request.redirect,
        body: request.body
    };
    var u = Array.isArray(context.params.catchall) ? (context.params.catchall.length!=0 ? context.params.catchall.join('/') : '/') : '/';
    var r = new Request('https://ncmapis.dsfdsfwxp.workers.dev' + u + ur.search,o);

    return await worker.fetch(r)
}