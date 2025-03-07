/*
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
*/
// @ts-nocheck

export default function() {
  var loadStylesheet = function(chunkId) {
    return new Promise(function(resolve, reject) {
      var href = $RuntimeGlobals_require$.miniCssF(chunkId);
      var fullHref = $RuntimeGlobals_publicPath$ + href;

      resolve({});
    });
  };
}
