/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    SystemJS.config({
        // paths serve as alias...wenn wir intern über npm: sprechen ... diese dann innerhalb meines projektsetups in node_modules/ gesucht werden soll
        paths: {   
            "npm:": "node_modules/"
        },
        map: {           
            "app": "app",
                
            "@angular/core": "npm:@angular/core/bundles/core.umd.js",
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
    
            "rxjs": "npm:rxjs"
        },

        packages: {
            app: {
                main: "./main.js",
                defaultExtension: "js"
            },
            rxjs: {
                defaultExtension: "js"
            }
        }
    })
})(this);
