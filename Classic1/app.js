/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Classic1.Application',

    name: 'Classic1',

    requires: [
        // This will automatically load all classes in the Classic1 namespace
        // so that application classes do not need to require each other.
        'Classic1.*'
    ],


    // The name of the initial view to create.
    mainView: 'Classic1.view.main.Login'

    
});
