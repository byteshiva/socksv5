function define(name, value) {
    Object.defineProperty(exports, name, {
        value:        value,
        enumerable:   true,
        writable:     false,
        configurable: false
    });
}

// Define Custom Constants
define('USERID', 'orgId');
define('PASSID', 'connId');
