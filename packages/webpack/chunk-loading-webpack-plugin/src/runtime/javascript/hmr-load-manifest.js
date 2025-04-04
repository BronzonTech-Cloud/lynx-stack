/*
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
*/
// @ts-nocheck

export default function() {
  $RuntimeGlobals_hmrDownloadManifest$ = function() {
    return new Promise((resolve, reject) =>
      lynx.requireModuleAsync(
        $RuntimeGlobals_publicPath$
          + $RuntimeGlobals_getUpdateManifestFilename$(),
        (err, ret) => {
          if (err) return reject(err);
          resolve(ret);
        },
      )
    )['catch'](function(err) {
      if (err.code !== 'MODULE_NOT_FOUND') throw err;
    });
  };
}
