(function(window, undefined) {
  var dictionary = {
    "6f81fb00-911a-41a3-9fb2-a3f2665b6872": "Center",
    "c5d4883f-5c6d-429e-870c-0adcf9694ec2": "Earthquake",
    "923c208b-af61-46dc-b987-7b42432accce": "red envelop",
    "6718f639-39c8-493d-8c05-a2072455e4e1": "Flood",
    "68503a7d-e959-40d2-95b6-e671729aeb29": "index",
    "91430d37-d314-416f-9b35-58532346970a": "Mudslides",
    "772957dc-2386-4c95-ae80-58d3c6ec94d2": "white envelop",
    "f48eee76-4316-43ec-a259-bb95aeb68530": "login",
    "81ec854f-9587-42b6-ac8f-f34fa96ec55c": "Iphone",
    "cc5c9bd5-aaf6-489b-8661-cede3e146593": "Side_Panel_1",
    "c54474a1-4a9a-47f9-8e57-aceb0a325646": "Typhoon",
    "bf9aaafe-f287-4cfa-9d98-a1cea4e982a3": "Message",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);