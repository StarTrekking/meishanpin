var list1 = ["*.raz-plus.com","raz-plus.com","*.raz-kids.com","cf.content.kidsa-z.com","www.kidsa-z.com","*.raz-kids.com","*.raz-kids.com","*.raz-kids.com","raz-kids.com","*.learninga-z.com","learninga-z.com","*.headsprout.com","headsprout.com","readinga-z.com","*.readinga-z.com","vocabularya-z.com","*.vocabularya-z.com","writinga-z.com","*.writinga-z.com","sciencea-z.com","*.sciencea-z.com","*.kidsa-z.com", "kidsa-z.com"];
var proxy1 = "PROXY 82.156.4.206:18630; PROXY 43.154.95.53.globalssh.cn:18620; DIRECT;";
function FindProxyForURL(url, host) {
    for (var i = 0, l = list1.length; i < l; i++) {
        if (shExpMatch(host, list1[i])) {
            return proxy1;
        }
    }
    
    return "DIRECT";
}