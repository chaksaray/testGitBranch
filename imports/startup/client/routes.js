import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '../../ui/layouts/main-layout.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/register/register.js';
import '../../ui/pages/login/login.js';
import '../../ui/pages/products/products.js';
import '../../ui/pages/productdetail/productdetail.js';
// import '../../ui/pages/app-not-found.js';

// Import to override accounts templates
// import '../../ui/accounts/accounts-templates.js';
// home router
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('mainLayout', {body: 'home'});
    }
});

//register user router
FlowRouter.route('/register', {
    name: 'register',
    action() {
        BlazeLayout.render('mainLayout', {body: 'register'});
    }
});

//login router
FlowRouter.route('/login', {
  name: 'login',
    action() {
        BlazeLayout.render('mainLayout', {body: 'login'});
    }
});

//products router
FlowRouter.route('/products',{
    name: 'products',
    action(){
        BlazeLayout.render('mainLayout',{body: 'products'});
    }
});

//product detail router
FlowRouter.route('/productdetail',{
    name:'productdetail',
    action(){
        BlazeLayout.render('mainLayout',{body: 'productdetail'});
    }
});