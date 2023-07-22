Ext.define('Classic1.view.main.Login', {
    extend: 'Ext.Container',
    xtype: 'template-login',
    controller: 'template-login',

    autoSize: true,

    profiles: {
        defaults: {
            width: 340,
            height: 544,
            margin: '25 0 0 0',
            forgotMargin: '20 0 0 0',
            signMargin: '4 0 0 0',
            buttonHeight: 30
        },
        'classic-material': {
            width: 340,
            height: 544,
            margin: (Ext.isIE || Ext.isEdge) ? '10 0 0 0' : '25 0 0 0',
            forgotMargin: '20 0 0 0',
            signMargin: '4 0 0 0',
            buttonHeight: 30
        },
        graphite: {
            width: 340,
            height: 544,
            margin: '15 0 0 0',
            forgotMargin: '10 0 0 0',
            signMargin: '0 0 0 0',
            buttonHeight: 50
        }
    },
    width: 340,
    height: 544,
    layout: {
        type: 'vbox',
        align: 'middle'
    },
    scrollable: 'y',
    otherContent: [
        {
            type: 'Controller',
            path: 'app/view/main/LoginController.js'
        }
    ],
    // Setting the background of the container
    style: 'background: linear-gradient(to right, #2C3E50, #3498DB, #E74C3C);', // Cool blue background color

    items: [
        {
            xtype: 'form',
            height: 514,
            width: 340,
            reference: 'formLogin',
            bodyPadding: 30,
            style: 'background-color: #fff; border-radius: 10px;', // White background color with rounded corners
            items: [
                {
                    xtype: 'image',
                    height: 30,
                    width: 40,
                    margin: '0 0 20 0',
                    alt: 'sencha-logo-image',
                    src: 'resources/images/bbb.png'
                },
                {
                    xtype: 'component',
                    width: 280,
                    height: 27,
                    margin: '9 0 0 0',
                    html: 'Login Into Your Account',
                    style: {
                        'font-size': '20px',
                        'text-align': 'center',
                        'margin': 'auto',
                        'color': '#3498DB', // Vibrant blue color for the heading
                        'font-weight': 'bold' // Bold font for the heading
                    }
                },
                {
                    xtype: 'component',
                    reference: 'formLoginFailure',
                    tpl: '<tpl if="errors.length">' +
                        '<span class="x-fa fa-exclamation-circle" style="color: red;">' +
                        ' Login Failure</span>' +
                        '</tpl>',
                    height: 26,
                    width: 280,
                    margin: '9 0 0 0',
                    style: {
                        'font-size': '20px',
                        'text-align': 'center',
                        'color': 'red' // Red color for error messages
                    }
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    width: 280,
                    margin: "25 0 0 0",
                    fieldLabel: 'Email Address',
                    name: 'email',
                    placeholder: 'Email Address',
                    msgTarget: 'qtip',
                    responsiveConfig: {
                        'desktop': {
                            msgTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    inputType: 'password',
                    allowBlank: false,
                    required: true,
                    width: 280,
                    fieldLabel: 'Password',
                    name: 'pass',
                    placeholder: 'password',
                    msgTarget: 'qtip',
                    margin: "25 0 0 0",
                    responsiveConfig: {
                        'desktop': {
                            msgTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'checkbox',
                    width: 280,
                    height: 30,
                    boxLabel: 'Keep me logged in',
                    name: 'remember',
                    margin: "25 0 0 0",
                    style: {
                        'font-size': '16px',
                        'letter-spacing': '1.25px',
                        'color': 'rgba(17, 17, 17, 0.54)'
                    }
                },
                {
                    xtype: 'button',
                    text: 'LOG IN',
                    autoSize: true,
                    handler: 'onLogin',
                    height: 30,
                    width: 280,
                    margin: '30 0 0 0',
                    style: {
                        'text-align': 'center',
                        'letter-spacing': '1.25px',
                        'font-size': '14px'
                    }
                },
                {
                    xtype: 'component',
                    html: "<a style='color: var(--base-color);text-decoration: none;' href='#template-reset-password'>Forgot your Password?</a>",
                    style: {
                        'font-size': '16px',
                        'text-align': 'center'
                    },
                    width: 280,
                    margin: "20 0 0 0"
                }
            ]
        },
       
        {
            xtype: 'component',
            margin: '4 0 0 0',
            width: 280,
            style: {
                'font-size': '16px',
                'text-align': 'center',
                'color': '#fff', // White color for text
                'letter-spacing': '1.25px'
            },
            html: 'Don’t have an account?' +
            "<a style='font-weight:bold;color:#3498DB;text-decoration:none;' href='#template-create-account'> Sign-Up</a>",
            style: 'background-color: #BCF1FF; padding: 10px; border-radius: 10px;', // Blue background color with rounded corners
        }
    ]
});