function define(name, value) {
    Object.defineProperty(exports, name, {
        value:        value,
        enumerable:   true,
        writable:     false,
        configurable: false
    });
}

// Define Custom Constants
define('userID', 'orgId');
define('passID', 'connId');
