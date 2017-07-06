// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, tab) {
 

  var data = new FormData();
data.append("val",info.selectionText); 
 

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
     
    jsondata = JSON.parse(this.responseText);
    alert(jsondata.success);

  }
});

xhr.open("POST", "http://dcms.test.dev/api/external/langadd");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "2e9ae0d8-5e92-b4be-2574-fa6c0a4ec330");

xhr.send(data);

 
  //alert("tab: " + JSON.stringify(tab));
}

// Create one test item for each context type.
var contexts = ["page","selection","editable","image","video",
                "audio"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Dil dosyasına ekle ";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": genericOnClick}); 
}

 