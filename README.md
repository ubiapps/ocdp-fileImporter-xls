ocdp-fileImporter-xls
=====================

Adapter for importing XLS files into OCDP

Introduction
---

This module provides the ability to import XLS files into the UbiApps Open City Data Platform.

Files are imported from disk and stored in the given mongodb collection.

Installation
---

Clone this repository into a sub-folder of your OCDP Data Access and Service Toolkit installation, and re-start the platform. The XLS importer will automatically be loaded and available for use when importing documents.


Usage
---

The adapter will automatically be picked up and made available via the OCDP web UI. If you want to programmatically use the adapter see the example below.

```sh
var filePath = "/path/to/xls/file";
var coll = <mongodb collection>;
var importer = require("ocdp-fileImporter-xls");
importer.import(coll, filePath, function(err, dataSet) {
    if (err) {
        // Error occurred.

    } else {
        // Import succeeded.
        
    }
});

```

Related
---

For details of how to write an OCDP adapter, see the [ocdp adapter how-to].

[ocdp adapter how-to]:http://github.com/ubiapps/ocdp-adapters
