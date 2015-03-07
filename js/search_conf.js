//conf.search
conf.searchGroup = {
  conf: {
    index: {
      logoPath: "/static/web/ar/img/search_logo/",
      //if used in lv2 page the folder's name is "serach_logo_lv2"
      curN: 0,
      //the current tab serial number
      delay: 200,
      n: 8
    },
    lv2: {
      logoPath: "/static/web/ar/img/search_logo/",
      curN: 0,
      delay: 200,
      n: 8
    }
  },
  list: {

    //网页
    "web": [{
      name: "Google مصر",
      logo: "google",
      url: "http://www.google.com.eg/?q=&hl=ar",
      action: "http://www.google.com.eg/search?",
      params: {
        "hl": "ar"
      },
      q: "q",

      sug: {
        requestQuery: "q",
        url: "http://clients1.google.com.eg/complete/search",
        callbackFn: "window.google.ac.h",
        callbackDataNum: 1,
        requestParas: {
          "client": "hp",
          "hl": "ar",
          "authuser": "0"
        },
        templ: function(data) {
          var _data = data[1] || [],
              q = data[0],
              ret = [],
              i = 0,
              len = _data.length;
          for (; i < len; i++) {
            ret.push('<li q="' + _data[i][0] + '">' + _data[i][0] + '</li>')
          }

          return '<ol>' + ret.join("") + '</ol>';
        }
      }
    }, {
      name: "Yahoo",
      logo: "yahoo",
      url: "http://www.yahoo.com",
      action: "http://search.yahoo.com/search?",
      params: {},
      q: "p",

      sug: {
        requestQuery: "command",
        url: "http://sugg.us.search.yahoo.net/gossip-us-ura",
        callbackFn: "YUI.Env.DataSource.callbacks.yui_3_3_0_1_1312871021408973",
        callbackDataKey: "r",
        requestParas: {
          "output": "yjsonp",
          "callback": "YUI.Env.DataSource.callbacks.yui_3_3_0_1_1312871021408973"
        },
        templ: function(data) {
          var _data = data["r"] || [],
              q = data["q"],
              ret = [],
              i = 0,
              len = _data.length;
          for (; i < len; i++) {
            ret.push('<li q="' + _data[i][0] + '">' + _data[i][0].replace(q, '<span class="sug-query">' + q + '</span>') + '</li>')
          }
          return '<ol>' + ret.join("") + '</ol>';
        }
      }
    }],

    //视频
    "video": [{
      name: "Yahoo فيديو",
      logo: "yahoo_video",
      url: "http://video.search.yahoo.com",
      action: "http://video.search.yahoo.com/search/video?",
      params: {},
      q: "p",

      sug: {
        requestQuery: "command",
        url: "http://gossip-ss.us.search.yahoo.com/gossip-us_ss/",
        callbackFn: "fxsearch",
        callbackDataNum: 1,
        requestParas: {
          "nresults": 8,
          "output": "fxjsonp"
        },
        templ: function(data) {
          var _data = data[1] || [],
              q = data[0],
              ret = [],
              i = 0,
              len = _data.length;
          for (; i < len; i++) {
            ret.push('<li q="' + _data[i] + '">' + _data[i].replace(q, '<span class="sug-query">' + q + '</span>') + '</li>')
          }
          return '<ol>' + ret.join("") + '</ol>';
        }
      }
    }, {
      name: "YouTube",
      logo: "youtube",
      url: "http://www.youtube.com/index?hl=ar",
      action: "http://www.youtube.com/results",
      params: {},
      q: "search_query",

      sug: {
        requestQuery: "q",
        url: "http://suggestqueries.google.com/complete/search",
        callbackFn: "window.yt.www.suggest.handleResponse",
        callbackDataNum: 1,
        requestParas: {
          "hl": "ar",
          "ds": "yt",
          "client": "youtube",
          "hjson": "t",
          "jsonp": "window.yt.www.suggest.handleResponse",
          "cp": "2"
        },

        templ: function(data) {
          var _data = data[1] || [],
              q = data[0],
              ret = [],
              i = 0,
              len = _data.length;
          for (; i < len; i++) {
            ret.push('<li q="' + _data[i][0] + '">' + _data[i][0].replace(q, '<span class="sug-query">' + q + '</span>') + '</li>')
          }
          return '<ol>' + ret.join("") + '</ol>';
        }
      }
    }],

    //图片
    "images": [{
      name: "Google صور",
      logo: "google_images",
      url: "http://www.google.com.eg/imghp?hl=ar&tbm=isch&source=og&sa=N&tab=li",
      action: "http://www.google.com.eg/search",
      params: {
        "tbm": "isch",
        "hl": "ar",
        "source": "hp"
      },
      q: "q",

      sug: {
        requestQuery: "q",
        url: "http://clients1.google.com.eg/complete/search",
        callbackFn: "window.google.ac.h",
        callbackDataKey: 1,
        requestParas: {
          "hl": "ar",
          "client": "img",
          "sugexp": "gsihc"
        },
        templ: function(data) {
          var _data = data[1] || [],
              q = data[0],
              ret = [],
              i = 0,
              len = _data.length;
          for (; i < len; i++) {
            ret.push('<li q="' + _data[i][0] + '">' + _data[i][0].replace(q, '<span class="sug-query">' + q + '</span>') + '</li>')
          }
          return '<ol>' + ret.join("") + '</ol>';
        }
      }
    }],

    //地图
    "map": [{
      name: "Google خرائط",
      logo: "google_map",
      url: "http://maps.google.com.eg/maps?hl=ar&tab=il",
      action: "http://maps.google.com.eg/maps",
      params: {
        "hl": "ar"
        //"tab": "il"
      },
      q: "q",

      sug: {
        requestQuery: "q",
        url: "http://maps.google.com.eg/maps/suggest",
        callbackFn: "_xdc_._bgnkibby8",
        callbackDataKey: 3,
        requestParas: {
          "cp": "2",
          "hl": "ar",
          "gl": "ar",
          "v": "2",
          "clid": "1",
          "json": "a",
          "ll": "21.902278,101.469727",
          "spn": "5.706298,39.506836",
          "auth": "ac0dbe60:A6KQ3ztz8bQ13_rnpShsJPs6jOU",
          "src": "1",
          "num": "5",
          "numps": "5",
          "callback": "_xdc_._bgnkibby8"
        },
        templ: function(data) {
          var _data = data[3] || [],
              q = this.q,
              ret = [],
              i = 0,
              len = _data.length,
              detail = "";

          for (; i < len; i++) {
            try {
              detail = _data[i][9][0][0] || _data[i][9][0] || _data[i][9] || "";
            } catch (e) {
              detail = ""
            }

            detail = detail ? '<span style=" font-weight:bold; color:#999;"> - ' + detail + '</span>' : "";

            ret.push('<li q="' + _data[i][0] + '">' + _data[i][0].replace(q, '<span class="sug-query">' + q + '</span>') + detail + '</li>')
          }
          return '<ol>' + ret.join("") + '</ol>';
        }
      }
    }, {
      name: "Wikimapia",
      logo: "wikimapia",
      url: "http://wikimapia.org",
      action: "http://wikimapia.org/#l=10&search=#{q}",
      params: {},
      q: "search",
      sug: {
        url: null
      }
    }],

    //百科
    "wiki": [{
      name: "ويكيبيديا بالعربية",
      logo: "wiki_ar",
      url: "http://ar.wikipedia.org",
      action: "http://ar.wikipedia.org/w/index.php",
      params: {},
      q: "search",

      sug: {
        requestQuery: "search",
        url: "http://ar.wikipedia.org/w/api.php",
        callbackFn: "wikipedia.ar",
        callbackDataNum: 1,
        requestParas: {
          "action": "opensearch",
          "namespace": "0",
          "suggest": "",
          "callback": "wikipedia.ar"
        },
        templ: function(data) {
          var _data = data[1] || [],
              q = data[0],
              ret = [],
              i = 0,
              len = _data.length;
          for (; i < len; i++) {
            ret.push('<li q="' + _data[i] + '">' + _data[i].replace(q, '<span class="sug-query">' + q + '</span>') + '</li>')
          }
          return '<ol>' + ret.join("") + '</ol>';
        }
      }
    }, {
      name: "ويكيبيديا بالانجليزية",
      logo: "wiki_en",
      url: "http://en.wikipedia.org/",
      action: "http://en.wikipedia.org/w/index.php",
      params: {},
      q: "search",

      sug: {
        requestQuery: "search",
        url: "http://en.wikipedia.org/w/api.php",
        callbackFn: "wikipedia.en",
        callbackDataNum: 1,
        requestParas: {
          "action": "opensearch",
          "namespace": "0",
          "suggest": "",
          "callback": "wikipedia.en"
        },
        templ: function(data) {
          var _data = data[1] || [],
              q = data[0],
              ret = [],
              i = 0,
              len = _data.length;
          for (; i < len; i++) {
            ret.push('<li q="' + _data[i] + '">' + _data[i].replace(q, '<span class="sug-query">' + q + '</span>') + '</li>')
          }
          return '<ol>' + ret.join("") + '</ol>';
        }
      }
    }]
  },

  //更多的下拉框
  more: [{
    name: "Google ترجمة",
    //谷歌翻译
    url: "http://translate.google.com.eg/#en|ar|"
  }, {
    name: "Google إجابات",
    //谷歌问答
    url: "http://ejabat.google.com/ejabat/"
  }]

/*
	more: [{
		name: "أكثر",
		url: "http://translate.google.co.th/"
	}, {
		name: "شرقية",
		url: "http://th.wikipedia.org/"
	}, {
		name: "فورتش",
		url: "http://th.wikipedia.org/"
	}, {
		name: "فورتش",
		url: "http://th.wikipedia.org/"
	}, {
		name: "شرقية",
		url: "http://th.wikipedia.org/"
	}]
	*/
}