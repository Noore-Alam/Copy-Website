         (function(i,s,o,g,r,a,m,n){
         i['moengage_object']=r;t={}; q = function(f){return function(){(i['moengage_q']=i['moengage_q']||[]).push({f:f,a:arguments});};};
         f = ['track_event','add_user_attribute','add_first_name','add_last_name','add_email','add_mobile',
         'add_user_name','add_gender','add_birthday','destroy_session','add_unique_user_id','moe_events','call_web_push','track','location_type_attribute'];
         for(k in f){t[f[k]]=q(f[k]);}
         a=s.createElement(o);m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
         i['moe']=i['moe'] || function(){n=arguments[0];return t;}; a.onload=function(){if(n){i[r] = moe(n);}};
         })(window,document,'script','https://cdn.moengage.com/webpush/moe_webSdk.min.latest.js','Moengage');
         Moengage = moe({
         app_id:"CTEZ424X7TDOIOM80DOUASW5",
         debug_logs: 0
         });



         (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
         h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
         (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
         })(window,document.documentElement,'async-hide','dataLayer',4000,
         {'GTM-NN2X69D':true});


                  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
         })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
         ga('create', 'UA-110505617-1', 'auto');
         ga('require', 'GTM-NN2X69D');
         ga('send', 'pageview');



                  var InternalTraffic = getCookie('InternalTraffic');
         function getCookie(name) {
           var matches = document.cookie.match(new RegExp(
             "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
           ));
           return matches ? decodeURIComponent(matches[1]) : undefined;
         }
         // Hotjar Tracking Code for https://www.campusreel.org
         (function(h,o,t,j,a,r){
           h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
           h._hjSettings={hjid:1013985,hjsv:6};
           a=o.getElementsByTagName('head')[0];
           r=o.createElement('script');r.async=1;
           r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
           a.appendChild(r);
         })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
         
         // Google Tag Manager
         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
         new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
         j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
         'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
         })(window,document,'script','dataLayer','GTM-5T49NN5');
         
         // Quantcast Tag
         var _qevents = _qevents || [];
         (function() {
           var elem = document.createElement('script');
           elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
           elem.async = true;
           elem.type = "text/javascript";
           var scpt = document.getElementsByTagName('script')[0];
           scpt.parentNode.insertBefore(elem, scpt);
         })();
         _qevents.push({qacct:"p-FRFqzDxCqUfPr"});
         // google analytics
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'AW-836161743', {
           'groups': 'group1',
           'user_id': localStorage.user_id
           });
           gtag('config', 'UA-110505617-1',{
             'groups': 'group1',
             'user_id': localStorage.user_id,
             'page_path': window.location.href,
             'custom_map': {
               'dimension1': 'User Type',
               'dimension2': 'User Registration Type',
               'dimension4': 'Watched Videos',
               'dimension5': 'UserID',
               'dimension6': 'Plan',
               'dimension7': 'Premium'
             }
           });
           var _gaq = _gaq || [];
           _gaq.push(['_setDomainName', 'none']);
         if (InternalTraffic) {
           window['ga-disable-AW-836161743'] = true;
           window['ga-disable-UA-110505617-1'] = true;
         }
         // mixpanel
         (function(e,a) {
           if(!a.__SV) {
             var b=window;
             try {
               var c,l,i,j=b.location,g=j.hash;
               c=function(a,b) {
                 return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null
               };
               g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))
             }catch(m){}var k,h;
             window.mixpanel=a;a._i=[];
             a.init=function(b,c,f) {
               function e(b,a) {
                 var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);
                 b[a]=function() {
                   b.push([a].concat(Array.prototype.slice.call(arguments, 0)))
                 }
               }
               var d=a;
               "undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];
               d.toString=function(b) {
                 var a="mixpanel";
                 "mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a
               };
               d.people.toString=function() {
                 return d.toString(1)+".people (stub)"
               };
               k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
               for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])
             };
             a.__SV=1.2;
             b=e.createElement("script");
             b.type="text/javascript";
             b.async=!0;
             b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
             c=e.getElementsByTagName("script")[0];
             c.parentNode.insertBefore(b,c)
           }
         })(document,window.mixpanel||[]);




         mixpanel.init("0417a94c2e627e0f36612df84c3215b7",{cross_subdomain_cookie:false});



          $.ajax({type: "GET", url: "/current_user_info",dataType : "json", success: function (data){
              if (data.type != "Guest"){
                localStorage.setItem('user_id', data.user_id);
                localStorage.setItem('user_type', data.type);
              }
            }});



                   !function(){
           var a = window.VL = window.VL || {};
           return a.instances = a.instances || {}, a.invoked? void(window.console&&console.error&&console.error("VL snippet loaded twice.")) : (a.invoked =!0,
             void(a.load=function(b,c,d){
               var e = {};
               e.publicToken = b,e.config = c || {};
               var f = document.createElement("script");
               f.type = "text/javascript", f.id = "vrlps-js", f.defer =! 0,
               f.src="https://app.viral-loops.com/client/vl/vl.min.js";
               var g = document.getElementsByTagName("script")[0];
               return g.parentNode.insertBefore(f,g), f.onload = function(){a.setup(e), a.instances[b]=e },
                 e.identify = e.identify || function(a,b){e.afterLoad = { identify:{userData:a,cb:b}}},
                 e.pendingEvents = [], e.track = e.track || function(a,b){ e.pendingEvents.push({event:a,cb:b})},
                 e.pendingHooks = [], e.addHook = e.addHook || function(a,b){e.pendingHooks.push({name:a,cb:b})},
                 e.$ = e.$ || function(a){e.pendingHooks.push({name:"ready",cb:a})}, e
             })
           )}();